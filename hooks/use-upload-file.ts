import * as React from "react";
import type { UploadedFile } from "@/types";
import { toast } from "sonner";
import type { UploadFilesOptions } from "uploadthing/types";

import { uploadFiles } from "@/lib/uploadthing";
import { type OurFileRouter } from "@/app/api/uploadthing/core";

interface UseUploadFileProps
  extends Pick<
    UploadFilesOptions<OurFileRouter, keyof OurFileRouter>,
    "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"
  > {
  defaultUploadedFiles?: UploadedFile[];
}

export function useUploadFile(
  endpoint: keyof OurFileRouter,
  { defaultUploadedFiles = [], ...props }: UseUploadFileProps = {},
) {
  const [uploadedFilesUrl, setUploadedFilesUrl] = React.useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] =
    React.useState<UploadedFile[]>(defaultUploadedFiles);
  const [progresses, setProgresses] = React.useState<Record<string, number>>(
    {},
  );
  const [isUploading, setIsUploading] = React.useState(false);

  async function uploadThings(files: File[]) {
    setIsUploading(true);
    try {
      const res = await uploadFiles(endpoint, {
        ...props,
        files,
        onUploadProgress: ({ file, progress }) => {
          setProgresses((prev) => {
            return {
              ...prev,
              [file]: progress,
            };
          });
        },
      });

      const urls = res.map((file) => file.url);

      setUploadedFilesUrl((prev) => (prev ? [...prev, ...urls] : urls));
      setUploadedFiles((prev) => (prev ? [...prev, ...res] : res));
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setProgresses({});
      setIsUploading(false);
    }
  }

  return {
    uploadedFiles,
    uploadedFilesUrl,
    progresses,
    uploadFiles: uploadThings,
    isUploading,
  };
}
