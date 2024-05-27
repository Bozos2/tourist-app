"use client";

import ImageSlider from "./image-slider";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Rate } from "./ratings";
import { Separator } from "@/components/ui/separator";

import { specialFeaturesData, idealForData } from "@/helpers/card-icons-data";
import SpecialFeatures from "@/helpers/icons-display";
import Link from "next/link";

import { format } from "date-fns";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { FaRegCalendarAlt } from "react-icons/fa";

export interface LocationProps {
  id: string;
  urls: string[];
  title: string;
  country: string;
  city: string;
  rating: number;
  profileImage?: string;
  specialFeatures: string[];
  idealFor: string[];
  username: string;
  role: string;
  verified: string | Date;
  userid: string;
}

const SearchLocationsCard: React.FC<LocationProps> = (props) => {
  const router = useRouter();
  const {
    id,
    urls,
    title,
    country,
    city,
    rating,
    specialFeatures,
    idealFor,
    username,
    profileImage,
    role,
    verified,
    userid,
  } = props;

  const profileHandler = () => {
    router.push(`/profile/${username}-${userid}`);
  };

  return (
    <div className="max-w-[800px] rounded-xl border border-input bg-background dark:border-0  dark:bg-transparent/40 xl:max-w-[900px]">
      <Link
        href={`/explore/${title.toLocaleLowerCase()}-${id}`}
        className="flex flex-col md:flex-row"
      >
        <div className="w-72 scrollScreen:w-80 md:w-72 xl:w-80">
          <ImageSlider urls={urls} aspectRatio="aspect-square" id={id} />
        </div>
        <div className="w-72 px-3 py-3 scrollScreen:w-80 md:w-full md:px-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-1 xl:w-full">
              <h1 className="w-64 truncate pr-2 text-xl font-bold text-gray-900 dark:text-white scrollScreen:w-72 md:w-52 mdp:w-72 lg:w-96 xl:w-[450px] xl:text-2xl">
                {title}
              </h1>
              <div className="flex flex-row items-center">
                <FaMapMarkerAlt className="mr-1 text-primary" />{" "}
                <p className="text-sm text-muted-foreground md:text-base">
                  {country},{city}
                </p>
              </div>
              <div className="flex flex-row items-center xl:pt-4">
                <Rate value={rating} />{" "}
                <p className="ml-1">{rating.toFixed(1)}</p>
              </div>
            </div>
            <div
              className="hidden md:block"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar>
                    <AvatarImage src={profileImage || " "} />
                    <AvatarFallback className="bg-primary">
                      <div className="bg-primary text-white">
                        <h1 className="text-xl font-medium">
                          {username.slice(0, 1)}
                        </h1>
                      </div>
                    </AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={profileImage || " "} />
                      <AvatarFallback className="bg-primary">
                        <div className="bg-primary text-white">
                          <h1 className="text-xl font-medium">
                            {username.slice(0, 1)}
                          </h1>
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div
                        className="text-sm font-semibold hover:underline"
                        onClick={() => profileHandler()}
                      >
                        @{username}
                      </div>
                      <p className="text-sm">{role}</p>
                      <div className="flex items-center pt-2">
                        <FaRegCalendarAlt className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined {format(new Date(verified), "PP")}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="flex flex-col md:mt-4">
            {specialFeatures.length >= 1 ? (
              <div className="hidden flex-col gap-2 md:flex">
                <p className="font-medium  text-gray-900 dark:text-white">
                  Special features
                </p>
                <SpecialFeatures
                  iconData={specialFeaturesData}
                  features={specialFeatures}
                />
              </div>
            ) : (
              " "
            )}
            <div className="mt-4 flex  flex-col gap-2">
              <p className="font-medium  text-gray-900 dark:text-white">
                Ideal for
              </p>
              <SpecialFeatures iconData={idealForData} features={idealFor} />
            </div>
          </div>
          <Separator className="my-3 block  md:hidden" />
          <div
            className="block  md:hidden"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div
              className="flex w-fit flex-row"
              onClick={() => profileHandler()}
            >
              <Avatar>
                <AvatarImage src={profileImage || " "} />
                <AvatarFallback className="bg-primary">
                  <FaUser className="text-white" />
                </AvatarFallback>
              </Avatar>
              <div className="ml-2 flex max-w-56 flex-col gap-0.5 truncate">
                <h1 className="text-sm font-semibold">{username}</h1>
                <p className="text-xs opacity-70">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchLocationsCard;

export const SearchLocationsCardSkeleton = () => {
  return (
    <div className="max-w-[800px] rounded-xl border border-input bg-background dark:border-0 dark:bg-transparent/40 xl:max-w-[900px]">
      <div className="flex animate-pulse flex-col md:flex-row">
        <div className="w-72 scrollScreen:w-80 md:w-72 xl:w-80">
          <Skeleton className="aspect-square h-full w-full bg-zinc-200 dark:bg-zinc-500" />
        </div>
        <div className="w-72 px-3 py-3 scrollScreen:w-80 md:w-full md:px-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-1 xl:w-full">
              <Skeleton className="h-6 w-64 truncate bg-zinc-200 pr-2 dark:bg-zinc-500 scrollScreen:w-72 md:w-52 mdp:w-72 lg:w-96 xl:h-8 xl:w-[450px]" />
              <div className="flex flex-row items-center">
                <Skeleton className="mr-1 h-5 w-5 bg-zinc-200 dark:bg-zinc-500" />
                <Skeleton className="h-4 w-36 bg-zinc-200 dark:bg-zinc-500" />
              </div>
              <div className="flex flex-row items-center xl:pt-4">
                <Skeleton className="h-5 w-24 bg-zinc-200 dark:bg-zinc-500" />
                <Skeleton className="ml-1 h-5 w-8 bg-zinc-200 dark:bg-zinc-500" />
              </div>
            </div>
            <div className="hidden md:block">
              <Skeleton className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </div>
          </div>
          <div className="flex flex-col md:mt-4">
            <div className="hidden flex-col gap-2 md:flex">
              <Skeleton className="h-5 w-24 bg-zinc-200 dark:bg-zinc-500" />
              <Skeleton className="h-5 w-72 bg-zinc-200 dark:bg-zinc-500" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Skeleton className="h-5 w-24 bg-zinc-200 dark:bg-zinc-500" />
              <Skeleton className="h-5 w-72 bg-zinc-200 dark:bg-zinc-500" />
            </div>
          </div>
          <Separator className="my-3 block md:hidden" />
          <div className="block md:hidden">
            <div className="flex w-fit flex-row">
              <Skeleton className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <div className="ml-2 flex max-w-56 flex-col gap-0.5 truncate">
                <Skeleton className="h-4 w-32 bg-zinc-200 dark:bg-zinc-500" />
                <Skeleton className="h-4 w-24 bg-zinc-200 dark:bg-zinc-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
