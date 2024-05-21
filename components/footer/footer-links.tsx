import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/svgs/trip-teasers-logo.svg";

export const FooterLinks = () => {
  return (
    <div className="mt-7 hidden flex-col items-center justify-center gap-6 sm:flex">
      <Image alt="footer logo" width={90} height={90} src={logo} />
      <div className="flex flex-row items-center gap-6 text-lg">
        <Link href="/home" className="hover:text-primary">
          Home
        </Link>
        <Link href="/explore" className="hover:text-primary">
          Explore
        </Link>
        <Link href="/contact" className="hover:text-primary">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-primary">
          Privacy
        </Link>
        <Link href="/faq" className="hover:text-primary">
          Faq
        </Link>
      </div>
    </div>
  );
};
