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
  { href: "/explore/search?country=France&city=Paris", image: images.paris },
  { href: "/explore/search?country=China&city=Beijing", image: images.peking },
  {
    href: "/explore/search?country=United+States&city=New+York",
    image: images.newyork,
  },
  { href: "/explore/search?country=Germany&city=Berlin", image: images.berlin },
  { href: "/explore/search?country=Italy&city=Rome", image: images.rome },
  { href: "/explore/search?country=Egypt&city=Giza", image: images.giza },
  { href: "/explore/search?country=Greece&city=Athens", image: images.athena },
  { href: "/explore/search?country=India&city=Agra", image: images.agra },
  { href: "/explore/search?country=Japan&city=Tokyo", image: images.tokyo },
  {
    href: "/explore/search?country=United+Kingdom&city=London",
    image: images.london,
  },
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
    <div className="relative flex  flex-col pt-12">
      <Swiper
        spaceBetween={40}
        slidesPerView="auto"
        onSwiper={(swiper) => setSwiper(swiper)}
        className="h-full w-full"
      >
        {postmarkData.map((data, i) => (
          <SwiperSlide key={i} className="!w-fit">
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
