"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { AddLocationFormSchema } from "@/schemas";
import { Schema } from "@/app/(public)/_components/add-location-form";
import { getUserById } from "@/user/find-user";
import { currentUser } from "@/lib/auth";

export const location = async (values: z.infer<typeof Schema>) => {
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

  await db.locations.create({
    data: {
      ...rest,
      user: { connect: { id: userId } },
    },
  });

  return { success: "Settings Updated!" };
};
