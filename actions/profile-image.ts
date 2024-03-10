"use server";

import { unstable_update } from "@/auth";
import { v2 as cloudinary } from "cloudinary";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/user/find-user";

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "profile" },
    cloudinaryConfig.api_secret!,
  );

  return { timestamp, signature };
}

type SaveToDatabaseProps = {
  public_id: string;
  version: number;
  signature: string;
  url: string;
};

export async function saveToDatabase({
  public_id,
  version,
  signature,
  url,
}: SaveToDatabaseProps) {
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id, version },
    cloudinaryConfig.api_secret!,
  );

  if (expectedSignature === signature) {
    console.log("image saved!");
  }

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

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      image: url,
    },
  });

  unstable_update({
    user: {
      image: updatedUser.image,
    },
  });

  return { success: "User profile image updated!" };
}
