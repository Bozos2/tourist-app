import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";

import { getUserById } from "./user/find-user";
import { db } from "@/lib/db";
import authConfig from "./auth.config";
import { getTwoFactorConfirmationByUserId } from "./user/two-factor-confirmation";
import { getAccountByUserId } from "./user/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  pages: { signIn: "/auth/login", error: "/auth/error" },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (
        account?.provider === "google" ||
        account?.provider === "facebook" ||
        account?.provider === "twitter"
      )
        return true;
      const userId = user?.id;
      if (!userId) return false;

      const existingUser = await getUserById(userId);

      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );

        if (!twoFactorConfirmation) return false;

        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.image = token.image as string;
        session.user.coverImage = token.coverImage as string;
        if (token.email) session.user.email = token.email;
        session.user.isOauth = token.isOauth as boolean;
      }

      if (session.user) {
        session.user.gender = token.gender as string;
        session.user.dob = token.dob as Date;
        session.user.country = token.country as string;
        session.user.bio = token.bio as string;
        session.user.urls = token.urls as string[];
        session.user.emailVerified = token.emailVerified as Date;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOauth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.image = existingUser.image;
      token.coverImage = existingUser.coverImage;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.gender = existingUser.gender;
      token.dob = existingUser.dob;
      token.country = existingUser.country;
      token.bio = existingUser.bio;
      token.urls = existingUser.urls;
      token.emailVerified = existingUser.emailVerified;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
