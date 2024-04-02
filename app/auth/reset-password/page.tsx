import { Metadata } from "next";

import ResetPasswordForm from "@/components/auth/reset-password-form";

export const metadata: Metadata = {
  title: "Reset Password",
};

const ResetPasswordPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPasswordPage;
