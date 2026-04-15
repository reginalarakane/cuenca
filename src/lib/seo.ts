import type { Metadata } from "next";

import type { Product } from "@/content/catalog";
import { buildSiteUrl, siteName } from "@/lib/site-config";

const collectionDescription =
  "Micrositio catálogo para la nueva colección de CUENCA: objetos escultóricos en piedra volcánica y materiales de acento para mesa, ritual y presencia material.";

export function buildHomeMetadata(): Metadata {
  return {
    title: `${siteName} | Colección 2026`,
    description: collectionDescription,
    alternates: {
      canonical: buildSiteUrl("/"),
    },
    openGraph: {
      title: `${siteName} | Colección 2026`,
      description: collectionDescription,
      url: buildSiteUrl("/"),
      siteName,
      type: "website",
      locale: "es_MX",
      images: [
        {
          url: buildSiteUrl("/products/salero-pimentero-totem.png"),
          width: 800,
          height: 533,
          alt: "Salero y pimentero Tótem en piedra volcánica.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} | Colección 2026`,
      description: collectionDescription,
      images: [buildSiteUrl("/products/salero-pimentero-totem.png")],
    },
  };
}

export function buildProductMetadata(product: Product): Metadata {
  const title = `${product.name} | ${siteName}`;
  const description = product.summary;
  const path = `/producto/${product.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: buildSiteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: buildSiteUrl(path),
      siteName,
      type: "website",
      locale: "es_MX",
      images: [
        {
          url: buildSiteUrl(product.image.src),
          width: product.image.width,
          height: product.image.height,
          alt: product.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [buildSiteUrl(product.image.src)],
    },
  };
}
