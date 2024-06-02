"use server";

import { db } from "@/lib/db";

export const getUserData = async (userId: string) => {
  const data = await db.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      role: true,
      gender: true,
      bio: true,
      dob: true,
      country: true,
      emailVerified: true,
      image: true,
      coverImage: true,
      urls: true,
    },
  });

  return data;
};
