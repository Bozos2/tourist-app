"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTransition } from "react";

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

import { NewsletterFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletter } from "@/actions/newsletter";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { IoMailOutline } from "react-icons/io5";

export const NewsletterForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (value: z.infer<typeof NewsletterFormSchema>) => {
    setTransition(() => {
      newsletter(value).then((data) => {
        if (data && data.error) {
          toast.error(`${data.error}`);
        }

        if (data && data.success) {
          toast.success(`${data.success}`);
        }
      });
    });
  };

  return (
    <section className="flex w-full flex-col justify-between sm:mt-24 lg:flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
          Let&apos;s stay in touch!
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          We&apos;ll send you a nice letter sometimes. Without spam.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex flex-row justify-center  lg:items-start"
        >
          <div className="relative flex  items-center lg:w-auto">
            <IoMailOutline className="absolute ml-2 h-6 w-6 text-primary" />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email..."
                      type="email"
                      className="h-11 w-72 rounded-xl border border-input bg-white pl-10 pr-28 text-primary shadow-sm sm:w-96 lg:pr-40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isPending}
              variant="default"
              className="absolute inset-y-1 right-1 rounded-xl"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
