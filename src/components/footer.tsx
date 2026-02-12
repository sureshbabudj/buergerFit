"use client";

import { cn, generateSlug, getQuestionById } from "@/lib/utils";
import { BarChart3, BookOpen, Github, Home, PlayCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/mock-test")) {
    return null;
  }
  return (
    <>
      {/* Mobile App Navigation */}
      <div className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around border-t border-border bg-background/90 px-6 backdrop-blur-xl md:hidden">
        <Link
          href="/"
          className={cn("flex flex-col items-center gap-1", {
            "text-primary": pathname === "/",
          })}
        >
          <Home size={22} /> <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link
          href={`/learn/${generateSlug("0", getQuestionById("0").question.de)}`}
          className={cn("flex flex-col items-center gap-1", {
            "text-primary": pathname.startsWith("/learn"),
          })}
        >
          <BookOpen size={22} />
          <span className="text-[10px] font-bold">Learn</span>
        </Link>
        <Link
          href="/mock-test"
          className={cn("flex flex-col items-center gap-1", {
            "text-primary": pathname.startsWith("/mock"),
          })}
        >
          <PlayCircle size={22} />
          <span className="text-[10px] font-bold">Mock test</span>
        </Link>
        <Link
          href="/analytics"
          className={cn("flex flex-col items-center gap-1", {
            "text-primary": pathname.startsWith("/analytics"),
          })}
        >
          <BarChart3 size={22} />
          <span className="text-[10px] font-bold">Stats</span>
        </Link>
      </div>

      <footer className="hidden md:block border-t border-border py-8 text-center text-muted-foreground">
        <div className="flex flex-col md:flex-row container mx-auto justify-between">
          <div className="flex flex-col gap-2 n">
            <a
              href="https://github.com/sureshbabudj/buergerFit"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github size={20} /> <span>View on GitHub</span>
            </a>
            <p className="text-sm">
              &copy; 2026 BürgerFit • Made for the Expat Community
            </p>
          </div>
          <div>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
