import { Metadata } from "next";

import SentMail from "@/assets/svgs/sent-mail-svg";

export const metadata: Metadata = {
  title: "Verify Email",
};

const VerifyEmail = () => {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <SentMail />
    </main>
  );
};

export default VerifyEmail;
