import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOauth: boolean;
      gender: string | null;
      dob: Date | null;
      country: string | null;
      bio: string | null;
      urls: Json;
      emailVerified: Date;
      coverImage: string | null;
    } & DefaultSession["user"];
  }
}
