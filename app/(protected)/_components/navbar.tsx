"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { logout } from "@/actions/logout";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  const onClick = () => {
    logout();
  };

  return (
    <nav className="flex w-[600px] items-center justify-between rounded-xl bg-secondary p-4 shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
        <Button onClick={onClick}>Logout</Button>
      </div>
    </nav>
  );
};
