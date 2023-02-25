import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default function handler(
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

  // const response=
  res.status(200).json({ answer: "successfull" });
}
