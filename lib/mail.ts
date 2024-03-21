import { Resend } from "resend";

import VerifyEmail from "@/emails/verify-email";
import NewPassword from "@/emails/new-password-email";
import TwoFACode from "@/emails/2FA-code-email";

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
