import { format } from "date-fns";
import dynamic from "next/dynamic";

import { getLocation } from "@/actions/get-detail-location";
import { DeatilTopbar } from "../../_components/detail-topbar";
import ImageSlider from "../../_components/image-slider";
import { DetailPageInfo } from "../../_components/detail-page-info";
import { Separator } from "@/components/ui/separator";
import { DrawerDialog } from "../../_components/dialog-drawer-review";
import CommentsSection from "../../_components/comments-section";
import { convertCoordinates } from "@/helpers/convert-prisma-coordinates";
import { LocationsList } from "../../_components/locations-list";
import {
  getSameCategoryLocations,
  getDetailNearLocations,
} from "@/actions/location";

const Map = dynamic(() => import("@/app/(public)/_components/map-detail"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

interface LoocationDetailProps {
  params: {
    locationId: string;
  };
}

const LocationPage: React.FC<LoocationDetailProps> = async ({ params }) => {
  const locationId = params.locationId.split("-").pop();

  if (!locationId) {
    return;
  }

  const location = await getLocation(locationId);

  const coordinates = convertCoordinates(location.coordinates);

  const embedUrl = location?.video?.replace("watch?v=", "embed/");

  const sameCategoryLocations = await getSameCategoryLocations(
    location.category,
    location.id,
  );

  const nearLocations = await getDetailNearLocations(
    location.country,
    location.id,
  );

  return (
    <main className="flex w-full justify-center overflow-hidden">
      <div className="mt-14 flex w-full max-w-[1135px] flex-col px-6 font-poppins  2xl:px-0">
        <div>
          <DeatilTopbar id={locationId} />
        </div>
        <div className="flex flex-row items-center justify-between py-2">
          <h1 className="mr-4 max-w-[600px] truncate text-lg font-semibold text-gray-900 dark:text-white md:text-2xl">
            {location?.name}
          </h1>
          <p className="text-xs text-muted-foreground md:text-sm">
            Created {format(new Date(location?.createdAt!), "PP")}
          </p>
        </div>
        <div className="flex  justify-center text-center">
          <div className="h-full w-full max-w-[1200px]">
            {location && location.images ? (
              <ImageSlider urls={location.images} aspectRatio="aspect-video" />
            ) : (
              " "
            )}
          </div>
        </div>
        <div>
          {location ? (
            <DetailPageInfo
              id={locationId}
              profileImage={location.user?.image || " "}
              username={location.user?.name || " "}
              role={location.user?.role || " "}
              verified={location.user?.emailVerified || " "}
              rating={location.rating || 0}
              description={location.description!}
              specialFeatures={location.specialFeatures}
              idealFor={location.idealFor!}
              city={location.city!}
              country={location.country!}
              category={location.category!}
              address={location.address!}
              dateArrived={location.dateArrived!}
              openingTime={location.openingTime || " "}
              closingTime={location.closingTime || " "}
              price={location.price || 0}
              video={embedUrl}
              ratingNumber={location.commentsCount}
              userid={location.user?.id || " "}
            />
          ) : (
            ""
          )}
        </div>
        <div className="mt-6">
          <Separator />
          <div className="mt-3">
            <h1 className="mb-2 text-xl font-semibold">Location</h1>
            {coordinates ? (
              <div className="h-[400px] w-full">
                <Map position={coordinates} title={location.name} />
              </div>
            ) : (
              <h1 className="pt-2 text-center text-lg text-muted-foreground">
                User didn&apos;t marked location!
              </h1>
            )}
          </div>
        </div>
        <div className="mt-6">
          <Separator />
          <div className="mt-3">
            <h1 className="mb-2 text-xl font-semibold">User ratings</h1>
            <CommentsSection locationId={locationId} />
            <div className="flex flex-row items-center justify-between sm:justify-start">
              <h1 className="mr-3 text-sm font-light sm:text-base">
                Wanna help other users with your experience?
              </h1>
              <DrawerDialog id={locationId} title="Add Review" />
            </div>
          </div>
        </div>
        <div className="mt-12">
          {nearLocations.length >= 1 ? (
            <div>
              <h1 className="pb-4 text-xl font-semibold">
                Locations near this place
              </h1>
              <LocationsList locations={nearLocations} />
            </div>
          ) : null}
          <div className="sm:mt-3">
            <h1 className="pb-4 text-xl font-semibold">
              Same category locations
            </h1>
            <LocationsList locations={sameCategoryLocations} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LocationPage;
