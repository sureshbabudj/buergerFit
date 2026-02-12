import { Metadata } from "next";
import { LandingPage } from "./home-content";

export const metadata: Metadata = {
  title: "BürgerFit | Pass the German Naturalization Test",
  description:
    "Free interactive prep for the German Einbürgerungstest. Practice with 310 official questions in English and German, track progress, and master your state questions.",
  openGraph: {
    title: "BürgerFit | German Citizenship Test Prep",
    description: "The smartest way to pass the German Einbürgerungstest.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <LandingPage />;
}
