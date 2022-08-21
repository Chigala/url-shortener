import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const updateLink = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];
  const { latitude, longitude, country, device, city } = req.body;

  if (!slug || typeof slug !== "string") {
    res.status(404).json({ message: "please provide a slug" });
    return;
  }
  const data = await prisma.urlData.update({
    where: {
      id: slug,
    },
    data: {
      visits: {
        increment: 1,
      },
      location: {
        create: {
          city: city,
          country: country,
          latitude: latitude,
          longitude: longitude,
          userAgent: device,
        },
      },
    },
  });
  res.json(data);

  return;
};
export default updateLink;
