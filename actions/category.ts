"use server";

import { db } from "@/lib/db";

export const category = async (value: string) => {
  const data = await db.locations.findMany({
    take: 7,
    where: {
      category: { contains: value },
    },
  });

  return data;
};
