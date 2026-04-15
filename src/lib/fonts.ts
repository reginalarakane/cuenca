import { Bitter, Young_Serif } from "next/font/google";

export const display = Young_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

export const body = Bitter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});
