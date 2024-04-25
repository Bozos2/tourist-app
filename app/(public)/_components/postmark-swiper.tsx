"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type SwiperType from "swiper";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import images from "@/assets/images/postmarks";
import { Button } from "@/components/ui/button";

const postmarkData = [
  { href: "/explore/", image: images.paris },
  { href: "/explore/", image: images.peking },
  { href: "/explore/", image: images.newyork },
  { href: "/explore/", image: images.berlin },
  { href: "/explore/", image: images.rome },
  { href: "/explore/", image: images.giza },
  { href: "/explore/", image: images.athena },
  { href: "/explore/", image: images.agra },
  { href: "/explore/", image: images.tokyo },
  { href: "/explore/", image: images.london },
];

export const PostmarkSwiper = () => {
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
          320: { slidesPerView: 1.3 },
          360: { slidesPerView: 1.4 },
          420: { slidesPerView: 1.6 },
          500: { slidesPerView: 2 },
          580: { slidesPerView: 2.4 },
          640: { slidesPerView: 2 },
          680: { slidesPerView: 2.3 },
          820: { slidesPerView: 2.5 },
          910: { slidesPerView: 3 },
          1134: { slidesPerView: 4 },
          1438: { slidesPerView: 5 },
          1716: { slidesPerView: 6 },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        className="h-full w-full"
      >
        {postmarkData.map((data, i) => (
          <SwiperSlide key={i}>
            <PostmarkCard href={data.href} image={data.image} />
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
            "cursor-pointer rounded-full border border-primary bg-background p-2 hover:bg-gray-100 dark:bg-transparent dark:hover:bg-primary/40",
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
            "cursor-pointer rounded-full border border-primary bg-background p-2 hover:bg-gray-100 dark:bg-transparent dark:hover:bg-primary/40",
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

interface PostmarkCardProps {
  href: string;
  image: any;
}

const PostmarkCard = ({ href, image }: PostmarkCardProps) => {
  return (
    <div className="relative h-[250px] w-[200px]">
      <Link href={href}>
        <Image alt="postmark images" src={image} width={200} height={250} />
      </Link>
    </div>
  );
};
