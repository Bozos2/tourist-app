"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledRate } from "./controlled-rating";
import * as z from "zod";
import { AddCommentFormSchema } from "@/schemas";
import { addComment } from "@/actions/add-comment";

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
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { FormError } from "@/components/form-error";

interface CommentFormProps {
  id: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ id }) => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();
  const form = useForm<z.infer<typeof AddCommentFormSchema>>({
    resolver: zodResolver(AddCommentFormSchema),
    defaultValues: {
      rating: 0,
      title: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddCommentFormSchema>) => {
    setError(" ");

    setTransition(() => {
      addComment(values, id).then((data) => {
        if (data && data.error) {
          setError(data?.error);
        } else {
          form.reset();
          toast.success("Successfully added review!");
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
          <DialogFooter>
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full text-white"
                variant="default"
                disabled={isPending}
              >
                Submit Review
              </Button>
            </div>
          </DialogFooter>
        </>
      </form>
    </Form>
  );
};
export default CommentForm;
