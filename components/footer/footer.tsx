"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { FooterContent } from "./footer-content";

export const Footer = () => {
  const pathname = usePathname();

  const isDetailPage =
    pathname.startsWith("/explore/") &&
    pathname.includes("-") &&
    pathname.length > 35;

  return (
    <footer
      className={cn(
        { "px-6 sm:px-24 lg:px-32 xl:px-56 2xl:px-96": isDetailPage },
        "flex w-full flex-col  font-poppins",
        { "px-6 sm:px-24 xl:px-32": !isDetailPage },
      )}
    >
      <FooterContent />
    </footer>
  );
};
