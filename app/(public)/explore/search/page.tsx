import { db } from "@/lib/db";
import { redirect } from "next/navigation";

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
  return <div className="min-h-screen"></div>;
};

export default SearchPage;
