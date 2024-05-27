"use client";

import Link from "next/link";
import { format } from "date-fns";

import { specialFeaturesData, idealForData } from "@/helpers/card-icons-data";
import DisplayIcons from "@/helpers/detail-icons-display";
import { DrawerDialog } from "./dialog-drawer-review";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Rate } from "./ratings";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import {
  IoHomeOutline,
  IoCalendarNumberOutline,
  IoCashOutline,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";

interface DetailPageProps {
  id: string;
  country: string;
  city: string;
  rating: number;
  profileImage?: string;
  specialFeatures: string[] | undefined;
  idealFor: string[];
  username: string;
  role: string;
  verified: string | Date;
  dateArrived: string | Date;
  description: string;
  category: string;
  address: string;
  video?: string;
  price?: number;
  openingTime?: string;
  closingTime?: string;
  ratingNumber: number;
  userid: string;
}

export const DetailPageInfo: React.FC<DetailPageProps> = ({
  profileImage,
  username,
  rating,
  description,
  specialFeatures,
  idealFor,
  role,
  verified,
  city,
  country,
  dateArrived,
  category,
  address,
  video,
  price,
  openingTime,
  closingTime,
  id,
  ratingNumber,
  userid,
}) => {
  return (
    <section className="mt-4 flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2">
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex w-fit flex-row items-center gap-2 hover:cursor-pointer">
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
                  <Link
                    href={`/profile/${username}-${userid}`}
                    className="text-lg font-semibold hover:underline"
                  >
                    {username}
                  </Link>
                </div>
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
                    <Link
                      href="/"
                      className="text-sm font-semibold hover:underline"
                    >
                      @{username}
                    </Link>
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
          <div className="flex flex-row items-center gap-3">
            <Rate value={rating} />{" "}
            <p className="text-lg font-medium">{rating.toFixed(1)}</p>{" "}
            <p className="text-muted-foreground">{ratingNumber} reviews</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm sm:text-base">{description}</p>
        </div>
        <div className="mt-6 flex flex-row flex-wrap gap-4">
          {specialFeatures && specialFeatures?.length >= 1 ? (
            <div>
              <h1 className="mb-2 text-lg font-semibold">Special features</h1>
              <DisplayIcons
                iconData={specialFeaturesData}
                features={specialFeatures}
              />
            </div>
          ) : (
            ""
          )}
          <div>
            <h1 className="mb-2 text-lg font-semibold">Ideal For</h1>
            <DisplayIcons iconData={idealForData} features={idealFor} />
          </div>
        </div>
        <div className="mt-3 flex flex-col">
          <h1 className="mb-2 text-lg font-semibold">Video</h1>
          <div>
            <iframe
              className="aspect-square h-64 w-full self-stretch rounded-xl scrollScreen:aspect-video lg:h-96"
              src={video}
              loading="eager"
              title="Product Overview Video"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 lg:pl-6">
        <div className="sticky top-3  space-y-4 scrollScreen:w-full lg:w-[280px]">
          <div className="rounded-xl border border-input bg-background px-6 py-4 dark:border-0 dark:bg-transparent/40">
            <h1 className="mb-2 text-center text-xl font-semibold">
              Key Details
            </h1>
            <div className="flex flex-col flex-wrap justify-center  gap-3 scrollScreen:items-center sm:flex-row lg:block lg:space-y-3">
              <div className="mr-2 flex flex-row items-center gap-4">
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />{" "}
                <p className="font-medium text-muted-foreground">
                  {city}, {country}
                </p>
              </div>
              <div className="mr-2 flex flex-row items-center gap-4">
                <BiCategory className="h-6 w-6 text-primary" />{" "}
                <p className="font-medium text-muted-foreground">{category}</p>
              </div>
              <div className="mr-2 flex flex-row items-center gap-4">
                <IoCalendarNumberOutline className="h-6 w-6 text-primary" />{" "}
                <p className="font-medium text-muted-foreground">
                  {" "}
                  {format(new Date(dateArrived), "PP")}
                </p>
              </div>
              <div className="mr-2 flex flex-row items-center gap-4">
                <IoHomeOutline className="h-6 w-6 text-primary" />{" "}
                <p className="font-medium text-muted-foreground">{address}</p>
              </div>
              {openingTime &&
              closingTime &&
              openingTime.trim() !== "" &&
              closingTime.trim() !== "" ? (
                <div className="mr-2 flex flex-row items-center gap-4">
                  <FaRegClock className="h-6 w-6 text-primary" />{" "}
                  <p className="font-medium text-muted-foreground">
                    {openingTime} - {closingTime}
                  </p>
                </div>
              ) : null}
              {price ? (
                <div className="mr-2 flex flex-row items-center gap-4">
                  <IoCashOutline className="h-6 w-6 text-primary" />{" "}
                  <p className="font-medium text-muted-foreground">{price} €</p>
                </div>
              ) : (
                " "
              )}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 lg:block lg:space-y-3">
            <Button variant="default" className="w-full" asChild>
              <Link href="/explore/new-location">Add Location</Link>
            </Button>
            <DrawerDialog id={id} title="Review place" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
