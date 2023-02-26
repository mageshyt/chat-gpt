import { Options } from "./../../typings.d";
import type { NextApiRequest, NextApiResponse } from "next";
import { openAi } from "../../lib/openAi.lib";

type Data = {
  models: Options[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models: any = await openAi.listModels().then((res) => res.data);

  res.status(200).json({ models });
}
