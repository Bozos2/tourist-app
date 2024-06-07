import {
  UrbanIcon,
  HistoricalIcon,
  ParksIcon,
  LakesIcon,
  CavesIcon,
  MountainsIcon,
  WaterfallsIcon,
  BeachesIcon,
  OtherIcon,
} from "@/assets/leaflet-marker-icons";

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Urban Area":
      return UrbanIcon;
    case "Historical Site":
      return HistoricalIcon;
    case "Parks":
      return ParksIcon;
    case "Lakes":
      return LakesIcon;
    case "Caves":
      return CavesIcon;
    case "Mountains":
      return MountainsIcon;
    case "Waterfalls":
      return WaterfallsIcon;
    case "Beaches":
      return BeachesIcon;
    default:
      return OtherIcon;
  }
};
