"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";

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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { FormError } from "../form-error";
import { login } from "@/actions/login";
import { Social } from "./social";
import { toast } from "@/components/ui/use-toast";

import logo from "@/assets/images/sign-logo.png";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const LoginForm = () => {
  const searchParams = useSearchParams();

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();

  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }
          if (data?.success) {
            form.reset();
            toast({ title: `${data.success}` });
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-4 ${!showTwoFactor ? "mx-6 max-w-[510px]" : ""}  pb-16 sm:p-4`}
      >
        <div className="space-y-4">
          {showTwoFactor && (
            <div className="max-w-60 sm:max-w-[420px]">
              <h1 className="pb-4 text-3xl font-semibold sm:text-4xl">
                <span className="text-4xl text-primary sm:text-5xl">2FA</span>{" "}
                verification code
              </h1>
              <p className="pb-16 opacity-80">
                Please enter the verification code sent to your registered email
                to proceed with the authentication process.
              </p>
              <InputOTP
                name="code"
                disabled={isPending}
                maxLength={6}
                render={({ slots }) => (
                  <>
                    <InputOTPGroup>
                      {slots.slice(0, 3).map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} />
                      ))}{" "}
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      {slots.slice(3).map((slot, index) => (
                        <InputOTPSlot key={index + 3} {...slot} />
                      ))}
                    </InputOTPGroup>
                  </>
                )}
              />
            </div>
          )}
          {!showTwoFactor && (
            <>
              <div>
                <Image alt="logo image" width={300} height={300} src={logo} />
                <h1 className="mt-[-60px] text-center text-2xl font-semibold">
                  Sign in to your account
                </h1>
                <Button
                  asChild
                  variant="link"
                  className="flex items-center justify-center text-muted-foreground"
                >
                  <Link href="/register">
                    Don&apos;t have an account?
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal dark:text-secondary"
                    >
                      <Link href="/auth/reset-password">Forgot password?</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error || urlError} />
              <Button
                type="submit"
                variant="default"
                disabled={isPending}
                className="w-full text-white"
              >
                {showTwoFactor ? "Confirm" : "Login"}
              </Button>
            </>
          )}
        </div>
        <div className="relative py-1.5">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">or</span>
          </div>
        </div>
        <Social />
      </form>
    </Form>
  );
};

export default LoginForm;
