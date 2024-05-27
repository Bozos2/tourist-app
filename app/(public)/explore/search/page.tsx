import { Suspense } from "react";
import { db } from "@/lib/db";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FilterBar } from "../../_components/filter-bar";
import img from "@/assets/images/location-illustration.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { SearchLocationsCardSkeleton } from "../../_components/search-locations-card";

const SearchLocationsCard = dynamic(
  () => import("../../_components/search-locations-card"),
  {
    ssr: false,
  },
);

interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const query =
    typeof searchParams.query === "string" ? searchParams.query : undefined;
  const country =
    typeof searchParams.country === "string" ? searchParams.country : undefined;
  const city =
    typeof searchParams.city === "string" ? searchParams.city : undefined;

  const searchParamsEmpty =
    query === undefined && country === undefined && city === undefined;

  let location: any = [];

  if (!searchParamsEmpty) {
    location = await db.locations.findMany({
      where: {
        name: {
          search: query?.split(" ").join(" & "),
        },
        country: { contains: country },
        city: { contains: city },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            role: true,
            image: true,
            emailVerified: true,
          },
        },
      },
    });
  }

  return (
    <div className="mx-6 mt-12 flex min-h-screen  flex-col items-center font-poppins sm:mx-24 xl:mx-32">
      <div className="w-fit">
        <FilterBar />
      </div>
      {location.length > 0 ? (
        <div className="mt-12 space-y-6 md:w-full">
          {location.map((location: any) => (
            <Suspense fallback={<SearchLocationsCardSkeleton />}>
              <SearchLocationsCard
                key={location.id}
                id={location.id}
                urls={location.images}
                title={location.name}
                country={location.country}
                city={location.city}
                rating={location.rating}
                specialFeatures={location.specialFeatures}
                idealFor={location.idealFor}
                username={location.user?.name || ""}
                role={location.user.role}
                profileImage={location.user.image || ""}
                verified={location.user.emailVerified || " "}
                userid={location.user.id}
              />
            </Suspense>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center">
          <Image
            alt="no-location image"
            src={img}
            width={600}
            height={400}
            quality={100}
          />
          <p className="pt-4 text-center text-xl font-semibold text-muted-foreground dark:text-white">
            Location Not Found for the Searched Area. Try Another Location.
          </p>
          <Button variant="default" className="mt-4 w-fit px-10" asChild>
            <Link href="/explore">
              <IoArrowBack className="mr-1 h-5 w-5" />
              Back
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
