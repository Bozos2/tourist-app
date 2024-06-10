"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";

import { MobileNavbar } from "./mobile-navbar";
import { NavbarAuth } from "./navbar-auth";
import { NavbarLinks } from "./navbar-links";
import { Logo } from "./navbar-logo";
import { ThemeToggle } from "../theme-toggle";
import { FloatingNav } from "./floating-navbar";
import { Favorites } from "../favorites-sheet";

import { usePathname } from "next/navigation";

import type { Session } from "next-auth";

export const Navbar = ({ session }: { session: Session | null }) => {
  const [scrolled, setScrolled] = useState(false);
  const user = useCurrentUser();

  const pathname = usePathname();

  const isDetailPage =
    (pathname.startsWith("/explore/") &&
      pathname.includes("-") &&
      pathname.length > 35) ||
    (pathname.startsWith("/profile/") &&
      pathname.includes("-") &&
      pathname.length > 35);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky left-0 top-0 z-50 flex w-full justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          { "w-full max-w-[1135px] 2xl:px-0": isDetailPage },
          "flex h-16 flex-row  items-center justify-between gap-4 px-6 py-3 font-poppins",
          { "w-full max-w-[1500px] sm:px-12": !isDetailPage },
        )}
      >
        <Logo />
        <NavbarLinks />
        <div className="flex flex-row items-center gap-4 lg:gap-0">
          <div className="space-x-2">
            {user ? <Favorites /> : " "}
            <ThemeToggle />
          </div>
          <NavbarAuth session={session} />
          <MobileNavbar />
        </div>
      </motion.nav>
      <FloatingNav />
    </header>
  );
};
