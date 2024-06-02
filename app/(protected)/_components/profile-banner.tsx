"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";

import { getSocialIcon } from "@/helpers/user-socials";

import img from "@/assets/images/candy_design-wallpaper-1920x1080.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { MdPhotoCamera } from "react-icons/md";

export interface SocialLink {
  [key: string]: string;
}

interface ProfileCardProps {
  image: string;
  coverImage: string;
  username: string;
  bio: string;
  verified: Date;
  socials?: SocialLink[];
}

interface ProfileBannerProps extends ProfileCardProps {
  isOwnUser: boolean;
}

const ProfileBanner = ({
  image,
  username,
  bio,
  verified,
  socials,
  isOwnUser,
  coverImage,
}: ProfileBannerProps) => {
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
      <div className="relative aspect-video w-full md:aspect-auto md:h-80">
        <Image
          alt="cover photo"
          src={coverImage || img}
          className="rounded-xl object-cover object-center"
          loading="eager"
          quality={100}
          fill
          priority
        />
      </div>
      {isOwnUser ? (
        <div className="absolute  bottom-2 right-4 hover:opacity-90">
          <Link
            href="/settings/image"
            className="flex flex-row items-center gap-2 rounded-xl border border-input bg-white p-2 dark:bg-[#12131F]"
          >
            <MdPhotoCamera className="h-5 w-5" />{" "}
            <p className="hidden text-sm sm:block">Add cover photo</p>{" "}
          </Link>
        </div>
      ) : null}
      <div className="absolute bottom-2 right-4 z-50">
        <Link href="/" />
      </div>
      <div className="top-1/2 z-50 hidden w-60 rounded-xl border border-input bg-background dark:border-0 dark:bg-[#12131F] lg:absolute lg:left-[4%] lg:block lg:-translate-x-[4%]">
        <div className="flex flex-col items-center space-y-3  px-4 py-6">
          <div className="relative">
            <Avatar className="h-32 w-32">
              <AvatarImage src={image || " "} />
              <AvatarFallback className="bg-primary">
                <div className="bg-primary text-white">
                  <h1 className="text-4xl font-medium">
                    {username.slice(0, 1)}
                  </h1>
                </div>
              </AvatarFallback>
            </Avatar>
            {isOwnUser ? (
              <Link
                href="/settings/image"
                className="absolute top-0 flex h-full w-full flex-col items-center justify-center rounded-full bg-transparent/60 opacity-0 hover:cursor-pointer hover:opacity-100"
              >
                <MdPhotoCamera className="h-6 w-6 text-white" />
                <p className="line-clamp-2 max-w-24 text-center text-sm text-white">
                  Add profile photo
                </p>
              </Link>
            ) : null}
          </div>
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
          <div className="flex max-w-36 flex-row flex-wrap justify-center gap-2 py-4">
            {socials?.map(({ value }, index) => {
              const Icon = getSocialIcon(value);
              return (
                Icon && (
                  <Link href={value} key={index}>
                    <Icon className="h-6 w-6 text-primary hover:opacity-80 dark:text-white" />
                  </Link>
                )
              );
            })}
          </div>
          <Separator />
          <p className="pt-4 text-sm text-muted-foreground">
            Joined {format(new Date(verified), "PP")}
          </p>
        </div>
      </div>
      <div className="absolute -bottom-[105px] left-1/2 flex  -translate-x-1/2 transform flex-col items-center scrollScreen:-bottom-[122px] sm:-bottom-24 sm:left-[25%] sm:-translate-x-[25%]  sm:flex-row sm:items-end lg:hidden">
        <div className="relative">
          <Avatar className="h-36 w-36 scrollScreen:h-44 scrollScreen:w-44 sm:h-52 sm:w-52">
            <AvatarImage src={image || " "} />
            <AvatarFallback className="bg-primary">
              <div className="bg-primary text-white">
                <h1 className="text-2xl font-medium scrollScreen:text-4xl">
                  {username.slice(0, 1)}
                </h1>
              </div>
            </AvatarFallback>
          </Avatar>
          {isOwnUser ? (
            <Link
              href="/settings/image"
              className="absolute bottom-1 right-1 rounded-full border  bg-white p-1 text-primary hover:opacity-90 dark:bg-[#12131F] dark:text-white scrollScreen:bottom-4 sm:bottom-5 sm:right-2"
            >
              <MdPhotoCamera className="h-6 w-6 sm:h-7 sm:w-7" />
            </Link>
          ) : null}
        </div>
        <h1 className="my-2 flex w-72  items-end justify-center truncate text-xl font-bold sm:justify-start sm:pb-10 sm:pl-4 sm:text-3xl">
          {username}
        </h1>
      </div>
    </div>
  );
};

export default ProfileBanner;
