
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getStylingAdvice = async (userPrompt: string) => {
  if (!API_KEY) return "AI services currently unavailable.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are the 'BURVLAND Neural Logic'. Tone: Exclusive, cold, and high-impact. Your primary focus is styling the 'Zero Degree Pack'—a definitive 6-piece bundle. You do not talk about individual items as separate purchases; everything is part of 'The System'. Use powerful marketing language: 'survival by design', 'industrial resilience', 'nothing stops us'. Keep your responses short and punchy.",
        temperature: 0.6,
        maxOutputTokens: 200,
      }
    });

    return response.text || "Relay failure. Cold start required.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Encryption breach. Access temporary suspended.";
  }
};
