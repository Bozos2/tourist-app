import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import { Socials } from "./footer-socials";
import MobileLinks from "./footer-mobile-links";
import { FooterLinks } from "./footer-links";
import { Separator } from "../ui/separator";

export const FooterContent = () => {
  return (
    <section className="flex flex-col gap-2 py-8">
      <Separator className="my-4 block sm:hidden" />
      <NewsletterForm />
      <FooterLinks />
      <Separator className="mb-5 mt-10 hidden sm:block" />
      <Socials />
      <MobileLinks />
      <h1 className="mt-12 block text-xs text-muted-foreground sm:hidden sm:text-sm">
        Copyright © 2024 Trip Teasers. All rights reserved.
      </h1>
    </section>
  );
};
