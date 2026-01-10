
import { GoogleGenAI, Type } from "@google/genai";
import emailjs from "@emailjs/browser";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
  read: boolean;
  aiAnalysis?: {
    category: string;
    urgency: 'low' | 'medium' | 'high';
    summary: string;
  };
}

const STORAGE_KEY = 'portfolio_inquiries';

// Configuration for EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_cj93ydp', 
  TEMPLATE_ID: 'template_jcyuitc',
  PUBLIC_KEY: 'g9CjJlM5iprhKIEg5'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const contactService = {
  async submitMessage(name: string, email: string, message: string): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      message,
      timestamp: Date.now(),
      read: false,
    };

    let analysisResults: NonNullable<ContactMessage['aiAnalysis']> = { 
      category: 'Inquiry', 
      urgency: 'medium', 
      summary: 'AI processing skipped.' 
    };

    try {
      // Step 1: AI Analysis
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this contact form message:
        From: ${name}
        Email: ${email}
        Message: ${message}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              category: { type: Type.STRING },
              urgency: { type: Type.STRING, enum: ['low', 'medium', 'high'] },
              summary: { type: Type.STRING }
            },
            required: ["category", "urgency", "summary"]
          },
          systemInstruction: "Categorize the message intent and urgency accurately."
        }
      });

      const analysis = JSON.parse(response.text || "{}") as NonNullable<ContactMessage['aiAnalysis']>;
      newMessage.aiAnalysis = analysis;
      analysisResults = analysis;
    } catch (error) {
      console.error("AI Analysis Failed (Falling back to default):", error);
      newMessage.aiAnalysis = analysisResults;
    }

    // Step 2: Save to Local Dashboard (Ensures message isn't lost if email fails)
    const existing = this.getMessages();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newMessage, ...existing]));

    // Step 3: Relay to Gmail via EmailJS
    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          user_name: name,
          user_email: email,
          user_message: message,
          ai_summary: analysisResults.summary,
          ai_urgency: analysisResults.urgency,
          ai_category: analysisResults.category,
          to_name: "Efemena"
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log('EmailJS delivery successful:', result.status, result.text);
    } catch (emailError: any) {
      const errorMsg = emailError?.text || emailError?.message || JSON.stringify(emailError);
      console.error("EmailJS delivery failed. Reason:", errorMsg);

      if (errorMsg.includes("insufficient authentication scopes")) {
        console.error("DIAGNOSTIC: Your Gmail connection in EmailJS is missing permissions.");
        console.info("FIX STEPS:\n1. Go to EmailJS Dashboard > Email Services.\n2. Click on your Gmail service.\n3. Click 'Reconnect' or 'Edit'.\n4. When the Google login appears, ENSURE you check the box that says 'Send email on your behalf'.");
      }
    }

    return newMessage;
  },

  getMessages(): ContactMessage[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  getUnreadCount(): number {
    return this.getMessages().filter(m => !m.read).length;
  },

  markAllAsRead() {
    const messages = this.getMessages().map(m => ({ ...m, read: true }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  },

  clearMessages() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
