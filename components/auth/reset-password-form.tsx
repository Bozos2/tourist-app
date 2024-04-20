"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetSchema } from "@/schemas";
import { resetPassword } from "@/actions/reset-password";

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
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FormError } from "../form-error";

import mail from "@/assets/images/enter-mail.png";

const ResetPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");

    setTransition(() => {
      resetPassword(values).then((data) => {
        if (data?.error) {
          setError(data.error);
        }
        if (data?.success) {
          form.reset();
          toast.success(`${data.success}`);
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[310px] space-y-1 rounded-md border border-input bg-background px-12 pb-8 pt-4 dark:border-0 dark:bg-transparent/40"
      >
        <div className="flex flex-col items-center justify-center">
          <Image alt="enter email image" width={270} height={216} src={mail} />
          <h4 className="text-center text-muted-foreground">
            You&apos;re one step away! Please choose a new password to secure
            your account.
          </h4>
        </div>
        <div className="space-y-1 pb-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Enter email..."
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
        </div>
        <Button type="submit" disabled={isPending} className="w-full">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
