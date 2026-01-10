import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export const askPortfolioAssistant = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",

      contents: [
        {
          role: "user",
          parts: [
            {
              text: query
            }
          ]
        }
      ],

      config: {
        systemInstruction: {
          role: "system",
          parts: [
            {
              text: `You are the AI assistant for Efemena Evwierhurhoma's portfolio.
Efemena is a high-level Frontend Engineer with expertise in React, TypeScript, and Tailwind.
He specializes in building polished, production-ready UIs and integrating AI.
Be professional, helpful, and concise.
If asked about his contact info, tell them to use the contact form or social links at the bottom of the page.
Do not make up information; if you don't know something about Efemena, suggest they reach out to him directly.`
            }
          ]
        }
      }
    });

    return (
      response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response."
    );

  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I encountered an error while processing your request.";
  }
};
