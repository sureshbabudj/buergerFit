import { Metadata } from "next";
import { AnalyticsContent } from "./analytics-content";

export const metadata: Metadata = {
  title: "My Progress | BürgerFit Analytics",
  description:
    "Track your learning progress, success rate, and identify areas that need more practice for the German citizenship test.",
};

export default function Page() {
  return <AnalyticsContent />;
}
