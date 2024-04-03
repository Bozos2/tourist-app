"use server";

import * as z from "zod";
import { db } from "@/lib/db";

import { currentUser } from "@/lib/auth";
import { getUserById } from "@/user/find-user";
import { sendNewsletterEmail } from "@/lib/mail";
import { NewsletterFormSchema } from "@/schemas";

export const newsletter = async (
  value: z.infer<typeof NewsletterFormSchema>,
) => {
  const validateInput = NewsletterFormSchema.safeParse(value);

  if (!validateInput.success) {
    return { error: "Invalid field!" };
  }

  const { email } = validateInput.data;

  const user = await currentUser();

  if (!user) {
    return { error: "Please log in first!" };
  }

  const userId = user?.id;
  if (!userId) return false;

  const dbUser = await getUserById(userId);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (email !== dbUser.email) {
    return { error: "Please enter your registered email!" };
  }

  if (dbUser.newsletter) {
    return { error: "You are already subscribed to our newsletter!" };
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      newsletter: true,
    },
  });

  await sendNewsletterEmail(email);

  return { success: "Successfully subscribed!" };
};
