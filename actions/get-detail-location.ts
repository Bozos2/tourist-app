"use server";

import { db } from "@/lib/db";

export const getLocation = async (id: string) => {
  const data = await db.locations.findFirst({
    where: {
      locationId: id,
    },
    include: {
      user: {
        select: {
          name: true,
          role: true,
          image: true,
        },
      },
    },
  });

  return data;
};
