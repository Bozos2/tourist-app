"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export const PlaceMarkersInfo = () => {
  const islargeScreen = useMediaQuery("(min-width: 1280px)");

  if (islargeScreen) {
    return (
      <ul className="mb-2 flex flex-row flex-wrap  justify-center gap-2 rounded-xl border px-6 py-4">
        {MarkersData.map((data, i) => (
          <li className="flex flex-row items-center gap-1" key={i}>
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: data.color }}
            ></div>
            <p className="text-xs text-muted-foreground">{data.label}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="mb-2" size="sm">
          <InfoCircledIcon className="mr-2" /> Marker Colors
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Marker Colors</DrawerTitle>
            <DrawerDescription>
              Here is list of colors for each category.
            </DrawerDescription>
          </DrawerHeader>
          <ul className="flex flex-row flex-wrap  justify-center gap-4 p-4 pb-0">
            {MarkersData.map((data, i) => (
              <li className="flex flex-row items-center gap-1" key={i}>
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: data.color }}
                ></div>
                <p className="text-muted-foreground">{data.label}</p>
              </li>
            ))}
          </ul>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="default">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const MarkersData = [
  { color: "#FAB005", label: "Historical" },
  { color: "#7950F2", label: "Urban" },
  { color: "#40C057", label: "Parks" },
  { color: "#228BE6", label: "Lakes" },
  { color: "#4D4D4D", label: "Caves" },
  { color: "#12B886", label: "Mountains" },
  { color: "#22C3E6", label: "Waterfalls" },
  { color: "#FD7E14", label: "Beaches" },
  { color: "#FA5252", label: "Other" },
];
