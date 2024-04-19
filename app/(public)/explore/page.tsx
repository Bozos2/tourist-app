import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";

const ExplorePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button asChild variant="outline">
        <Link href="/explore/new-location" className="space-x-2">
          <PlusIcon className="mr-2 h-5 w-5" /> Add Location
        </Link>
      </Button>
    </main>
  );
};

export default ExplorePage;
