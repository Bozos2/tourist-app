"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type SwiperType from "swiper";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import CommentsCard from "./comments-card";

export interface User {
  id: string;
  name: string | null;
  image: string | null;
}

export interface CommentsPropsData {
  id: string;
  title: string;
  rating: number;
  createdAt: Date;
  user: User | null;
}

interface CommentProp {
  comments: CommentsPropsData[];
}

const CommentsSwiper = ({ comments }: CommentProp) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          swiper?.slidePrev();
        }}
        className="left-[-24px] top-1/2 z-50 hidden h-9 w-9 -translate-y-1/2 transform cursor-pointer place-items-center rounded-full border-2 border-input bg-white hover:scale-105 active:scale-[0.97] dark:border-none sm:absolute sm:grid"
      >
        <IoChevronBack className="h-5 w-5  text-zinc-700" />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          swiper?.slideNext();
        }}
        className="right-[-24px] top-1/2 z-50 hidden h-9 w-9 -translate-y-1/2 transform cursor-pointer place-items-center rounded-full border-2 border-input bg-white hover:scale-105 active:scale-[0.97] dark:border-none sm:absolute sm:grid"
      >
        <IoChevronForward className="h-5 w-5 text-zinc-700" />
      </button>

      <div className="flex flex-row">
        <Swiper
          spaceBetween={40}
          onSwiper={(swiper) => setSwiper(swiper)}
          centerInsufficientSlides={true}
          slidesPerView="auto"
          className="h-full w-full"
        >
          {comments.map((data, i) => (
            <SwiperSlide key={data.id} className="!w-auto">
              <CommentsCard
                index={i}
                id={data.id}
                username={data.user?.name || ""}
                image={data.user?.image || ""}
                userId={data.user?.id || ""}
                title={data.title}
                rating={data.rating}
                createdAt={data.createdAt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CommentsSwiper;
