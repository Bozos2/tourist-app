"use client";

import * as React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { BsPinMap } from "react-icons/bs";

import { MapDrawerDialogProps } from "./map-coords";

const Map = dynamic(() => import("@/app/(public)/_components/map-coords"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export const MapDrawerDialog: React.FC<MapDrawerDialogProps> = ({
  position,
  zoom,
  setCoordinates,
}) => {
  const [open, setOpen] = React.useState(false);
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null,
  );

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSave = () => {
    if (markerPosition) {
      setCoordinates(markerPosition);
      setOpen(false);
    }
  };

  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex flex-row items-center">
          <BsPinMap className="mr-2 h-5 w-5" /> Mark Location
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Mark Location</DialogTitle>
          <DialogDescription>
            Mark location to help other users to find this place.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Map
            position={position}
            zoom={zoom}
            setCoordinates={setMarkerPosition}
          />
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="default" onClick={handleSave}>
            Save Marker
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen} dismissible={false}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex flex-row items-center">
          <BsPinMap className="mr-2 h-5 w-5" /> Mark Location
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Mark Location</DrawerTitle>
          <DrawerDescription>
            Mark location to help other users to find this place.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <Map
            position={position}
            zoom={zoom}
            setCoordinates={setMarkerPosition}
          />
        </div>
        <DrawerFooter className="gap-2 pt-2">
          <Button variant="default" onClick={handleSave}>
            Save Marker
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
