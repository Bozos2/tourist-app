import React from "react";
import logo from "@/assets/svgs/trip-teasers-logo.svg";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";

export default function loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12">
      <div className="relative flex items-center justify-center">
        <AiOutlineLoading className="absolute h-44 w-44 animate-spin text-primary" />
        <Image
          src={logo}
          width={110}
          height={110}
          alt="logo image"
          className="flex items-center justify-center"
          priority
        />
      </div>
      <h1 className="pt-6 text-2xl font-semibold sm:text-4xl">Loading...</h1>
    </div>
  );
}
