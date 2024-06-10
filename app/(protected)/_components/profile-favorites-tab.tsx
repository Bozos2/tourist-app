"use client";

import Image from "next/image";
import Link from "next/link";
import { useTransition, useState } from "react";

import { formatDistance } from "date-fns";
import { removeFavorites } from "@/actions/favorites";

import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface FavoritesDataProps {
  id: string;
  images: string[];
  name: string;
  city: string;
  country: string;
  createdAt: Date;
}

export interface FavoritesProps {
  favorites: FavoritesDataProps[];
  isOwnUser: boolean;
}

const ProfileFavoriteTabs = ({
  favorites: initialFavorites,
  isOwnUser,
}: FavoritesProps) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [showAll, setShowAll] = useState<boolean>(false);

  const InitialFavorites = favorites.slice(0, 6);

  const handleShowData = () => {
    setShowAll((prev) => !prev);
  };

  if (favorites.length < 1) {
    return (
      <div className="flex items-center justify-center pt-12">
        <h1 className="text-muted-foreground">
          User still don&apos;t have favorites locations!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {!showAll
          ? InitialFavorites.map((data) => (
              <ProfileFavoritesCard
                key={data.id}
                id={data.id}
                images={data.images}
                name={data.name}
                city={data.city}
                country={data.country}
                createdAt={data.createdAt}
                isOwnUser={isOwnUser}
                setFavorites={setFavorites}
              />
            ))
          : favorites.map((data) => (
              <ProfileFavoritesCard
                key={data.id}
                id={data.id}
                images={data.images}
                name={data.name}
                city={data.city}
                country={data.country}
                createdAt={data.createdAt}
                isOwnUser={isOwnUser}
                setFavorites={setFavorites}
              />
            ))}
      </div>
      <div className="mt-8 flex w-full justify-center">
        {favorites.length > InitialFavorites.length ? (
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

export default ProfileFavoriteTabs;

interface ProfileFavoritesCardProps extends FavoritesDataProps {
  isOwnUser: boolean;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesDataProps[]>>;
}

const ProfileFavoritesCard = ({
  id,
  images,
  name,
  city,
  country,
  createdAt,
  isOwnUser,
  setFavorites,
}: ProfileFavoritesCardProps) => {
  const [isPending, setTransition] = useTransition();

  const handleRemove = (locationId: string) => {
    setTransition(() => {
      removeFavorites(locationId).then((data) => {
        if ("error" in data) {
          toast.error(data.error);
        } else {
          toast.success("Locations removed successfully!");
          setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.id !== locationId),
          );
        }
      });
    });
  };

  return (
    <Link
      className="relative flex w-full max-w-64  cursor-pointer  flex-col rounded-xl border border-input bg-background  dark:border-0 dark:bg-transparent/40"
      key={id}
      href={`/explore/${name.toLocaleLowerCase()}-${id}`}
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
        <div className="flex items-center justify-between px-0.5 pb-2">
          <p className="text-xs text-muted-foreground">
            Added{" "}
            {formatDistance(new Date(createdAt), new Date(), {
              addSuffix: true,
            })}
          </p>
          {isOwnUser ? (
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-row items-center gap-1 px-1.5 text-destructive hover:bg-destructive hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                handleRemove(id);
              }}
              disabled={isPending}
            >
              <RiDeleteBinLine className="h-4 w-4" /> Remove
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};
