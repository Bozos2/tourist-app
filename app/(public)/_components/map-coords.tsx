"use client";

import { useState } from "react";

import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export interface MapDrawerDialogProps {
  position: [number, number];
  zoom: number;
  setCoordinates: (coords: [number, number]) => void;
}

const MapCoords: React.FC<MapDrawerDialogProps> = ({
  position,
  zoom,
  setCoordinates,
}) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null,
  );

  const MapClickHandler = () => {
    useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setMarkerPosition([lat, lng]);
        setCoordinates([lat, lng]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPosition && <Marker position={markerPosition} />}
      <MapClickHandler />
    </MapContainer>
  );
};

export default MapCoords;
