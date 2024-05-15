import { format } from "date-fns";

import { getLocation } from "@/actions/get-detail-location";
import { DeatilTopbar } from "../../_components/detail-topbar";
import ImageSlider from "../../_components/image-slider";
import { DetailPageInfo } from "../../_components/detail-page-info";

interface LoocationDetailProps {
  params: {
    loctionId: string;
  };
}

const urls = [
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
  "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
];

const LocationPage: React.FC<LoocationDetailProps> = async ({ params }) => {
  const location = await getLocation(params.loctionId);

  console.log(location);

  return (
    <div className="mt-14 flex min-h-screen flex-col px-6 font-poppins sm:px-24 lg:px-32 xl:px-56 2xl:px-96">
      <div>
        <DeatilTopbar />
      </div>
      <div className="flex flex-row items-center justify-between py-2">
        <h1 className="mr-4 max-w-[600px] truncate text-lg font-semibold text-gray-900 dark:text-white md:text-2xl">
          {location?.name}
        </h1>
        <p className="text-xs text-muted-foreground md:text-sm">
          Created {format(new Date(location?.dateArrived!), "PP")}
        </p>
      </div>
      <div className="flex  justify-center text-center">
        <div className="h-full w-full max-w-[1200px]">
          <ImageSlider urls={urls} aspectRatio="aspect-video" />
        </div>
      </div>
      <div>
        {location ? (
          <DetailPageInfo
            profileImage={location.user.image || " "}
            username={location.user.name || " "}
            role={location.user.role}
            verified={location.user.emailVerified || " "}
            rating={location.rating}
            description={location.description}
            specialFeatures={location.specialFeatures}
            idealFor={location.idealFor}
            city={location.city}
            country={location.country}
            category={location.category}
            address={location.address}
            dateArrived={location.dateArrived}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LocationPage;
