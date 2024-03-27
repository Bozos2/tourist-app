"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import {
  IoHomeOutline,
  IoCallOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import { LogoutButton } from "../auth/logout-button";
import { Logo } from "./navbar-logo";
import { useCurrentUser } from "@/hooks/use-current-user";

import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/svgs/trip-teasers-logo.svg";

export const MobileNavbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const user = useCurrentUser();

  const pathname = usePathname();

  useEffect(() => {
    if (nav) {
      setNav(false);
    }
  }, [pathname]);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <header>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={24} /> : <CgMenuGridR size={24} />}
      </div>
      <nav
        className={
          nav
            ? "mobile-navbar-height absolute bottom-0 left-0 right-0 top-0 z-10 flex w-4/6 flex-col border-r border-border bg-background from-[#121212]   to-[#303367] duration-300 ease-in  dark:bg-gradient-to-br sm:w-2/5 lg:hidden"
            : "mobile-navbar-height absolute bottom-0 left-[-100%] right-0 top-0 flex w-full flex-col  border-r border-border bg-background from-[#121212] to-[#303367] duration-300 ease-in dark:bg-gradient-to-br lg:hidden"
        }
      >
        <div className="flex flex-grow flex-col px-6 py-2">
          <div className="pt-4">
            <Image src={logo} width={170} height={170} alt="logo" />
          </div>
          <Separator />
          <div className="w-full">
            <div className="flex w-full flex-col gap-4 py-8">
              <Link
                href="/home"
                className={cn(
                  "flex  flex-row items-center gap-4 rounded-lg py-1 pl-2 text-lg ",
                  pathname === "/home" ? "bg-secondary" : "",
                )}
              >
                <IoHomeOutline size={28} /> Home
              </Link>
              <Link
                href="/explore"
                className={cn(
                  "flex  flex-row items-center gap-4 rounded-lg py-1 pl-2 text-lg ",
                  pathname === "/explore" ? "bg-secondary" : "",
                )}
              >
                <MdOutlineExplore size={28} /> Explore
              </Link>
              <Link
                href="/contact-us"
                className={cn(
                  "flex  flex-row items-center gap-4 rounded-lg py-1 pl-2 text-lg ",
                  pathname === "/contact-us" ? "bg-secondary" : "",
                )}
              >
                <IoCallOutline size={28} /> Contact us
              </Link>
              {user ? (
                <Link
                  href="/profile"
                  className={cn(
                    "flex  flex-row items-center gap-4 rounded-lg py-1 pl-2 text-lg ",
                    pathname === "/profile" ? "bg-secondary" : "",
                  )}
                >
                  <FaRegUser size={28} /> Profile
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <Separator />
            {user ? (
              <div className="flex w-full flex-col gap-4 py-8">
                <Link
                  href="/settings"
                  className={cn(
                    "flex  flex-row items-center gap-4 rounded-lg py-1 pl-2 text-lg ",
                    pathname === "/settings" ? "bg-secondary" : "",
                  )}
                >
                  <IoSettingsOutline size={28} /> Settings
                </Link>

                <LogoutButton style="flex flex-row items-center gap-4 rounded-lg py-1 pl-2 text-lg">
                  <ExitIcon className="h-7 w-7" /> Logout
                </LogoutButton>
              </div>
            ) : (
              <div className="flex flex-row justify-center gap-4 py-8">
                <Button
                  className="border border-primary bg-transparent px-4 py-2  text-primary hover:text-white"
                  asChild
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button variant="default" className="px-4 py-2" asChild>
                  <Link href="/auth/register" className="text-white">
                    Sign up
                  </Link>
                </Button>
              </div>
            )}
          </div>
          {user ? (
            <>
              <div className="flex-grow" />
              <div className="justify-end pb-4">
                <Separator />
                <div className="flex flex-row  gap-2 pt-4">
                  <Avatar>
                    <AvatarImage src={user?.image || ""} sizes="h-16 w-16" />
                    <AvatarFallback className="bg-primary">
                      <FaRegUser className="text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h2>{user?.name}</h2>
                    <p className="... overflow-hidden text-[10px] text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
};
