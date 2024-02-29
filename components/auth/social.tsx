"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "facebook" | "twitter") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full bg-transparent"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full bg-transparent"
        variant="outline"
        onClick={() => onClick("facebook")}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full bg-transparent"
        variant="outline"
        onClick={() => onClick("twitter")}
      >
        <RiTwitterXLine className="h-5 w-5" />
      </Button>
    </div>
  );
};
