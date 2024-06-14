"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type SwiperType from "swiper";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { LocationsList } from "./locations-list";
import { category } from "@/actions/category";
import { LocationsTypes } from "@/types";

import HistoricalSites from "@/assets/svgs/CategoryIcons/historical-sites";
import UrbanArea from "@/assets/svgs/CategoryIcons/urban-area";
import { PiParkLight } from "react-icons/pi";
import { MdOutlineWater } from "react-icons/md";
import { PiMountains } from "react-icons/pi";
import Cave from "@/assets/svgs/CategoryIcons/cave";
import { LuPalmtree } from "react-icons/lu";
import { GiWaterfall } from "react-icons/gi";
import { PiDotsThreeBold } from "react-icons/pi";

const CategoryFilter = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [locations, setLocations] = useState<LocationsTypes[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    //To set default locations
    clickHandler("Historical");

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: swiper.isEnd,
      });
    });
  }, [swiper]);

  const clickHandler = (name: string) => {
    setActiveCategory(name);
    category(name).then((data) => {
      const mappedData: LocationsTypes[] = data.map((item) => ({
        id: item.id,
        images: item.images,
        name: item.name,
        country: item.country,
        city: item.city,
        rating: item.rating,
      }));
      setLocations(mappedData);
    });
  };

  if (width < breakpoint) {
    return (
      <>
        <div className="relative flex flex-row pt-4">
          <div className="flex justify-center">
            {!slideConfig.isBeginning ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slidePrev();
                }}
                className="hidden cursor-pointer p-2 sm:block"
              >
                <IoChevronBack className="h-12 w-4 text-primary" />
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              onSwiper={(swiper) => setSwiper(swiper)}
              className="h-full w-full"
            >
              {CategoryData.map((data, i) => (
                <SwiperSlide key={i} className="!w-16">
                  <div
                    className="group flex w-16 flex-col  hover:cursor-pointer"
                    onClick={() => clickHandler(data.name)}
                  >
                    <data.icon
                      className={cn("h-12 w-16 group-hover:text-primary", {
                        "text-primary": activeCategory === data.name,
                        "text-zinc-700 dark:text-muted-foreground":
                          activeCategory != data.name,
                      })}
                    />
                    <p
                      className={cn(
                        "text-center text-sm group-hover:text-primary",
                        {
                          "text-primary": activeCategory === data.name,
                          "text-zinc-700 dark:text-muted-foreground":
                            activeCategory != data.name,
                        },
                      )}
                    >
                      {data.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center">
            {!slideConfig.isEnd ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slideNext();
                }}
                className="hidden cursor-pointer bg-transparent  p-2 sm:block"
              >
                <IoChevronForward className="h-12 w-4 text-primary" />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="pt-12">
          <LocationsList locations={locations} />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex flex-row gap-8 pt-4 xl:gap-10">
        {CategoryData.map((data, i) => (
          <div
            className="group flex w-16 flex-col  hover:cursor-pointer"
            key={i}
            onClick={() => clickHandler(data.name)}
            tabIndex={0}
          >
            <data.icon
              className={cn("h-12 w-16 group-hover:text-primary", {
                "text-primary": activeCategory === data.name,
                "text-zinc-700 dark:text-muted-foreground":
                  activeCategory != data.name,
              })}
            />
            <p
              className={cn("text-center text-sm  group-hover:text-primary", {
                "text-primary": activeCategory === data.name,
                "text-zinc-700 dark:text-muted-foreground":
                  activeCategory != data.name,
              })}
            >
              {data.name}
            </p>
          </div>
        ))}
      </div>
      <div className="pt-12">
        <LocationsList locations={locations} />
      </div>
    </div>
  );
};

export default CategoryFilter;

interface IconProps {
  className: string;
}

const CategoryData = [
  {
    name: "Historical",
    icon: (props: IconProps) => <HistoricalSites {...props} />,
  },
  {
    name: "Urban",
    icon: (props: IconProps) => <UrbanArea {...props} />,
  },
  {
    name: "Parks",
    icon: (props: IconProps) => <PiParkLight {...props} />,
  },
  {
    name: "Lakes",
    icon: (props: IconProps) => <MdOutlineWater {...props} />,
  },
  {
    name: "Caves",
    icon: (props: IconProps) => <Cave {...props} />,
  },
  {
    name: "Mountains",
    icon: (props: IconProps) => <PiMountains {...props} />,
  },
  {
    name: "Waterfalls",
    icon: (props: IconProps) => <GiWaterfall {...props} />,
  },
  {
    name: "Beaches",
    icon: (props: IconProps) => <LuPalmtree {...props} />,
  },
  {
    name: "Other",
    icon: (props: IconProps) => <PiDotsThreeBold {...props} />,
  },
];
