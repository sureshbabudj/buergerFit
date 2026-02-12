import { Suspense } from "react";
import { regions } from "@/assets/questions_teil_2";
import RegionListContent from "@/components/region-list-content";
import { MainHeader } from "@/components/main-header";

// This page is now 100% static at build time
export default function SelectRegionPage() {
  return (
    <>
      <MainHeader className="hidden md:block" />
      <div className="max-w-xl mx-auto pt-12 px-6">
        {/* We wrap the part that needs URL params in Suspense */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center pt-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground uppercase text-xs font-bold tracking-widest">
                Loading Regions...
              </p>
            </div>
          }
        >
          <RegionListContent regions={regions} />
        </Suspense>
      </div>
    </>
  );
}
