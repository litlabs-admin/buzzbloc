import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { indexableRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
