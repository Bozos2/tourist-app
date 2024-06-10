"use client";

import Image from "next/image";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

import { useUploadFile } from "@/hooks/use-upload-file";
import { FileUploader } from "@/components/file-uploader";
import { saveProfileCoverImages } from "@/actions/profile-image";

import { useSession } from "next-auth/react";

export const ImageDropzone = () => {
  const [isPending, startTransition] = useTransition();

  const { update } = useSession();

  const {
    uploadFiles: uploadProfileFiles,
    progresses: profileProgresses,
    uploadedFilesUrl: profileUploadedFilesUrl,
    isUploading: isProfileUploading,
  } = useUploadFile("imageUploader", { defaultUploadedFiles: [] });

  const {
    uploadFiles: uploadCoverFiles,
    progresses: coverProgresses,
    uploadedFilesUrl: coverUploadedFilesUrl,
    isUploading: isCoverUploading,
  } = useUploadFile("imageUploader", { defaultUploadedFiles: [] });

  const handleSaveImages = async () => {
    if (profileUploadedFilesUrl.length > 0) {
      startTransition(() =>
        saveProfileCoverImages({
          url: profileUploadedFilesUrl[0],
          type: "profile",
        }).then((data) => {
          if (data && data.error) {
            toast.error("Something went wrong!");
          }
          if (data && data.success) {
            toast.success("Successfully updated profile!");
            update();
          }
        }),
      );
    }

    if (coverUploadedFilesUrl.length > 0) {
      startTransition(() =>
        saveProfileCoverImages({
          url: coverUploadedFilesUrl[0],
          type: "cover",
        }).then((data) => {
          if (data && data.error) {
            toast.error("Something went wrong!");
          }
          if (data && data.success) {
            toast.success("Successfully updated profile!");
            update();
          }
        }),
      );
    }
  };

  return (
    <section>
      <h1 className="mb-4 mt-10 text-lg font-medium">Profile Image</h1>
      <FileUploader
        maxFiles={1}
        maxSize={7 * 1024 * 1024}
        progresses={profileProgresses}
        onUpload={uploadProfileFiles}
        disabled={isProfileUploading}
      />
      {profileUploadedFilesUrl.length >= 1 ? (
        <>
          <div className="mt-4 flex w-fit flex-row rounded-lg border">
            <div className=" flex items-end gap-2 px-4 py-4">
              <Avatar className="border">
                <AvatarImage src={profileUploadedFilesUrl[0]} />
                <AvatarFallback className="bg-primary">
                  Profile image
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16 border">
                <AvatarImage src={profileUploadedFilesUrl[0]} />
                <AvatarFallback className="bg-primary">
                  Profile image
                </AvatarFallback>
              </Avatar>
              <Avatar className="hidden h-36 w-36 border sm:block">
                <AvatarImage src={profileUploadedFilesUrl[0]} />
                <AvatarFallback className="bg-primary">
                  Profile image
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <p className="flex flex-row pt-2 text-xs text-muted-foreground">
            1st: Dropdown, 2nd: Mobile Profile{" "}
            <span className="hidden sm:block">, 3rd: Desktop Profile</span>
          </p>
        </>
      ) : null}
      <h1 className="mb-4 mt-10 text-lg font-medium">Cover Image</h1>
      <FileUploader
        maxFiles={1}
        maxSize={8 * 1024 * 1024}
        progresses={coverProgresses}
        onUpload={uploadCoverFiles}
        disabled={isCoverUploading}
      />
      {coverUploadedFilesUrl.length >= 1 ? (
        <div className="relative mt-4  flex max-w-96 flex-row rounded-xl">
          <div className="aspect-video h-full w-full">
            <Image
              alt="cover image preview"
              src={coverUploadedFilesUrl[0]}
              fill
              className="h-full w-full rounded-xl"
            />
          </div>
        </div>
      ) : null}
      <Button
        disabled={isPending}
        onClick={handleSaveImages}
        type="submit"
        className="mt-8"
      >
        Save Images
      </Button>
    </section>
  );
};
