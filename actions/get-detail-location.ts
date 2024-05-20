"use server";

import { db } from "@/lib/db";

export const getLocation = async (id: string) => {
  const data = await db.locations.findUnique({
    where: {
      id: id,
    },
    include: {
      user: {
        select: {
          name: true,
          role: true,
          image: true,
          emailVerified: true,
        },
      },
    },
  });

  const commentsCount = await db.comment.count({
    where: {
      locationId: id,
    },
  });

  return {
    ...data,
    commentsCount,
  };
};
