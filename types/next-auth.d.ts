import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOauth: boolean;
    } & DefaultSession["user"];
  }
}
