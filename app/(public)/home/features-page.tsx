import Image from "next/image";

import airplane from "@/assets/images/airplane.png";
import book from "@/assets/images/book.png";
import world from "@/assets/images/world.png";
import recommendations from "@/assets/images/recommendations.png";
import storytelling from "@/assets/images/storytelling.png";
import experience from "@/assets/images/experience.png";

import {
  HiOutlineGlobeAsiaAustralia,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import { IoImagesOutline, IoBookmarksOutline } from "react-icons/io5";

export const FeaturesPage = () => {
  return (
    <section className="relative flex min-h-screen justify-center">
      <aside className="z-0">
        <div className="absolute right-0 top-72 sm:top-64">
          <Image
            alt="airplane-background"
            src={airplane}
            width={120}
            height={120}
          />
        </div>
        <div className="absolute bottom-36 left-0">
          <Image alt="book-background" src={book} width={80} height={80} />
        </div>
      </aside>
      <div className="z-10 flex w-[990px] flex-col justify-center gap-8 py-16 lg:gap-4">
        <div className="flex flex-col items-center">
          <h1 className=" text-3xl font-medium tracking-wide">Features</h1>
          <div className="h-1 w-20 bg-primary pt-1"></div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between lg:flex-row">
          <div className="flex justify-center lg:w-[470px] lg:justify-end">
            <Image
              alt="world locations image"
              src={world}
              width={310}
              height={230}
            />
          </div>
          <div className="flex max-w-[315px] flex-col px-4 py-2 sm:max-w-[470px]">
            <h1 className="text-xl font-medium tracking-wide sm:text-2xl">
              Explore Best Places
            </h1>
            <p className="pt-1.5 opacity-85">
              Discover the hidden gems of each city with our Explore feature.
              Find the top-rated locations curated by locals and fellow
              travelers. Explore landmarks, restaurants, parks, and more with
              ease.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="flex max-w-[315px] flex-col px-4 py-2  sm:max-w-[470px]">
            <h1 className="text-xl font-medium tracking-wide sm:text-2xl">
              Personalized Recommendations
            </h1>
            <p className="pt-1.5 opacity-85">
              Tailored just for you, our app provides personalized
              recommendations based on your preferences and past interactions.
              Whether you&apos;re a foodie, history buff, or nature lover,
              we&apos;ve got you covered with recommendations that suit your
              interests.
            </p>
          </div>
          <div className="flex justify-center lg:w-[470px] lg:justify-start">
            <Image
              alt="personalized recommendations image"
              src={recommendations}
              width={310}
              height={230}
            />
          </div>
        </div>
        <div className="flex  flex-col items-center justify-between lg:flex-row">
          <div className="flex justify-center lg:w-[470px] lg:justify-end ">
            <Image
              alt="Storytelling image"
              src={storytelling}
              width={310}
              height={230}
            />
          </div>
          <div className="flex max-w-[315px] flex-col px-4 py-2 sm:max-w-[470px]">
            <h1 className="text-xl font-medium tracking-wide sm:text-2xl">
              Visual and Textual StoryTelling
            </h1>
            <p className="pt-1.5 opacity-85">
              Dive into a captivating story both textual and visual. Immerse
              yourself in the tales of your travels as you seamlessly manage
              your favorite places and bucket list destinations. Add photos,
              comments, ratings, and precise location details. Enjoy a journey
              filled with memorable moments and easy navigation, all within the
              palm of your hand.
            </p>
          </div>
        </div>
        <div className="flex  flex-col-reverse items-center justify-between lg:flex-row">
          <div className="flex max-w-[315px] flex-col px-4 py-2 sm:max-w-[470px]">
            <h1 className="text-xl font-medium tracking-wide sm:text-2xl">
              Effortless User Experience
            </h1>
            <p className="pt-1.5 opacity-85">
              Enjoy a seamless user experience with our intuitive interface and
              user-friendly features. From creating your account to exploring
              new destinations, our app ensures a hassle-free journey every step
              of the way.
            </p>
          </div>
          <div className="flex justify-center lg:w-[470px] lg:justify-start">
            <Image
              alt="user experience image"
              src={experience}
              width={310}
              height={230}
            />
          </div>
        </div>
        <div className="inset-center absolute  w-10">
          <div className="hidden h-full flex-col items-center lg:flex">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <div className="h-20 w-0.5 bg-primary"></div>
            <div className="align-center flex h-8 w-8 items-center justify-center rounded-full border bg-neutral-50 shadow-2xl dark:bg-primary">
              <HiOutlineGlobeAsiaAustralia className="h-6 w-6 text-center text-primary dark:text-white" />
            </div>
            <div className="h-52 w-0.5 bg-primary"></div>
            <div className="align-center flex h-8 w-8 items-center justify-center rounded-full border bg-neutral-50 shadow-2xl dark:bg-primary">
              <IoBookmarksOutline className="h-5 w-5 text-center text-primary dark:text-white" />
            </div>
            <div className="h-64 w-0.5 bg-primary"></div>
            <div className="align-center flex h-8 w-8 items-center justify-center rounded-full border bg-neutral-50 shadow-2xl dark:bg-primary">
              <IoImagesOutline className="h-5 w-5 text-center text-primary dark:text-white" />
            </div>
            <div className="h-44 w-0.5 bg-primary"></div>
            <div className="align-center flex h-8 w-8 items-center justify-center rounded-full border bg-neutral-50 shadow-2xl dark:bg-primary">
              <HiOutlinePaintBrush className="h-5 w-5 text-center text-primary dark:text-white" />
            </div>
            <div className="h-24 w-0.5 bg-primary"></div>
            <div className="h-3 w-3 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
