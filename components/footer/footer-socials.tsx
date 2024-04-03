import Link from "next/link";

import { AiOutlineInstagram } from "react-icons/ai";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { TiSocialFacebook } from "react-icons/ti";

export const Socials = () => {
  return (
    <div className="hidden flex-col  md:flex xl:mt-20 2xl:mt-24  3xl:mt-28">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium tracking-wide xl:text-black/70">
          Socials
        </h1>
        <div className="h-1 w-20 bg-primary pt-1"></div>
      </div>
      <div className="flex flex-row pt-2">
        <div className="flex h-12 w-12 items-center justify-center">
          <Link
            href=""
            className="flex items-center justify-center rounded-full border-2 border-white transition duration-300 ease-in hover:-translate-y-0.5  hover:scale-110 hover:border-none hover:bg-white xl:border-primary xl:hover:bg-primary"
          >
            <AiOutlineInstagram className="h-9 w-9 p-1 hover:text-primary xl:text-primary xl:hover:text-white" />
          </Link>
        </div>
        <div className="flex h-12 w-12 items-center justify-center">
          <Link
            href=""
            className="flex items-center justify-center rounded-full border-2 border-white transition duration-300 ease-in hover:-translate-y-0.5  hover:scale-110 hover:border-none hover:bg-white xl:border-primary xl:hover:bg-primary"
          >
            <TwitterLogoIcon className="h-9 w-9 p-1 hover:text-primary xl:text-primary xl:hover:text-white" />
          </Link>
        </div>
        <div className="flex h-12 w-12 items-center justify-center">
          <Link
            href=""
            className="flex items-center justify-center rounded-full border-2 border-white transition duration-300 ease-in hover:-translate-y-0.5  hover:scale-110 hover:border-none hover:bg-white xl:border-primary xl:hover:bg-primary"
          >
            <TiSocialFacebook className="h-9 w-9 p-1 hover:text-primary xl:text-primary xl:hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
