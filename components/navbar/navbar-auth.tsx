"use client";

import Link from "next/link";

import { Button } from "../ui/button";
import { UserAvatarButton } from "../auth/user-avatar-button";

import { useCurrentUser } from "@/hooks/use-current-user";

export const NavbarAuth = () => {
  const user = useCurrentUser();

  return (
    <section className="flex flex-row gap-2 px-6">
      {!user ? (
        <>
          <Button variant="outline" className="px-4 py-2" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button variant="default" className="px-4 py-2" asChild>
            <Link href="/auth/register">Register</Link>
          </Button>
        </>
      ) : (
        <UserAvatarButton />
      )}
    </section>
  );
};
