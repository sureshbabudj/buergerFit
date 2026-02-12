import { Metadata } from "next";
import { MockTestContent } from "./mock-test-content";

export const metadata: Metadata = {
  title: "Mock Exam | BürgerFit German Citizenship Test",
  description:
    "Take a full 33-question mock test for the German Einbürgerungstest. Simulated exam environment with general and state-specific questions.",
};

export default function Page() {
  return <MockTestContent />;
}
