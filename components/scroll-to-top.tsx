"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Rocket from "@/assets/svgs/rocket-icon";
import { ArrowUpIcon } from "@radix-ui/react-icons";

export const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let isScrolled = scrollPosition > 100;

  return isScrolled ? (
    <>
      <motion.button
        className="fixed bottom-24 right-0 hidden h-10 w-32 flex-row items-center justify-center rounded-l-3xl bg-primary  font-medium tracking-wide text-white dark:bg-white/50 dark:text-background xl:flex"
        onClick={goToTop}
        initial={{ x: 94, opacity: 1 }}
        exit={{ x: 100, opacity: 0, transition: { duration: 0.6 } }}
        whileHover={{
          transition: { duration: 0.2 },
          x: 0,
        }}
        whileTap={{ scale: 1.3 }}
      >
        <Rocket className="mr-2 h-6 w-6" />
        Top
      </motion.button>

      <motion.button
        className="scrollScreen:right-8 scrollScreen:bottom-[90px] fixed bottom-20 right-5 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:bg-white/50 dark:text-background xl:hidden"
        onClick={goToTop}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
        whileTap={{ scale: 1.2, transition: { duration: 0.2 } }}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </motion.button>
    </>
  ) : null;
};
