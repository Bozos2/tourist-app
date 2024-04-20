"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPasswordSchema } from "@/schemas";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";

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
import { FormError } from "../form-error";
import { toast } from "sonner";

import NewPasswordIcon from "@/assets/svgs/padlock-svg";

const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");

    setTransition(() => {
      newPassword(values, token).then((data) => {
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
        className="max-w-[310px] space-y-4 rounded-md border border-input bg-background px-12 pb-6 pt-4 dark:border-0 dark:bg-transparent/40"
      >
        <div className="flex flex-col items-center justify-center">
          <NewPasswordIcon className="h-24 w-24" />
          <h4 className="text-center text-muted-foreground">
            You&apos;re one step away! Please choose a new password to secure
            your account.
          </h4>
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="******"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <Button type="submit" disabled={isPending} className="w-full">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default NewPasswordForm;
