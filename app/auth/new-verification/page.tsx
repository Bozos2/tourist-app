import { Metadata } from "next";

import { NewVerificationData } from "@/components/auth/new-verification";

export const metadata: Metadata = {
  title: "New Verification",
};

const NewVerificationPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <NewVerificationData />
    </main>
  );
};

export default NewVerificationPage;
