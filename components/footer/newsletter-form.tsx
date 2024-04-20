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
import { MdEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
    <section className="mt-12 flex w-64 flex-col pb-3 md:pb-0 2xl:mt-20 3xl:mt-24">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium tracking-wide xl:text-black/70">
          Newsletter
        </h1>
        <div className="h-1 w-20 bg-primary pt-1"></div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative mt-4 flex  flex-row"
        >
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
                    className="h-10  w-64 rounded-3xl bg-[#3E438E]/40 pl-9  placeholder:text-white/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="absolute left-0.5 top-2">
            <IoMailOutline className="absolute ml-1.5 h-6 w-6 text-white/50" />
          </div>
          <div className="absolute right-0.5 top-0.5 ">
            <Button
              type="submit"
              disabled={isPending}
              className="h-9 w-9 rounded-full bg-primary text-white"
            >
              <ArrowRightIcon className="absolute" />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
