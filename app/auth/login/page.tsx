import { Metadata } from "next";

import LoginForm from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center pb-16">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
