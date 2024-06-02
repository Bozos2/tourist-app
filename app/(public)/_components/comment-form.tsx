"use client";

import { useTransition, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledRate } from "./controlled-rating";
import * as z from "zod";
import { AddCommentFormSchema } from "@/schemas";
import { addComment, updateComment } from "@/actions/add-comment";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FormError } from "@/components/form-error";

interface CommentFormProps {
  locationId?: string;
  commentId?: string;
  comment?: { id: string; title: string; rating: number };
  onSuccess: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  commentId,
  locationId,
  comment,
  onSuccess,
}) => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();
  const isEditing = Boolean(comment);
  const router = useRouter();

  const form = useForm<z.infer<typeof AddCommentFormSchema>>({
    resolver: zodResolver(AddCommentFormSchema),
    defaultValues: {
      rating: comment ? comment.rating : 0,
      title: comment ? comment.title : "",
    },
  });

  useEffect(() => {
    if (comment) {
      form.setValue("rating", comment.rating);
      form.setValue("title", comment.title);
    }
  }, [comment, form]);

  const onSubmit = (values: z.infer<typeof AddCommentFormSchema>) => {
    setError(" ");

    setTransition(() => {
      const action = isEditing ? updateComment : addComment;
      const id = isEditing ? commentId : locationId;
      action(values, id!).then((data) => {
        if (data && data.error) {
          setError(data?.error);
        } else {
          form.reset();
          toast.success(
            isEditing
              ? "Successfully updated review!"
              : "Successfully added review!",
          );
          router.refresh();
          onSuccess();
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <>
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <ControlledRate
                    initialValue={field.value}
                    onRatingChange={(rating) => field.onChange(rating)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Comment title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error?.trim() !== "" ? (
            <div className="mt-2">
              <FormError message={error} />
            </div>
          ) : (
            ""
          )}
          <Button
            type="submit"
            variant="default"
            disabled={isPending}
            className="mt-3 w-full"
          >
            {isEditing ? "Update Review" : "Submit Review"}
          </Button>
        </>
      </form>
    </Form>
  );
};
export default CommentForm;
