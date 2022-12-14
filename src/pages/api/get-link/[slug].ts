import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const getLink = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.status(404).json({ message: "please provide a slug" });
    return;
  }
  const data = await prisma.urlData.findFirst({
    where: {
      shortUrl: {
        equals: slug,
      },

    },
  });
  if (!data) {
    res.status(404).json({ message: "no url found" });

    return;
  }
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=1000000000, stale-while-revalidate");

  res.json(data);

  return;
};
export default getLink;
