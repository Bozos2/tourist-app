"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import ImageSlider from "./image-slider";
import { LocationsTypes } from "@/types";

import { FaMapMarkerAlt } from "react-icons/fa";
import RatingIcon from "@/assets/svgs/rating-icon";
import { Skeleton } from "@/components/ui/skeleton";

interface LocationCardProps {
  location: LocationsTypes | null;
  index: number;
}

export const LocationCard = ({ location, index }: LocationCardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!location || !isVisible) return <LocationLoadingSkeleton />;

  if (isVisible && location) {
    return (
      <section className="flex w-64 flex-col items-center justify-center md:w-72 xl:w-56 2xl:w-64">
        <Link
          className={cn("invisible h-full w-full cursor-pointer", {
            "visible animate-in fade-in-5": isVisible,
          })}
          href={`/explore/${location.id}`}
        >
          <div>
            <ImageSlider urls={location.urls} />
          </div>
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-col gap-4">
              <h1 className="w-48 truncate font-medium xl:w-36 2xl:w-48">
                {location.title}
              </h1>
              <div className="flex flex-row">
                <FaMapMarkerAlt className="mr-1 h-5 w-5 text-primary" />{" "}
                <span className="w-44 truncate text-sm tracking-tight text-muted-foreground md:w-52 xl:w-36 2xl:w-40">
                  {location.city}, {location.country}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-0.5">
              <RatingIcon className="h-6 w-6" />{" "}
              <p className="pt-0.5">{location.rating}</p>
            </div>
          </div>
        </Link>
      </section>
    );
  }
};

export const LocationLoadingSkeleton = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex flex-row justify-between">
        <Skeleton className="mt-4 h-4 w-44 rounded-lg" />
        <Skeleton className="mt-4 h-4 w-12 rounded-lg" />
      </div>
      <Skeleton className="mt-2 h-4 w-16 rounded-lg" />
    </div>
  );
};
