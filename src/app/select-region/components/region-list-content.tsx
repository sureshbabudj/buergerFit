"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";
import { encodeRegion, getFirstQuestionForRegion } from "@/lib/utils"; // Ensure this is available on client

export default function RegionListContent({ regions }: { regions: string[] }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const isTestMode = mode === "test";

  const content = isTestMode
    ? {
        title: "Setup Your Mock Test",
        description:
          "Select your state to include the 3 mandatory regional questions in your 33-question exam.",
        icon: <ClipboardCheck className="text-primary" size={32} />,
        badge: "Mock Test Prep",
      }
    : {
        title: "Final 10 Questions",
        description:
          "You've mastered the general 300! Now, select your Bundesland to finish your study path.",
        icon: <GraduationCap className="text-primary" size={32} />,
        badge: "Study Mode",
      };

  return (
    <>
      <header className="py-10 text-center">
        <div className="mb-4  inline-flex w-16 h-16 p-4 items-center justify-center rounded-2xl bg-primary/10">
          {content.icon}
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
          {content.badge}
        </p>
        <h1 className="text-4xl font-black tracking-tight mb-4">
          {content.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {content.description}
        </p>
      </header>

      <div className="grid gap-3 pb-20">
        {regions.map((region) => {
          const regionSlug = encodeRegion(region);

          const targetUrl = isTestMode
            ? `/mock-test`
            : getFirstQuestionForRegion(regionSlug)?.fullPath || "/";

          return (
            <Link
              key={region}
              href={targetUrl}
              className="group flex items-center justify-between p-5 rounded-2xl border border-border bg-card hover:border-primary transition-all active:scale-[0.98] shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="font-bold text-lg">{region}</span>
              </div>
              <ChevronRight
                className="text-muted-foreground group-hover:text-primary transition-colors"
                size={20}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
