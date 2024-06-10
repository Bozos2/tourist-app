import Link from "next/link";

import { Button } from "../ui/button";
import { UserAvatarButton } from "../auth/user-avatar-button";

import type { Session } from "next-auth";

export const NavbarAuth = ({ session }: { session: Session | null }) => {
  return (
    <section className="ml-6 hidden flex-row gap-2 lg:flex">
      {session?.user ? (
        <UserAvatarButton />
      ) : (
        <>
          <Button
            variant="outline"
            className="bg-transparent px-4 py-2"
            asChild
          >
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button variant="default" className="px-4 py-2" asChild>
            <Link href="/auth/register">Sign up</Link>
          </Button>
        </>
      )}
    </section>
  );
};
