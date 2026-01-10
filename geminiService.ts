import { GoogleGenAI } from "@google/genai";

export const askPortfolioAssistant = async (query: string) => {
  try {
    // Correct initialization: always use new GoogleGenAI({apiKey: process.env.API_KEY});
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are the AI assistant for Efemena Evwierhurhoma's portfolio. 
        Efemena is a high-level Frontend Engineer with expertise in React, TypeScript, and Tailwind. 
        He specializes in building polished, production-ready UIs and integrating AI.
        Be professional, helpful, and concise. 
        If asked about his contact info, tell them to use the contact form or social links at the bottom of the page.
        Do not make up information; if you don't know something about Efemena, suggest they reach out to him directly.`,
      },
    });

    // Access the text property directly from the response object.
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I encountered an error while processing your request.";
  }
};