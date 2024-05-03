import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { FilterBar } from "../../_components/filter-bar";
import SearchLocationsCard from "../../_components/search-locations-card";

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

  let product = await db.locations.findMany({
    where: {
      name: {
        search: query?.split(" ").join(" & "),
      },
      country: { contains: country },
      city: { contains: city },
    },
  });

  console.log(product);
  return (
    <div className="mx-6 mt-12 flex min-h-screen  flex-col items-center font-poppins sm:mx-24 xl:mx-32">
      <div className="w-fit">
        <FilterBar />
      </div>
      <div className="mt-12 md:w-full">
        <SearchLocationsCard />
      </div>
    </div>
  );
};

export default SearchPage;
