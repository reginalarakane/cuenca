import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { body, display } from "@/lib/fonts";
import { buildHomeMetadata } from "@/lib/seo";
import { siteLocale, siteOrigin } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  ...buildHomeMetadata(),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={siteLocale} suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
