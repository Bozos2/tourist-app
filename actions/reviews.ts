"use server";

import { db } from "@/lib/db";

export async function getAllComments(locationId: string) {
  return db.comment.findMany({
    where: {
      locationId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function getComments(locationId: string) {
  return db.comment.findMany({
    take: 10,
    where: {
      locationId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function getTopRatedComments(locationId: string) {
  return db.comment.findMany({
    take: 10,
    where: {
      locationId,
    },
    orderBy: { rating: "desc" },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function getBadRatedComments(locationId: string) {
  return db.comment.findMany({
    take: 10,
    where: {
      locationId,
    },
    orderBy: { rating: "asc" },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function getNewestComments(locationId: string) {
  return db.comment.findMany({
    take: 10,
    where: {
      locationId,
    },
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function getUserComments(userId: string) {
  return db.comment.findMany({
    where: {
      userId,
    },
    include: {
      locations: {
        select: {
          name: true,
        },
      },
    },
  });
}
