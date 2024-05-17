"use server";

import { db } from "@/lib/db";

export const addComment = async (
  locationId: string,
  userId: string,
  title: string,
  rating: number,
) => {
  const newComment = await db.comment.create({
    data: {
      locationId,
      userId,
      title,
      rating,
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

  return newComment;
};
