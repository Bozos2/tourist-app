"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";

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
import { register } from "@/actions/register";
import { Social } from "./social";
import { toast } from "@/components/ui/use-toast";

import logo from "@/assets/images/trip-teasers-logo.png";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");

    setTransition(() => {
      register(values).then((data) => {
        setError(data.error);

        if (data?.success) {
          form.reset();
          toast({
            title: "Successfully registered!",
            description: `${data.success}`,
          });
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[510px] space-y-4 p-4 pb-10"
      >
        <>
          <div>
            <Image alt="logo image" width={300} height={300} src={logo} />
            <h1 className="mt-[-40px] text-center text-2xl font-semibold">
              Create an account
            </h1>
            <Button
              asChild
              variant="link"
              className="flex items-center justify-center text-muted-foreground"
            >
              <Link href="/login">
                Already have an account? Sign-in
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      placeholder="youremail@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
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
            <FormError message={error} />
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full text-white"
                variant="default"
              >
                Register
              </Button>
            </div>
          </div>
          <div className="relative py-1.5">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>
          <Social />
        </>
      </form>
    </Form>
  );
};

export default RegisterForm;
