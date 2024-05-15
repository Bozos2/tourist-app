"use client";

import Link from "next/link";
import { format } from "date-fns";

import { specialFeaturesData, idealForData } from "@/helpers/card-icons-data";
import DisplayIcons from "@/helpers/detail-icons-display";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Rate } from "./ratings";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

interface DetailPageProps {
  country: string;
  city: string;
  rating: number;
  profileImage?: string;
  specialFeatures: string[];
  idealFor: string[];
  username: string;
  role: string;
  verified: string | Date;
  dateArrived: string | Date;
  description: string;
  category: string;
  address: string;
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
}) => {
  return (
    <section className="mt-4 flex flex-col md:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2">
          <div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex w-fit flex-row items-center gap-2 hover:cursor-pointer">
                  <Avatar>
                    <AvatarImage src={profileImage || " "} />
                    <AvatarFallback className="bg-primary">
                      <FaUser className="text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <Link
                    href="/"
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
                      <FaUser className="text-white" />
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
            <p className="text-lg font-medium">{rating}</p>{" "}
            <p className="text-muted-foreground">1,286 reviews</p>
          </div>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
        <div className="mt-6 flex flex-row flex-wrap gap-4">
          {specialFeatures ? (
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
      </div>
      <div className="pl-6">
        <div className="sticky w-full space-y-4">
          <div className="max-w-[290px] space-y-3  rounded-xl border border-input bg-background px-6 py-4 dark:border-0 dark:bg-transparent/40">
            <h1 className="text-center text-xl font-semibold">Key Details</h1>
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
              <FaRegClock className="h-6 w-6 text-primary" />{" "}
              <p className="font-medium text-muted-foreground">
                {" "}
                {format(new Date(dateArrived), "PP")}
              </p>
            </div>
            <div className="mr-2 flex flex-row items-center gap-4">
              <IoHomeOutline className="h-6 w-6 text-primary" />{" "}
              <p className="font-medium text-muted-foreground">{address}</p>
            </div>
          </div>
          <div className="space-y-3">
            <Button variant="default" className="w-full" asChild>
              <Link href="/explore/new-location">Add Location</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Review Place
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
