import axios from "axios";

export const AskQuestion = async (
  message: string,
  chatId: string,
  model: string,
  session: any
) => {
  try {
    const res = await axios.post("/api/askQuestion", {
      prompt: message,
      chatId,
      model,
      session,
    });

    return res;
  } catch (err: any) {
    console.log("err", err);

    throw err;
  }
};
