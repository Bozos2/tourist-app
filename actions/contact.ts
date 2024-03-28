"use server";

import * as z from "zod";

import { ContactFormSchema } from "@/schemas";
import { sendContactEmail } from "@/lib/mail";

export const contact = async (values: z.infer<typeof ContactFormSchema>) => {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields) {
    return {
      error: "Invalid fields! Please fill all input fields to send data.",
    };
  }

  await sendContactEmail(values);

  return { success: "Your message has been successfully sent!" };
};
