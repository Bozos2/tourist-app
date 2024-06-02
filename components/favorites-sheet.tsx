"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoHeartOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { Rate } from "@/app/(public)/_components/ratings";
import { toast } from "sonner";

import { getFavorites, removeFavorites } from "@/actions/favorites";
import { Separator } from "./ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Favorites = () => {
  const [locations, setLocations] = useState<FavoritesData[]>([]);

  const favoritesHandler = async () => {
    await getFavorites().then((data) => {
      if ("error" in data) {
        toast.error(data.error);
      } else {
        setLocations(data);
      }
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent"
          onClick={() => favoritesHandler()}
        >
          <IoHeartOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Favorites</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Saved locations</SheetTitle>
          <SheetDescription>
            There is list of your saved locations. If you want to edit some of
            them you should go on your{" "}
            <span className="font-bold">Profile &#8250; Saved</span>.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-full w-full">
          <div className="mt-6 flex flex-col gap-3">
            {locations.map((data) => (
              <>
                <FavoritesCard
                  id={data.id}
                  name={data.name}
                  rating={data.rating}
                  city={data.city}
                  country={data.country}
                  images={data.images}
                  setLocations={setLocations}
                  locations={locations}
                />
                <Separator className="my-1" />
              </>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

interface FavoritesData {
  id: string;
  images: string[];
  name: string;
  rating: number;
  city: string;
  country: string;
}

const FavoritesCard = ({
  id,
  name,
  rating,
  city,
  country,
  images,
  setLocations,
  locations,
}: FavoritesData & {
  setLocations: React.Dispatch<React.SetStateAction<FavoritesData[]>>;
  locations: FavoritesData[];
}) => {
  const removesHandler = async (id: string) => {
    await removeFavorites(id).then((data) => {
      if ("error" in data) {
        toast.error(data.error);
      } else {
        toast.success("Locations removed successfully!");
        setLocations(locations.filter((location) => location.id !== id));
      }
    });
  };

  return (
    <Link
      href={`/explore/${name.toLocaleLowerCase()}-${id}`}
      className="flex w-full flex-row justify-between"
      key={id}
    >
      <SheetClose asChild>
        <div className="flex flex-row">
          <div className="relative h-20 w-20">
            <Image
              alt="location image"
              className="h-full w-full rounded-xl object-cover object-center"
              loading="eager"
              fill
              src={images[0]}
              quality={100}
            />
          </div>
          <div className="ml-2 flex  flex-col gap-0.5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h1 className="w-20 truncate text-sm font-medium scrollScreen:w-40 sm:text-lg">
                    {name}
                  </h1>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="flex flex-row">
              <Rate value={rating} size="sm" className="text-sm" />
            </span>
            <p className="w-20 truncate text-xs scrollScreen:w-40">
              {city}, {country}
            </p>
          </div>
        </div>
      </SheetClose>
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.preventDefault();
          removesHandler(id);
        }}
      >
        <RiDeleteBinLine className="h-5 w-5" />
        <span className="sr-only">Move to trash</span>
      </Button>
    </Link>
  );
};
