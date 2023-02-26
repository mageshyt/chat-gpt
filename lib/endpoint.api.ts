import axios from "axios";

export const AskQuestion = async (
  message: string,
  chatId: string,
  model: string,
  session: any
) => {
  try {
    console.log("res", model);
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

export const listModels = async () => {
  const res = await axios.get("/api/getEngine");

  return res.data.modelOptions;
};
