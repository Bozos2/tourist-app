import { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

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
