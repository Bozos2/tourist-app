"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { MobileNavbar } from "./mobile-navbar";
import { NavbarAuth } from "./navbar-auth";
import { NavbarLinks } from "./navbar-links";
import { Logo } from "./navbar-logo";
import { ThemeToggle } from "../theme-toggle";
import { FloatingNav } from "./floating-navbar";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header className="sticky left-0 top-0 z-50 w-full">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="flex h-16 flex-row  items-center justify-between gap-4 px-6 py-3 font-poppins sm:px-24 xl:px-32"
      >
        <Logo />
        <NavbarLinks />
        <div className="flex flex-row items-center gap-4 lg:gap-0">
          <ThemeToggle />
          <NavbarAuth />
          <MobileNavbar />
        </div>
      </motion.nav>
      <FloatingNav />
    </header>
  );
};
