"use client";

import Image from "next/image";

import WaveSvg from "@/assets/svgs/wave-svg";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

import svgimg from "@/assets/svgs/landing-image.svg";

export const LandingPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] flex-col  justify-center sm:justify-between">
      <div className="flex flex-row justify-between sm:pt-32 md:pt-40 lg:justify-center xl:gap-6  xl:pt-20 2xl:justify-between 3xl:pt-0">
        <div className="mx-6 flex flex-col gap-8  font-poppins sm:mx-24 sm:max-w-[600px] lg:mx-0 lg:ml-24  lg:max-w-[600px] xl:ml-32 xl:max-w-[520px] 2xl:max-w-[710px]">
          <div className="xl:pt-32 2xl:pt-32 3xl:pt-48">
            <h1 className="inline text-4xl font-bold text-gray-900  dark:text-white sm:text-5xl xl:text-4xl 2xl:text-5xl">
              Embark on an Adventure to Discover the Best{" "}
            </h1>
            <span className="hidden text-4xl font-bold tracking-tight text-primary sm:text-5xl md:inline-block xl:text-4xl 2xl:text-5xl">
              <TypewriterComponent
                options={{
                  strings: ["Countries.", "Cities.", "Beaches.", "Parks."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="inline-block text-4xl font-bold tracking-tight text-primary sm:text-5xl md:hidden">
              Countries.
            </span>
          </div>
          <p className="max-w-[600px] text-xl lg:text-2xl xl:max-w-[450px] xl:text-xl 2xl:max-w-[600px]">
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
        <div className="hidden items-center  justify-center xl:flex">
          <Image
            src={svgimg}
            width={1000}
            height={700}
            quality={100}
            alt="landing page image"
            priority
          />
        </div>
      </div>
      <div className="z-0 hidden opacity-40 sm:block">
        <WaveSvg />
      </div>
    </section>
  );
};
