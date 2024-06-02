"use client";

import { useEffect, useState, useTransition } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { addFavorites } from "@/actions/favorites";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Heart from "@/assets/svgs/favorite-svg";
import { toast } from "sonner";

interface ImageSliderProps {
  urls: string[];
  aspectRatio: string;
  id?: string;
}

const ImageSlider = ({ urls, aspectRatio, id }: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPending, setTransition] = useTransition();

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      });
    });
  }, [swiper, urls]);

  const favoritesHandler = (id: string) => {
    setTransition(() => {
      addFavorites(id)
        .then((data) => {
          if (data?.error) {
            toast.error(data.error);
          }
          if (data?.success) {
            toast.success(data.success);
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const inactiveStyles = "hidden text-gray-400";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-zinc-100",
        aspectRatio,
      )}
    >
      <div className="absolute inset-0 z-10 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={cn(activeStyles, "right-3 transition", {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isEnd,
          })}
          aria-label="next image"
        >
          <IoChevronForward className="h-4 w-4 text-zinc-700" />{" "}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
          className={cn(activeStyles, "left-3 transition", {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary-300 text-primary-800 opacity-100":
              !slideConfig.isBeginning,
          })}
          aria-label="previous image"
        >
          <IoChevronBack className="h-4 w-4 text-zinc-700" />{" "}
        </button>
      </div>
      {aspectRatio === "aspect-square" ? (
        <button
          className="absolute  right-2 top-2 z-10"
          onClick={(e) => {
            e.preventDefault();
            favoritesHandler(id!);
          }}
          disabled={isPending}
        >
          <Heart className="h-7 w-7  transition duration-500 ease-out hover:scale-110" />
        </button>
      ) : (
        ""
      )}
      <Swiper
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}"></span>`;
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className="h-full w-full"
      >
        {urls.map((url, i) => (
          <SwiperSlide key={i} className="relative -z-10 h-full w-full">
            <Image
              fill
              loading="eager"
              className="-z-10 h-full w-full object-cover object-center"
              src={url}
              alt="Product image"
              quality={100}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
