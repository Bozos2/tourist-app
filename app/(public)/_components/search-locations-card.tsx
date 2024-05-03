import ImageSlider from "./image-slider";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { Rate } from "./ratings";
import { Separator } from "@/components/ui/separator";

import { specialFeaturesData, idealForData } from "@/helpers/card-icons-data";
import SpecialFeatures from "@/helpers/icons-display";

const urls = [
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
  "https://utfs.io/f/53a05a6c-5875-464c-bf28-b0462b70b72b-mkb0or.jpg",
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
  "https://utfs.io/f/d4a32994-2de7-4b93-95bb-e77bdeac804b-hbozi.jpg",
];

const SearchLocationsCard = () => {
  return (
    <div className="flex max-w-[800px] flex-col rounded-xl border border-input bg-background dark:border-0  dark:bg-transparent/40 md:flex-row xl:max-w-[900px]">
      <div className="w-72 scrollScreen:w-80 md:w-72 xl:w-80">
        <ImageSlider urls={urls} />
      </div>
      <div className="w-72 px-3 py-3 scrollScreen:w-80 md:w-full md:px-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1 xl:w-full">
            <h1 className="mdp:w-72 w-64 truncate pr-2 text-xl font-bold text-gray-900 dark:text-white scrollScreen:w-72 md:w-52 lg:w-96 xl:w-[450px] xl:text-2xl">
              Bahamas swimming pools
            </h1>
            <div className="flex flex-row items-center">
              <FaMapMarkerAlt className="mr-1 text-primary" />{" "}
              <p className="text-sm text-muted-foreground md:text-base">
                Bahamas, Nassau
              </p>
            </div>
            <div className="flex flex-row items-center xl:pt-4">
              <Rate value={4.8} /> <p className="ml-1">4.2</p>
            </div>
          </div>
          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src={""} />
              <AvatarFallback className="bg-primary">
                <FaUser className="text-white" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex flex-col md:mt-4">
          <div className="hidden flex-col gap-2 md:flex">
            <p className="font-medium  text-gray-900 dark:text-white">
              Special features
            </p>
            <SpecialFeatures
              iconData={specialFeaturesData}
              features={[
                "fitnessarea",
                "outdoorseating",
                "childcareservice",
                "wifi",
                "boating",
                "giftshops",
              ]}
            />
          </div>
          <div className="mt-4 flex  flex-col gap-2">
            <p className="font-medium  text-gray-900 dark:text-white">
              Ideal for
            </p>
            <SpecialFeatures
              iconData={idealForData}
              features={[
                "naturelovers",
                "photography",
                "naturelovers",
                "naturelovers",
                "photography",
                "nighttours",
                "hiking",
                "naturelovers",
              ]}
            />
          </div>
        </div>
        <Separator className="my-3 block  md:hidden" />
        <div className="flex flex-row md:hidden">
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback className="bg-primary">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
          <div className="ml-2 flex max-w-56 flex-col gap-0.5 truncate">
            <h1 className="text-sm font-semibold">John Doe</h1>
            <p className="text-xs opacity-70">USER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLocationsCard;
