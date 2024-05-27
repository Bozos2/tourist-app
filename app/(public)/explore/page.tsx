import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { FilterBar } from "../_components/filter-bar";
import { LocationsList } from "../_components/locations-list";
import { Button } from "@/components/ui/button";
import { PostmarkSwiper } from "../_components/postmark-swiper";

import { data } from "@/helpers/dummy-data";

import img3 from "@/assets/images/explore-image.png";

const CategoryFilterDynamic = dynamic(
  () => import("../_components/category-filter"),
  {
    ssr: false,
  },
);

const ExplorePage = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden">
      <div className="flex w-full max-w-[1500px] flex-col items-center justify-center px-6 sm:px-12">
        <div className="mt-6 flex flex-col items-center justify-center xl:relative">
          <h1 className="mt-12 max-w-[620px] text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl sm:leading-[1.12] xl:hidden">
            Explore perfect{" "}
            <span className="font-bold text-primary">places</span> to visit.
          </h1>
          <Image
            alt="explore image"
            src={img3}
            width={1560}
            height={600}
            priority
            quality={100}
            className="hidden xl:block"
          />
          <div className="mt-12 block xl:absolute xl:bottom-[-58px]  xl:left-1/2 xl:mt-0 xl:-translate-x-1/2 xl:transform">
            <FilterBar />
          </div>
        </div>
        <div className="mt-12 w-full sm:mt-20 xl:mt-36">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
                Popular Locations
              </h1>
              <p className="pt-2 text-sm text-muted-foreground sm:text-base">
                Most popular locations on world
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/explore/new-location" className="space-x-2">
                Add Location
              </Link>
            </Button>
          </div>
          <div className="w-full">
            <LocationsList locations={data} />
          </div>
        </div>
        <div className="w-full pt-12">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
            Popular Cities
          </h1>
          <p className="pt-2 text-sm text-muted-foreground sm:text-base">
            Ten most visited cities
          </p>
          <div className="w-full">
            <PostmarkSwiper />
          </div>
        </div>
        <div className="w-full pt-12">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
            Filter categories
          </h1>
          <CategoryFilterDynamic />
        </div>
        <div className="w-full pt-12">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
            Locations near you
          </h1>
          <p className="pt-2 text-sm text-muted-foreground sm:text-base">
            Top destinations near your place
          </p>
          <div className="w-full">
            <LocationsList locations={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
