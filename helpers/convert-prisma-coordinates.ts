export const convertCoordinates = (
  coords: string[] | null | undefined,
): [number, number] | null => {
  if (!coords || coords.length === 0) {
    return null;
  }

  // If coordinates ["lat", "lon"]
  if (coords.length === 2) {
    const [latStr, lonStr] = coords.map((s) => s.trim());
    const lat = parseFloat(latStr);
    const lon = parseFloat(lonStr);
    if (isNaN(lat) || isNaN(lon)) {
      throw new Error(`Invalid coordinates: ${coords}`);
    }
    return [lat, lon];
  }

  // If coordiantes ["lat, lon"]
  if (coords.length === 1) {
    const [latStr, lonStr] = coords[0].split(",").map((s) => s.trim());
    const lat = parseFloat(latStr);
    const lon = parseFloat(lonStr);
    if (isNaN(lat) || isNaN(lon)) {
      throw new Error(`Invalid coordinates: ${coords}`);
    }
    return [lat, lon];
  }

  throw new Error(`Invalid coordinates format: ${coords}`);
};
