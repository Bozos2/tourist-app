"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

import img from "@/assets/images/landing-page.png";

export const LandingPage = () => {
  return (
    <section className="flex  min-h-[calc(100vh-64px)] w-full justify-center font-poppins">
      <div className="flex  max-w-[1500px] flex-row items-center justify-center  gap-4 px-6  sm:px-12">
        <div className="flex max-w-[700px] flex-col gap-6  md:justify-center xl:max-w-[600px] xl:justify-start 2xl:max-w-[700px]">
          <div className="">
            <h1 className="line-clamp-4 inline text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl xl:text-5xl 2xl:text-6xl">
              Embark on an Adventure to Discover the Best{" "}
            </h1>
            <span className="hidden text-4xl font-bold tracking-tight text-primary sm:text-6xl md:inline-block xl:text-5xl 2xl:text-6xl">
              <TypewriterComponent
                options={{
                  strings: ["Countries.", "Cities.", "Beaches.", "Parks."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="inline-block text-4xl font-bold tracking-tight text-primary sm:text-6xl md:hidden">
              Countries.
            </span>
          </div>
          <p className="max-w-[600px] text-xl opacity-80 sm:text-2xl xl:text-xl 2xl:text-2xl">
            Our platform enables you to explore iconic museums, indulge in
            delightful eateries, and unearth hidden gems recommended by fellow
            travelers like yourself. Whether you&apos;re an adventurous explorer
            or a seeker of leisurely escapes, we have something tailored for
            everyone&apos;s taste.
          </p>
          <div className="flex flex-row gap-9">
            <Button
              variant="default"
              className="rounded py-6 tracking-wide text-white"
            >
              Explore Now
            </Button>
            <Button
              variant="outline"
              className=" rounded bg-transparent py-6 tracking-wide  dark:hover:text-white"
            >
              Join Now
            </Button>
          </div>
        </div>
        <div className="hidden xl:block">
          <Image
            src={img}
            width={700}
            height={700}
            quality={100}
            alt="landing page image"
            priority
          />
        </div>
      </div>
    </section>
  );
};
