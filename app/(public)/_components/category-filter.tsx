"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type SwiperType from "swiper";

import HistoricalSites from "@/assets/svgs/CategoryIcons/historical-sites";
import UrbanArea from "@/assets/svgs/CategoryIcons/urban-area";
import { PiParkLight } from "react-icons/pi";
import { MdOutlineWater } from "react-icons/md";
import { PiMountains } from "react-icons/pi";
import Cave from "@/assets/svgs/CategoryIcons/cave";
import { LuPalmtree } from "react-icons/lu";
import { GiWaterfall } from "react-icons/gi";
import { PiDotsThreeBold } from "react-icons/pi";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const CategoryFilter = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
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

  if (width < breakpoint) {
    return (
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
                <CategoryList
                  href={data.href}
                  icon={data.icon}
                  name={data.name}
                />
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
    );
  }

  return (
    <div className="flex flex-row gap-8 pt-4 xl:gap-10">
      {CategoryData.map((data, i) => (
        <div key={i}>
          <CategoryList href={data.href} icon={data.icon} name={data.name} />
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;

interface CategoryListProps {
  href: string;
  icon: JSX.Element;
  name: string;
}

const CategoryList = ({ href, icon, name }: CategoryListProps) => {
  return (
    <div className="group flex w-16 flex-col">
      <Link href={href}>
        {icon}
        <p className="text-center text-sm text-zinc-700 group-hover:text-primary dark:text-muted-foreground">
          {name}
        </p>
      </Link>
    </div>
  );
};

const CategoryData = [
  {
    href: "",
    name: "Historical",
    icon: (
      <HistoricalSites className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Urban",
    icon: (
      <UrbanArea className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Parks",
    icon: (
      <PiParkLight className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Lakes",
    icon: (
      <MdOutlineWater className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Caves",
    icon: (
      <Cave className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Mountains",
    icon: (
      <PiMountains className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Waterfalls",
    icon: (
      <GiWaterfall className="h-12 w-16 p-1 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Beaches",
    icon: (
      <LuPalmtree className="h-12 w-16 p-1 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
  {
    href: "",
    name: "Others",
    icon: (
      <PiDotsThreeBold className="h-12 w-16 text-zinc-700 group-hover:text-primary dark:text-muted-foreground" />
    ),
  },
];
