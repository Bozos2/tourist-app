"use client";

import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export interface LocationsDataProps {
  id: string;
  images: string[];
  name: string;
  city: string;
  country: string;
  createdAt: Date;
  status: string;
}

export interface LocationsProps {
  locations: LocationsDataProps[];
  isOwnUser: boolean;
}

const acceptedStyle = "text-green-600 border-green-600";
const deniedStyle = "text-destructive border-destructive";
const pendingStyle = "text-yellow-600 border-yellow-600";

const ProfileLocationsTab = ({ locations, isOwnUser }: LocationsProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const InitialLocations = locations.slice(0, 6);

  const handleShowData = () => {
    setShowAll((prev) => !prev);
  };

  if (locations.length < 1) {
    return (
      <div className="flex items-center justify-center pt-12">
        <h1 className="text-muted-foreground">
          User still don&apos;t have added locations!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {!showAll
          ? InitialLocations.map((data) => (
              <ProfileLocationsCard
                key={data.id}
                id={data.id}
                images={data.images}
                name={data.name}
                city={data.city}
                country={data.country}
                createdAt={data.createdAt}
                status={data.status}
                isOwnUser={isOwnUser}
              />
            ))
          : locations.map((data) => (
              <ProfileLocationsCard
                key={data.id}
                id={data.id}
                images={data.images}
                name={data.name}
                city={data.city}
                country={data.country}
                createdAt={data.createdAt}
                status={data.status}
                isOwnUser={isOwnUser}
              />
            ))}
      </div>
      <div className="mt-8 flex w-full justify-center">
        {locations.length > InitialLocations.length ? (
          <Button className="w-1/2 sm:w-fit" onClick={handleShowData}>
            {showAll ? "Show less" : "Show all"}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProfileLocationsTab;

interface ProfileLocationsCardProps extends LocationsDataProps {
  isOwnUser: boolean;
}

const ProfileLocationsCard = ({
  id,
  images,
  name,
  city,
  country,
  createdAt,
  status,
  isOwnUser,
}: ProfileLocationsCardProps) => {
  const router = useRouter();

  const handleClick = (title: string, id: string) => {
    router.push(`/explore/${title.toLocaleLowerCase()}-${id}`);
  };

  return (
    <div
      className={cn(
        "relative flex w-full max-w-64 cursor-not-allowed flex-col  rounded-xl border border-input bg-background dark:border-0  dark:bg-transparent/40",
        { "cursor-pointer": status === "Accepted" },
      )}
      key={id}
      onClick={() => {
        if (status === "Accepted") {
          handleClick(name, id);
        }
      }}
    >
      <div className="relative aspect-video">
        <Image
          alt="location image"
          className="h-1/2 w-full rounded-t-xl object-cover object-center"
          src={images[0]}
          fill
          sizes="auto"
        />
      </div>
      <div className="flex flex-col justify-between gap-12 px-2.5">
        <div className="flex flex-col pt-0.5">
          <h1 className="w-52 truncate text-lg font-medium">{name}</h1>
          <p className="text-sm text-muted-foreground">
            {city}, {country}
          </p>
        </div>
        <div className="flex items-center justify-between px-1 pb-2">
          <p className="text-xs text-muted-foreground">
            {format(new Date(createdAt), "PP")}
          </p>
          {isOwnUser && (
            <span
              className={cn(
                `rounded-xl border px-1.5 py-0.5 text-xs`,
                { [acceptedStyle]: status === "Accepted" },
                { [deniedStyle]: status === "Rejected" },
                { [pendingStyle]: status === "Pending" },
              )}
            >
              {status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
