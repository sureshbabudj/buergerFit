import { Metadata } from "next";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | BürgerFit",
  description: "BürgerFit respects your privacy. We do not collect or store any personal data on our servers.",
};

export default function Page() {
  return <PrivacyContent />;
}
