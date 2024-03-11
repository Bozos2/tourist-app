"use client";

import { useState, useCallback, useTransition } from "react";
import { useSession } from "next-auth/react";

import { getSignature, saveToDatabase } from "@/actions/profile-image";

import { useDropzone } from "react-dropzone";

import { IoImagesOutline } from "react-icons/io5";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

export const ImageDropzone = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();

  const { update } = useSession();

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive, open } =
    useDropzone({
      noClick: true,
      accept: {
        "image/*": [],
      },
      maxSize: 1024 * 1000,
      maxFiles: 1,
      onDrop,
    });

  async function imageSubmitHandler() {
    if (!preview) return;

    const { timestamp, signature } = await getSignature();

    const formData = new FormData();

    formData.append("file", acceptedFiles[0]);
    formData.append("api_key", `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`);
    formData.append("signature", signature);
    formData.append("timestamp", `${timestamp}`);
    formData.append("folder", "profile");

    const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
    const data = await fetch(`${endpoint}`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    await startTransition(() => {
      saveToDatabase({
        version: data?.version,
        signature: data?.signature,
        public_id: data?.public_id,
        url: data?.secure_url,
      })
        .then((data) => {
          if (data && data.error) {
            toast({
              variant: "destructive",
              title: `${data.error}`,
            });
          }

          if (data && data.success) {
            toast({
              title: `${data.success}`,
            });
            update();
            setPreview(null);
          }
        })
        .catch(() =>
          toast({
            variant: "destructive",
            title: `Something went wrong!`,
          }),
        );
    });
  }

  const handleRemove = () => {
    setPreview(null);
  };

  return (
    <section>
      <form action={imageSubmitHandler}>
        <div
          {...getRootProps()}
          className="mt-10 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary bg-transparent/5 p-16 dark:border-white dark:bg-transparent/15"
          onClick={open}
        >
          <input {...getInputProps()} disabled={isPending} />
          <IoImagesOutline size={36} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="pt-6">
              <p className="text-center text-xl font-medium">
                Drag & Drop or{" "}
                <span className="text-primary dark:text-secondary">browse</span>
              </p>
              <p className="pt-2 text-center text-sm text-muted-foreground">
                Supports: JPEG, JPG, PNG
              </p>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h1 className="mb-2 text-lg font-medium tracking-wide">Preview:</h1>
          {preview ? (
            <>
              <div className="flex w-fit flex-row rounded-lg border">
                <div className="flex items-end gap-2 py-4 pl-4">
                  <Avatar className="border">
                    <AvatarImage src={preview as string} />
                    <AvatarFallback className="bg-primary">
                      Profile image
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16 border">
                    <AvatarImage src={preview as string} />
                    <AvatarFallback className="bg-primary">
                      Profile image
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="hidden h-36 w-36 border sm:block">
                    <AvatarImage src={preview as string} />
                    <AvatarFallback className="bg-primary">
                      Profile image
                    </AvatarFallback>
                  </Avatar>
                </div>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="mr-1 mt-1 flex h-7 w-7 items-center justify-center  rounded-full p-0.5 opacity-70 hover:opacity-100"
                >
                  <Cross2Icon className="h-6 w-6" />
                </button>
              </div>
              <p className="flex flex-row pt-2 text-xs text-muted-foreground">
                1st: Dropdown, 2nd: Mobile Profile{" "}
                <span className="hidden sm:block">, 3rd: Desktop Profile</span>
              </p>
            </>
          ) : (
            <div className="flex w-full items-center justify-center pt-2">
              <p className="text-sm text-muted-foreground">
                There is no file to preview
              </p>
            </div>
          )}
        </div>
        <Button disabled={isPending} type="submit" className="mt-6">
          Save Image
        </Button>
      </form>
    </section>
  );
};
