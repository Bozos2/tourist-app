"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { FooterContent } from "./footer-content";

export const Footer = () => {
  const pathname = usePathname();

  const isDetailPage =
    (pathname.startsWith("/explore/") &&
      pathname.includes("-") &&
      pathname.length > 35) ||
    (pathname.startsWith("/profile/") &&
      pathname.includes("-") &&
      pathname.length > 35);

  return (
    <section className="flex justify-center">
      <footer
        className={cn(
          { "w-full max-w-[1135px] 2xl:px-0": isDetailPage },
          "flex w-full flex-col px-6  font-poppins",
          { "w-full max-w-[1500px] sm:px-12": !isDetailPage },
        )}
      >
        <FooterContent />
      </footer>
    </section>
  );
};
