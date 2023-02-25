import { addMessage } from "./../../lib/firebase.lib";
import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../lib/queryApi.lib";
import { Timestamp } from "firebase/firestore";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "please provide prompt" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "please provide a valid chatId" });
    return;
  }

  const response: string = (await query(prompt, chatId, model)) as string;

  const responseDoc = {
    text: response,
    createdAt: Timestamp.now(),

    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };
  addMessage( chatId, responseDoc, session);

  res.status(200).json({ answer: response });
}
