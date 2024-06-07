import { type ClientUploadedFileData } from "uploadthing/types";

export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> {}

export interface LocationsTypes {
  id: string;
  images: string[];
  name: string;
  country: string;
  city: string;
  rating: number;
}
