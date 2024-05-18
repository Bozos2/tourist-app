"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { AddCommentFormSchema } from "@/schemas";
import { getUserById } from "@/user/find-user";
import { currentUser } from "@/lib/auth";

export const addComment = async (
  values: z.infer<typeof AddCommentFormSchema>,
  locationId: string,
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

  const existingComment = await db.comment.findFirst({
    where: {
      userId,
      locationId,
    },
  });

  if (existingComment) {
    return {
      error: "You have already reviewed this location.",
    };
  }

  await db.comment.create({
    data: {
      ...values,
      userId,
      locationId,
    },
  });

  const comments = await db.comment.findMany({
    where: {
      locationId: locationId,
    },
  });

  const averageRating =
    comments.reduce((acc, comment) => acc + comment.rating, 0) /
    comments.length;

  await db.locations.update({
    where: {
      id: locationId,
    },
    data: {
      rating: averageRating,
    },
  });

  return { success: "Your review is successfully added!" };
};
