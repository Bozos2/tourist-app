import { AuthError } from "@/components/auth/error";

const ErrorPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <AuthError />
    </main>
  );
};

export default ErrorPage;
