"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";

import img from "@/assets/images/candy_design-wallpaper-1920x1080.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";

interface ProfileCardProps {
  image: string;
  username: string;
  bio: string;
  verified: Date;
}

const ProfileBanner = ({
  image,
  username,
  bio,
  verified,
}: ProfileCardProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  const pathname = usePathname();
  const baseUrl = `${process.env.NEXT_APP_URL}` as const;
  const link = `${baseUrl}${pathname}`;

  const linkPlaceholder = pathname.slice(9);

  const copylink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className="relative h-full w-full">
      <Image
        alt="cover photo"
        src={img}
        className="aspect-video w-full rounded-xl object-cover object-center md:aspect-auto md:h-80"
        loading="eager"
        quality={100}
        priority
      />
      <div className="left-[8%] top-1/2 z-50 hidden w-60 -translate-x-[8%] rounded-xl border border-input bg-background dark:border-0 dark:bg-[#12131F] lg:absolute lg:block 2xl:left-[4%] 2xl:-translate-x-[4%] 3xl:left-[8%] 3xl:-translate-x-[8%]">
        <div className="flex flex-col items-center space-y-3  px-4 py-6">
          <Avatar className="h-32 w-32">
            <AvatarImage src={image || " "} />
            <AvatarFallback className="bg-primary">
              <div className="bg-primary text-white">
                <h1 className="text-4xl font-medium">{username.slice(0, 1)}</h1>
              </div>
            </AvatarFallback>
          </Avatar>
          <div className="grid place-items-center">
            <h1 className="line-clamp-2 text-center text-xl font-bold">
              {username}
            </h1>
            <div className="flex flex-row gap-0.5 pt-1">
              <p className="w-32 truncate text-xs">{linkPlaceholder}</p>
              <button onClick={copylink}>
                {copied ? (
                  <IoCheckmarkSharp className="text-primary" />
                ) : (
                  <FaRegCopy className="text-primary" />
                )}
              </button>
            </div>
          </div>
          <p className="line-clamp-4 pt-2 text-center text-xs text-muted-foreground">
            {bio}
          </p>
          <div className="flex flex-row space-x-3 py-4">
            <Link href="">
              <AiFillInstagram className="h-6 w-6 text-primary hover:opacity-80 dark:text-white" />
            </Link>
            <Link href="">
              <FaTwitter className="h-6 w-6 text-primary hover:opacity-80 dark:text-white" />
            </Link>
            <Link href="">
              <FaFacebook className="h-5 w-5 text-primary hover:opacity-80 dark:text-white" />
            </Link>
            <Link href="">
              <FaTiktok className="h-5 w-5 text-primary hover:opacity-80 dark:text-white" />
            </Link>
          </div>
          <Separator />
          <p className="pt-4 text-sm text-muted-foreground">
            Joined {format(new Date(verified), "PP")}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform scrollScreen:-bottom-[88px] lg:hidden">
        <Avatar className="h-36 w-36 scrollScreen:h-44 scrollScreen:w-44">
          <AvatarImage src={image || " "} />
          <AvatarFallback className="bg-primary">
            <div className="bg-primary text-white">
              <h1 className="text-2xl font-medium scrollScreen:text-4xl">
                {username.slice(0, 1)}
              </h1>
            </div>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default ProfileBanner;
