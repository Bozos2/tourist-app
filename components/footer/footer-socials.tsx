import Link from "next/link";

import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="hidden flex-row justify-between sm:flex">
      <h1 className="text-sm">
        Copyright © 2024 Trip Teasers. All rights reserved.
      </h1>
      <div className="flex flex-row items-center gap-4">
        <Link href="">
          <AiFillInstagram className="h-8 w-8 text-primary hover:opacity-80 dark:text-white" />
        </Link>
        <Link href="">
          <FaTwitter className="h-8 w-8 text-primary hover:opacity-80 dark:text-white" />
        </Link>
        <Link href="">
          <FaFacebook className="h-7 w-7 text-primary hover:opacity-80 dark:text-white" />
        </Link>
        <Link href="">
          <FaTiktok className="h-7 w-7 text-primary hover:opacity-80 dark:text-white" />
        </Link>
      </div>
    </div>
  );
};
