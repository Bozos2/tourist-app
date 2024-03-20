import { Resend } from "resend";

import VerifyEmail from "@/emails/verify-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "Confirm your email",
    react: VerifyEmail({ token }),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Trip Teasers <info@bozesoldo.com>",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};
