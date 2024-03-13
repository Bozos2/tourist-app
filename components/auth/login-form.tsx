"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
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
        className={`space-y-4 rounded-3xl ${!showTwoFactor ? "max-w-[310px] border" : ""}  pb-16 sm:p-4`}
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
              <Social />
            </>
          )}
        </div>
        <FormError message={error || urlError} />
        <Button
          type="submit"
          variant="default"
          disabled={isPending}
          className="w-full text-white"
        >
          {showTwoFactor ? "Confirm" : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
