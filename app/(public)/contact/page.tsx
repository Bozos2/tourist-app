"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/schemas";
import { sendContactEmail } from "@/lib/mail";

import { HiOutlineMail } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import img from "@/assets/images/contact-image.png";

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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { contact } from "@/actions/contact";

const ContactPage = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    setTransition(() => {
      contact(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            toast({ title: `${data.error}` });
          }
          if (data.success) {
            form.reset();
            toast({
              title: `${data.success}`,
              description: "We will respond soon!",
            });
          }
        })
        .catch(() =>
          toast({
            variant: "destructive",
            title: "Something went wrong",
          }),
        );
    });
  };

  return (
    <section className="flex justify-center font-poppins">
      <div className="mx-6 flex flex-col  items-center py-12  sm:mx-24 xl:mx-32">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-wide">Contact us!</h1>
          <div className="h-1 w-20 bg-primary pt-1"></div>
          <p className="pt-6 text-center text-xl text-muted-foreground">
            Contact us for a help, some suggestion or to join team.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6 lg:flex-row">
          <div className="flex max-w-64 flex-col items-center gap-1 rounded-md border border-input bg-background p-4 dark:border-0 dark:bg-transparent/40 sm:max-w-[360px] sm:flex-row sm:gap-4">
            <div>
              <HiOutlineMail className="h-12 w-12 text-primary" />{" "}
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-lg font-medium">Contact via Email</h1>
              <p className="text-center text-muted-foreground sm:text-start">
                Have a question or feedback? Fill out the form below and
                we&apos;ll get back to you promptly!
              </p>
            </div>
          </div>
          <div className="flex max-w-64 flex-col items-center gap-1 rounded-md border border-input bg-background p-4 dark:border-0 dark:bg-transparent/40 sm:max-w-[360px] sm:flex-row sm:gap-4">
            <div>
              <BiSupport className="h-12 w-12 text-primary" />{" "}
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-lg font-medium">Contact via Support chat</h1>
              <p className="text-center text-muted-foreground sm:text-start">
                Need quick help? Chat with us using the support chat in the
                bottom right corner.
              </p>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="mt-24  flex w-full max-w-[500px] flex-row justify-center xl:w-[1000px] xl:max-w-[1000px]">
          <div className="hidden w-1/2 flex-col items-end rounded-l-md bg-primary  xl:relative xl:flex">
            <div className="absolute bottom-[0.5px] left-[-156px]">
              <Image
                src={img}
                alt="contact image"
                width={400}
                height={400}
                quality={100}
                priority
              />
            </div>
            <div className="w-80 py-6 pr-4 text-white">
              <h1 className="pt-3 text-center text-5xl font-bold">
                Get in Touch!
              </h1>
              <h2 className="pl-12 pt-12 text-xl">
                Let us know how we can assist you.
              </h2>
              <p className="pl-12 pt-12 opacity-80">
                Feel free to reach out with any questions, feedback, or
                inquiries. We&apos;re always ready to assist you.
              </p>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 rounded-md border border-input px-12 pb-4 pt-8 dark:border-0 dark:bg-transparent/40 xl:w-1/2 xl:rounded-l-none xl:rounded-r-md"
            >
              <div className="space-y-2 xl:hidden">
                <h1 className="text-center text-3xl font-bold sm:text-5xl">
                  Get in Touch!
                </h1>
                <h2 className="text-center text-lg sm:text-xl">
                  Let us know how we can assist you.
                </h2>
                <p className="hidden  text-center opacity-80 sm:block">
                  Feel free to reach out with any questions, feedback, or
                  inquiries. We&apos;re always ready to assist you.
                </p>
              </div>
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
                        placeholder="Your name..."
                        className="w-full"
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
                        placeholder="Your Email..."
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter Subject..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter the text..."
                        className="resize-none"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-center">
                <Button
                  variant="default"
                  type="submit"
                  disabled={isPending}
                  className="px-12 tracking-wider"
                >
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
