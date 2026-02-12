"use client";

import { MainHeader } from "@/components/main-header";
import { ProgressAnalytics } from "@/components/ProgressAnalytics";
import { useRouter } from "next/navigation";

export function AnalyticsContent() {
  return (
    <>
      <MainHeader />

      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Progress Analytics</h1>
        </div>
        <ProgressAnalytics />
      </div>
    </>
  );
}
