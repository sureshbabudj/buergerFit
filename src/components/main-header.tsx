"use client";

import { Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "@/components/theme-provider";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn, generateSlug, getQuestionById } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md ${className}`}
      {...props}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2 font-black tracking-tighter text-xl">
          <Link href="/" className="rounded-lg p-1.5">
            <Logo className="w-6 h-6" />
          </Link>
          <Link href="/">BürgerFit</Link>
          <span className="name group ml-2 rounded-3xl bg-[#fafafa] px-3 text-sm font-bold text-black hidden lg:inline-block">
            <span className="">v0.1</span>
          </span>
        </div>

        <div
          className={cn("flex items-center gap-4", {
            hidden: pathname.startsWith("/mock-test"),
          })}
        >
          <nav className="hidden md:flex gap-4 text-sm font-medium text-muted-foreground items-center">
            <Link href="/analytics" className="hover:text-primary">
              My Stats
            </Link>
            <Link href="/#faq" className="hover:text-primary">
              FAQ
            </Link>
            <Link href="/#features" className="hover:text-primary">
              Features
            </Link>
            <Link
              href={`/learn/${generateSlug("0", getQuestionById("0").question.de)}`}
              className="hidden md:block px-5 py-2 text-sm font-bold text-primary hover:bg-foreground hover:text-background rounded-full transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/mock-test"
              className="hidden md:block rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:opacity-90"
            >
              Mock test
            </Link>
          </nav>

          <button
            onClick={toggleTheme}
            className="rounded-md p-2 hover:bg-secondary border border-border"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )
            ) : (
              <div className="h-4.5 w-4.5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
