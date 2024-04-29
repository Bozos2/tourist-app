"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type SwiperType from "swiper";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { LocationCard } from "./location-card";
import { LocationsTypes } from "@/types";
import { Button } from "@/components/ui/button";

interface LocationsProps {
  locations: LocationsTypes[];
}

export const LocationsList = ({ locations }: LocationsProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: swiper.isEnd,
      });
    });
  }, [swiper]);

  return (
    <div className="relative flex flex-col  pt-12">
      <Swiper
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 1 },
          350: { slidesPerView: 1.2 },
          410: { slidesPerView: 1.4 },
          460: { slidesPerView: 1.55 },
          500: { slidesPerView: 1.7 },
          640: { slidesPerView: 1.5 },
          680: { slidesPerView: 1.7 },
          880: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.6 },
          1280: { slidesPerView: 4 },
          1716: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        className="h-full w-full"
      >
        {locations.map((data, i) => (
          <SwiperSlide key={i} className="!relative">
            <LocationCard key={data.id} location={data} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 flex flex-row justify-center  gap-6">
        <Button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          className={cn(
            "hidden cursor-pointer rounded-full border border-primary bg-background p-2 hover:bg-gray-100 dark:bg-transparent dark:hover:bg-primary/40 sm:block",
            {
              "cursor-not-allowed opacity-40": slideConfig.isBeginning,
            },
          )}
        >
          <IoChevronBack className="h-4 w-4 text-primary" />
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={cn(
            "hidden cursor-pointer rounded-full border border-primary bg-background p-2 hover:bg-gray-100 dark:bg-transparent dark:hover:bg-primary/40 sm:block",
            {
              "cursor-not-allowed opacity-40": slideConfig.isEnd,
            },
          )}
        >
          <IoChevronForward className="h-4 w-4 text-primary" />
        </Button>
      </div>
    </div>
  );
};
