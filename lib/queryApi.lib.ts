import { Configuration, OpenAIApi } from "openai";

export const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
  })
);
