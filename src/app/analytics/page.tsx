"use client";

import { Header } from "@/components/Header";
import { MainHeader } from "@/components/main-header";
import { ProgressAnalytics } from "@/components/ProgressAnalytics";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AnalyticsPage() {
  const router = useRouter();

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
