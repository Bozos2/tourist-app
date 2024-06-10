"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { AddLocationFormSchema } from "@/schemas";
import { Schema } from "@/app/(public)/_components/add-location-form";
import { getUserById } from "@/user/find-user";
import { currentUser } from "@/lib/auth";

export const location = async (
  values: z.infer<typeof Schema>,
  coordinates: [number, number],
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

  const validateInputs = AddLocationFormSchema.safeParse(values);

  if (!validateInputs.success) {
    return { error: "Invalid fields!" };
  }

  const { files, ...rest } = values;

  const coordinatesStringArray = coordinates.map((coord) => coord.toString());

  await db.locations.create({
    data: {
      ...rest,
      coordinates: coordinatesStringArray,
      user: { connect: { id: userId } },
    },
  });

  return { success: "Location Added!" };
};

export async function getUserLocations(userId: string) {
  return db.locations.findMany({
    where: { userId },
  });
}

export async function getPublicLocations(userId: string) {
  return db.locations.findMany({
    where: {
      userId,
      status: "Accepted",
    },
  });
}

export const getNearLocations = async () => {
  const ipResponse = await fetch(`${process.env.NEXT_APP_URL}/api/geo`);
  const { ip } = await ipResponse.json();

  let req = await fetch(`http://ip-api.com/json/${ip}`);
  let { country } = await req.json();

  return db.locations.findMany({
    take: 8,
    where: { country, status: "Accepted" },
    select: {
      id: true,
      name: true,
      country: true,
      city: true,
      rating: true,
      images: true,
    },
  });
};

export const getSameCategoryLocations = (
  category: string | undefined,
  currentLocationId: string | undefined,
) => {
  return db.locations.findMany({
    take: 8,
    where: {
      category: category,
      status: "Accepted",
      id: {
        not: currentLocationId,
      },
    },
    select: {
      id: true,
      name: true,
      country: true,
      city: true,
      rating: true,
      images: true,
    },
  });
};

export const getDetailNearLocations = (
  country: string | undefined,
  currentLocationId: string | undefined,
) => {
  return db.locations.findMany({
    take: 8,
    where: {
      country: country,
      status: "Accepted",
      id: {
        not: currentLocationId,
      },
    },
    select: {
      id: true,
      name: true,
      country: true,
      city: true,
      rating: true,
      images: true,
    },
  });
};
