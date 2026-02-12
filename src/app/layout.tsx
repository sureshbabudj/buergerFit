import { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { BarChart3, BookOpen, Github, Home, PlayCircle } from "lucide-react";

import "./globals.css";
import Link from "next/link";
import { generateSlug, getQuestionById } from "@/lib/utils";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://buergerfit.web.app"),
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
    url: "https://buergerfit.web.app",
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
    canonical: "https://buergerfit.web.app",
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

            <Footer />
          </div>

          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
