import { Metadata } from "next";
import { SelectRegionContent } from "./select-region-content";

export const metadata: Metadata = {
  title: "Select Your Region | BürgerFit",
  description: "Prepare for the regional questions of your German Bundesland. Select your state to access specific citizenship test questions.",
};

export default function Page() {
  return <SelectRegionContent />;
}
