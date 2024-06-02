"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaUser, FaHeart, FaMapMarkerAlt, FaCommentDots } from "react-icons/fa";
import { ProfileAboutTab, UserDataProps } from "./profile-about-tab";
import ProfileLocationsTab, {
  LocationsDataProps,
} from "./profile-locations-tab";
import ProfileFavoriteTabs, {
  FavoritesDataProps,
} from "./profile-favorites-tab";
import ProfileReviewsTab, { ReviewsDataProps } from "./profile-reviews-tab";

const tabs = [
  { title: "About", icon: <FaUser /> },
  { title: "Locations", icon: <FaMapMarkerAlt /> },
  { title: "Reviews", icon: <FaCommentDots /> },
  { title: "Favorites", icon: <FaHeart /> },
];

const duration = 0.3;

interface ProfileNavbarProps {
  user: UserDataProps;
  locations: LocationsDataProps[];
  reviews: ReviewsDataProps[];
  favorites: FavoritesDataProps[];
  isOwnUser: boolean;
}

const ProfileNavbar = ({
  user,
  locations,
  reviews,
  favorites,
  isOwnUser,
}: ProfileNavbarProps) => {
  const [selected, setSelected] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  const renderContent = () => {
    switch (selected) {
      case 0:
        return <ProfileAboutTab isOwnUser={isOwnUser} user={user} />;
      case 1:
        return (
          <ProfileLocationsTab isOwnUser={isOwnUser} locations={locations} />
        );
      case 2:
        return <ProfileReviewsTab isOwnUser={isOwnUser} reviews={reviews} />;
      case 3:
        return (
          <ProfileFavoriteTabs isOwnUser={isOwnUser} favorites={favorites} />
        );
      default:
        return null;
    }
  };

  if (isDesktop) {
    return (
      <div className="mt-32 w-full lg:mt-3">
        <div className="flex w-full items-center justify-around pb-3">
          {tabs.map((data, i) => (
            <motion.div
              className="relative cursor-pointer px-3 py-2 xl:px-5"
              key={i}
              initial={{
                color: i === selected ? "#454dd8" : "#9ca3af",
              }}
              animate={{
                color: i === selected ? "#454dd8" : "#9ca3af",
              }}
              transition={{ duration }}
              onClick={() => setSelected(i)}
            >
              <span className="relative flex flex-row items-center gap-2">
                {data.icon} {data.title}
              </span>
              {i === selected && (
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-1 rounded-sm bg-primary"
                  layoutId="selected"
                  transition={{ duration }}
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-6">{renderContent()}</div>
      </div>
    );
  }

  return (
    <div className="mt-24 flex flex-col pt-4 scrollScreen:pt-10">
      <Select
        value={tabs[selected].title}
        onValueChange={(value) => {
          const index = tabs.findIndex((tab) => tab.title === value);
          setSelected(index);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select section" />
        </SelectTrigger>
        <SelectContent>
          {tabs.map((data, i) => (
            <SelectItem key={i} value={data.title}>
              <span className="text-base">{data.title}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default ProfileNavbar;
