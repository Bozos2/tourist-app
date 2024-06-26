"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import verified from "@/assets/images/verified.png";
import { Button } from "./ui/button";

interface SuccessProps {
  message?: string;
}

export const AuthSuccess = ({ message }: SuccessProps) => {
  const router = useRouter();
  if (!message) return null;

  return (
    <div className="mx-3 flex flex-col items-center rounded-md border border-input bg-background px-12  py-4 text-sm shadow-sm  dark:border-0 dark:bg-transparent/40">
      <Image
        alt="success verified image"
        src={verified}
        width={300}
        height={180}
      />
      <h1 className="text-center text-2xl">Email Successfully Verified</h1>
      <p className="pt-4 text-center text-lg font-bold text-muted-foreground dark:text-white">
        {message}
      </p>
      <Button
        variant="default"
        className="mt-4  px-10 "
        onClick={() => router.push("/home")}
      >
        Continue
      </Button>
    </div>
  );
};
