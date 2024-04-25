import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import img2 from "@/assets/images/explore-airplane.png";
import { FilterBar } from "../_components/filter-bar";
import { LocationsList } from "../_components/locations-list";
import { LocationCard } from "../_components/location-card";
import img3 from "@/assets/images/explore-image.png";
import { PostmarkSwiper } from "../_components/postmark-swiper";

const data = [
  {
    id: "1",
    title: "Machu Picchu",
    city: "Huayna Picchu",
    country: "Peru",
    rating: 4.9,
    urls: [
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
  {
    id: "2",
    title: "El Nido sea",
    city: "Palawan island",
    country: "Philippines",
    rating: 4.7,
    urls: [
      "https://utfs.io/f/deaaabb2-b833-41ac-a3ad-c9721f7ffb50-a9d9bm.jpg",
      "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
  {
    id: "3",
    title: "Sfinga pyramid",
    city: "Giza",
    country: "Egypt",
    rating: 4.5,
    urls: [
      "https://utfs.io/f/2ecfe2aa-78c3-4784-8430-8dc6a7b41645-ami1nv.jpg",
      "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
  {
    id: "4",
    title: "Bahamas sea",
    city: "Dummy city bahamas",
    country: "Bahamas",
    rating: 4.5,
    urls: [
      "https://utfs.io/f/4a0556fe-7687-4c31-aece-d5cfbb8f8632-9hmpfa.jpg",
      "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
  {
    id: "5",
    title: "Cappadocia balloons",
    city: "Cappadocia",
    country: "Turkey",
    rating: 4.8,
    urls: [
      "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
  {
    id: "6",
    title: "Test title",
    city: "Test city",
    country: "Test country",
    rating: 4.5,
    urls: [
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
  {
    id: "7",
    title: "Test title",
    city: "Test city",
    country: "Test country",
    rating: 4.5,
    urls: [
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
      "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
    ],
  },
];

const ExplorePage = () => {
  return (
    <main className="mx-6 flex min-h-screen flex-col items-center font-poppins sm:mx-24 xl:mx-32">
      <div className="mt-6 flex flex-col items-center justify-center xl:relative">
        <h1 className="font-base mt-12 max-w-[620px] text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl sm:leading-[1.12] xl:hidden">
          Explore perfect <span className="font-bold text-primary">places</span>{" "}
          to visit.
        </h1>
        <Image
          alt="explore image"
          src={img3}
          width={1660}
          height={600}
          priority
          quality={100}
          className="hidden xl:block"
        />
        <div className="mt-12 block xl:absolute xl:bottom-[-58px]  xl:left-1/2 xl:mt-0 xl:-translate-x-1/2 xl:transform">
          <FilterBar />
        </div>
      </div>
      <Button asChild variant="outline" className="mt-24">
        <Link href="/explore/new-location" className="space-x-2">
          <PlusIcon className="mr-2 h-5 w-5" /> Add Location
        </Link>
      </Button>
      <div className="w-full pt-12">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
          Popular Locations
        </h1>
        <p className="pt-2 text-muted-foreground">
          Most popular locations on world
        </p>
        <LocationsList locations={data} />
      </div>
      <div className="w-full pt-12">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
          Popular Cities
        </h1>
        <p className="pt-2 text-muted-foreground">Ten most visited cities</p>
        <PostmarkSwiper />
      </div>
    </main>
  );
};

export default ExplorePage;
