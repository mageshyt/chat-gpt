import { openAi } from "./openAi.lib";

export const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openAi
    .createCompletion({
      model,
      prompt,
      max_tokens: 1000,
      temperature: 0.9,
      top_p: 1,
      presence_penalty: 0.6,
      frequency_penalty: 0.5,
    })
    .then((res) => {
      return res.data.choices[0].text;
    })
    .catch((err) => {
      console.log("err", err);

      return "Sorry, I am not able to answer your question. Please try again later.";
    });

  return res;
};
