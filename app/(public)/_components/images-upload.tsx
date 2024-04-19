/* "use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useUploadFile } from "@/hooks/use-upload-file";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUploader } from "@/components/file-uploader";
import { AddLocationFormSchema } from "@/schemas";
import { UploadedFilesCard } from "./uploaded-files-card";

const schema = z.object({
  images: z.array(z.instanceof(File)),
});

type Schema = z.infer<typeof schema>;

export function ImagesUpload() {
  const {
    uploadFiles,
    progresses,
    uploadedFiles,
    uploadedFilesUrl,
    isUploading,
  } = useUploadFile("imageUploader", { defaultUploadedFiles: [] });
  const form = useForm<Schema>({
    resolver: zodResolver(AddLocationFormSchema),
    defaultValues: {
      images: [],
    },
  });

  function onSubmit(input: Schema) {
    toast.promise(uploadFiles(input.images), {
      loading: "Uploading images...",
      success: () => {
        form.reset();
        return "Images uploaded";
      },
      error: (err) => {
        return err;
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem className="w-full">
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    maxFiles={8}
                    maxSize={4 * 1024 * 1024}
                    progresses={progresses}
                    // pass the onUpload function here for direct upload
                    onUpload={uploadFiles}
                    disabled={isUploading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              {uploadedFiles.length > 0 ? uploadedFilesUrl : null}
            </div>
          )}
        />
      </form>
    </Form>
  );
}
 */
