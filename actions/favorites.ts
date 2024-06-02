"use server";

import { db } from "@/lib/db";
import { getUserById } from "@/user/find-user";
import { currentUser } from "@/lib/auth";

export const addFavorites = async (locationId: string) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId = user?.id;
  if (!userId) return { error: "Unauthorized" };

  const dbUser = await getUserById(userId);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const location = await db.locations.findUnique({
    where: { id: locationId },
  });

  if (!location) {
    return { error: "Location not found" };
  }

  const existingFavorite = await db.favorites.findUnique({
    where: {
      userId_locationId: {
        userId,
        locationId,
      },
    },
  });

  if (existingFavorite) {
    return { error: "Location is already in favorites" };
  }

  await db.favorites.create({
    data: {
      userId,
      locationId,
    },
  });

  return { success: "Location successfully added to favorites!" };
};

export const removeFavorites = async (locationId: string) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId = user?.id;
  if (!userId) return { error: "Unauthorized" };

  const dbUser = await getUserById(userId);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const existingFavorite = await db.favorites.findUnique({
    where: {
      userId_locationId: {
        userId,
        locationId,
      },
    },
  });

  if (!existingFavorite) {
    return { error: "Favorite not found" };
  }

  await db.favorites.delete({
    where: {
      userId_locationId: {
        userId,
        locationId,
      },
    },
  });

  return { success: "Location successfully removed from favorites!" };
};

export const getFavorites = async () => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId = user?.id;
  if (!userId) return { error: "Unauthorized" };

  const dbUser = await getUserById(userId);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const favorites = await db.favorites.findMany({
    where: {
      userId: userId,
    },
    include: {
      location: {
        select: {
          id: true,
          images: true,
          name: true,
          rating: true,
          city: true,
          country: true,
        },
      },
    },
  });

  const favoriteLocations = favorites.map((favorite) => ({
    ...favorite.location,
    createdAt: favorite.createdAt,
  }));

  return favoriteLocations;
};

export const getPublicFavorites = async (userId: string) => {
  const favorites = await db.favorites.findMany({
    where: {
      userId: userId,
    },
    include: {
      location: {
        select: {
          id: true,
          images: true,
          name: true,
          rating: true,
          city: true,
          country: true,
        },
      },
    },
  });

  const favoriteLocations = favorites.map((favorite) => ({
    ...favorite.location,
    createdAt: favorite.createdAt,
  }));

  return favoriteLocations;
};
