"use client";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import Image from "next/image";
import { Rate } from "./ratings";
import Link from "next/link";

import { getCategoryIcon } from "@/helpers/get-category-icon";

interface LocationData {
  id: string;
  name: string;
  rating: number;
  images: string[];
  category: string;
  coordinates: [number, number];
}

interface MapsProps {
  locations: LocationData[];
  position: [number, number];
  zoom: number;
}

export default function MyMap({ locations, position, zoom }: MapsProps) {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations
        .filter(
          (location) =>
            location.coordinates && location.coordinates.length === 2,
        )
        .map((data) => (
          <Marker
            position={data.coordinates}
            key={data.id}
            icon={getCategoryIcon(data.category)}
          >
            <Popup>
              <div className="relative aspect-video">
                <Image
                  alt="location image"
                  src={data.images[0]}
                  fill
                  className="h-full w-full rounded-t-xl object-cover object-center"
                />
              </div>
              <div className="flex flex-col px-1 pt-0.5">
                <Link
                  href={`/explore/${data.name.toLocaleLowerCase()}-${data.id}`}
                  className="text-grey-900 truncate font-medium hover:underline"
                >
                  {data.name}
                </Link>
                <Rate value={data.rating} size="sm" />
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
