import type { MetadataRoute } from "next";

import { products } from "@/content/catalog";
import { buildSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildSiteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...products.map((product) => ({
      url: buildSiteUrl(`/producto/${product.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
