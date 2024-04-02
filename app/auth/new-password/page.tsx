import { Metadata } from "next";

import NewPasswordForm from "@/components/auth/new-password-form";

export const metadata: Metadata = {
  title: "New Password",
};

const NewPasswordPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <NewPasswordForm />
    </main>
  );
};

export default NewPasswordPage;
