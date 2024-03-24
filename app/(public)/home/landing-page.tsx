"use client";

import WaveSvg from "@/assets/svgs/wave-svg";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";

export const LandingPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] flex-col justify-between pt-6">
      <div className="mx-6 flex flex-col justify-between gap-8 pt-12 font-poppins sm:mx-24 sm:pt-36 lg:w-[740px] lg:pt-48 xl:mx-32">
        <div>
          <h1 className="inline text-4xl sm:text-5xl">
            Embark on an Adventure to Discover the Best{" "}
          </h1>
          <span className="inline-block text-4xl text-primary sm:text-5xl">
            <TypewriterComponent
              options={{
                strings: [
                  "Countries.",
                  "Cities.",
                  "Museums.",
                  "Parks.",
                  "Restaurants.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="max-w-[600px] text-xl">
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
      <div className="z-0 hidden opacity-40 sm:block">
        <WaveSvg />
      </div>
    </section>
  );
};
