"use server";

import { unstable_update } from "@/auth";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/user/find-user";

type SaveToDatabaseProps = {
  url: string;
  type: "profile" | "cover";
};

export async function saveProfileCoverImages({
  url,
  type,
}: SaveToDatabaseProps) {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId = user?.id;
  if (!userId) return false;

  const dbUser = await getUserById(userId);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const updatedData: any = {};
  if (type === "profile") {
    updatedData.image = url;
  } else if (type === "cover") {
    updatedData.coverImage = url;
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: updatedData,
  });

  unstable_update({
    user: {
      image: type === "profile" ? updatedUser.image : undefined,
      coverImage: type === "cover" ? updatedUser.coverImage : undefined,
    },
  });

  return {
    success: `${type.charAt(0).toUpperCase() + type.slice(1)} image updated!`,
  };
}
