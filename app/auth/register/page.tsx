import { Metadata } from "next";

import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
