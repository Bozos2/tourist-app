import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_APP_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_APP_URL}/home`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_APP_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_APP_URL}/explore`,
    },
    {
      url: `${process.env.NEXT_APP_URL}/auth/login`,
    },
    {
      url: `${process.env.NEXT_APP_URL}/auth/register`,
    },
  ];
}
