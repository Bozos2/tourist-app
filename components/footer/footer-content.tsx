import Link from "next/link";
import { FooterLogo } from "./footer-logo";
import { NewsletterForm } from "./newsletter-form";
import { Socials } from "./footer-socials";
import MobileLinks from "./footer-mobile-links";
import { FooterLinks } from "./footer-links";

export const FooterContent = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center  md:flex-row md:flex-wrap md:justify-around md:gap-6 lg:gap-16 xl:flex-row xl:justify-between">
      <FooterLogo />
      <NewsletterForm />
      <FooterLinks />
      <Socials />
      <MobileLinks />
    </section>
  );
};
