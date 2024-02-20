"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/user/find-user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const resetPassword = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Email is not valid!" };
  }

  const { email } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: "Email sent" };
};
