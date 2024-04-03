import { Resend } from "resend";

import { z } from "zod";
import VerifyEmail from "@/emails/verify-email";
import NewPassword from "@/emails/new-password-email";
import TwoFACode from "@/emails/2FA-code-email";
import ContactEmail from "@/emails/contact-form-email";
import NewsletterEmail from "@/emails/newsletter-email";

import { ContactFormSchema } from "@/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "Confirm your email",
    react: VerifyEmail({ token }),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "Reset your password",
    react: NewPassword({ token }),
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "2FA Code",
    react: TwoFACode({ token }),
  });
};

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export const sendContactEmail = async (data: ContactFormInputs) => {
  const inputs = ContactFormSchema.safeParse(data);

  if (inputs.success) {
    const { name, email, subject, message } = inputs.data;

    await resend.emails.send({
      from: "Trip Teasers <info@bozesoldo.com>",
      to: `${process.env.EMAIL}`,
      subject: "Email from user",
      react: ContactEmail({ name, email, subject, message }),
    });

    return { success: true };
  }

  if (inputs.error) {
    return { success: false };
  }
};

export const sendNewsletterEmail = async (email: string) => {
  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "Newsletter Subscription!",
    react: NewsletterEmail(),
  });
};
