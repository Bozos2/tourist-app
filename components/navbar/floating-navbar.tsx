"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";

import {
  IoHomeOutline,
  IoCallOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

type NavItems = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  const user = useCurrentUser();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05 || current < 0.08) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const defaultNavItems: NavItems[] = [
    {
      name: "Home",
      link: "/",
      icon: (
        <IoHomeOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Explore",
      link: "/explore",
      icon: (
        <MdOutlineExplore className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IoCallOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const loggedInNavItems: NavItems[] = [
    {
      name: "Profile",
      link: `/profile/${user?.name}-${user?.id}`,
      icon: <FaRegUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: (
        <IoSettingsOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const navItems = user
    ? [...defaultNavItems, ...loggedInNavItems]
    : defaultNavItems;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10  z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-[#181923]",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}
        {!user ? (
          <div>
            <Button
              variant="ghost"
              className="relative mr-1 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
              asChild
            >
              <Link href="/auth/login">
                <span>Login</span>
                <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
              asChild
            >
              <Link href="/auth/register">
                <span>Register</span>
                <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </Link>
            </Button>
          </div>
        ) : (
          <LogoutButton style="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
            <span>Log out</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </LogoutButton>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
