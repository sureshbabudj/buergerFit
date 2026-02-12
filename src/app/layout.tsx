import { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { BarChart3, BookOpen, Github, Home, PlayCircle } from "lucide-react";

import "./globals.css";
import Link from "next/link";
import { generateSlug, getQuestionById } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://buergerfit.kanini.top"),
  title: "BürgerFit – German Naturalization Test Prep",
  description:
    "Prepare for the German Einbürgerungstest with BürgerFit – an interactive quiz app covering civics, history, and regional knowledge. Track your progress and study smarter.",
  keywords: [
    "Einbürgerungstest",
    "German citizenship test",
    "BürgerFit",
    "German civics quiz",
    "naturalization Germany",
    "quiz app",
    "German history",
    "regional questions",
  ],
  authors: [{ name: "BürgerFit Team" }],
  openGraph: {
    title: "BürgerFit – German Naturalization Test Prep",
    description:
      "Interactive quiz app to help you pass the German Einbürgerungstest. Practice civics, history, and regional questions with real-time feedback.",
    url: "https://buergerfit.kanini.top",
    siteName: "BürgerFit",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "BürgerFit – German Naturalization Test Prep",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BürgerFit – German Naturalization Test Prep",
    description:
      "Master the German Einbürgerungstest with BürgerFit. Track your progress and learn with interactive quizzes.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+CiAgPHBhdGggZD0iTSAyNS4xODggMC4xNjYgQyAxMS42MzIgMC4xNjYgMC42MyAxMS4xNjcgMC42MyAyNC43MjMgQyAwLjYzIDM4LjI3OSAxMS42MzIgNDkuMjgxIDI1LjE4OCA0OS4yODEgQyAzOC43NDMgNDkuMjgxIDQ5Ljc0NSAzOC4yNzkgNDkuNzQ1IDI0LjcyMyBDIDQ5Ljc0NSAxMS4xNjcgMzguNzQzIDAuMTY2IDI1LjE4OCAwLjE2NiBaIE0gMzkuOTIyIDMyLjA5IEwgMjcuNjQzIDMyLjA5IEwgMjUuMTg4IDI3LjE3OSBMIDE5LjA0OCAyNy4xNzkgTCAxOS4wNDggMzkuNDU4IEwgMTUuMzY1IDM5LjQ1OCBMIDE1LjM2NSAxMi40NDQgTCAzMC4wOTkgMTIuNDQ0IEwgMzIuNTU1IDE3LjM1NiBMIDM5LjkyMiAxNy4zNTYgTCAzOS45MjIgMzIuMDkgWiI+PC9wYXRoPgo8L3N2Zz4=",
    apple: "/assets/icon-192.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://buergerfit.kanini.top",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BürgerFit",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300 pb-20 md:pb-0">
            {children}

            {/* Mobile App Navigation */}
            <div className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around border-t border-border bg-background/90 px-6 backdrop-blur-xl md:hidden">
              <Link
                href="/"
                className="flex flex-col items-center gap-1 text-primary"
              >
                <Home size={22} />
                <span className="text-[10px] font-bold">Home</span>
              </Link>

              <Link
                href={`/learn/${generateSlug("0", getQuestionById("0").question.de)}`}
                className="flex flex-col items-center gap-1 text-muted-foreground"
              >
                <BookOpen size={22} />
                <span className="text-[10px] font-bold">Learn</span>
              </Link>

              <Link
                href="/mock-test"
                className="flex flex-col items-center gap-1 text-muted-foreground"
              >
                <PlayCircle size={22} />
                <span className="text-[10px] font-bold">Quiz</span>
              </Link>

              <Link
                href="/analytics"
                className="flex flex-col items-center gap-1 text-muted-foreground"
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
          </div>

          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
