import React from "react";
import logo from "@/assets/svgs/trip-teasers-logo.svg";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";

export default function loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12">
      <Image
        src={logo}
        width={180}
        height={180}
        alt="logo image"
        className="flex items-center justify-center"
      />
      <div className="mt-6 flex w-full flex-col items-center justify-center gap-6">
        <AiOutlineLoading className="h-24 w-24 animate-spin text-primary" />
        <h1 className="pt-2 text-2xl font-semibold sm:text-4xl">Loading...</h1>
      </div>
    </div>
  );
}
