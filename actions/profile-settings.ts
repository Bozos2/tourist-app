"use server";

import * as z from "zod";
import { unstable_update } from "@/auth";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { profileFormSchema } from "@/schemas";
import { getUserById } from "@/user/find-user";

export const profileSettings = async (
  values: z.infer<typeof profileFormSchema>,
) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId = user?.id;
  if (!userId) return false;

  const dbUser = await getUserById(userId);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  unstable_update({
    user: {
      gender: updatedUser.gender,
      dob: updatedUser.dob,
      country: updatedUser.country,
      bio: updatedUser.bio,
      urls: updatedUser.urls,
    },
  });

  return { success: "Your profile data successfully updated!" };
};
