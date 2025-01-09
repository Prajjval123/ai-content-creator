import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyCXN6AJI1Z7rSZhE9tHbqzL3Lc-fpQdj84');

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

console.log(`${process.env.GEMINI_API_KEY}`);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [],
});
