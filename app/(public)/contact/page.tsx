import { Metadata } from "next";

import { ContactForm } from "@/app/(public)/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <main className="flex justify-center font-poppins">
      <ContactForm />
    </main>
  );
};

export default ContactPage;
