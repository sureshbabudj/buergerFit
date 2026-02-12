"use client";

import { useState } from "react";
import {
  BarChart3,
  Globe,
  ChevronDown,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { generateSlug, getQuestionById } from "@/lib/utils";
import { MainHeader } from "@/components/main-header";

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Is this app free?",
      a: "Yes, BürgerFit is 100% free and open-source, designed to help the expat community in Germany.",
    },
    {
      q: "How accurate are the questions?",
      a: "The questions are based on the official catalog from the Federal Office for Migration and Refugees (BAMF).",
    },
    {
      q: "Does it work offline?",
      a: "Yes! Since it's a Progressive Web App (PWA), you can install it on your phone and use it even without an internet connection.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainHeader />

      {/* Hero Section */}
      <header className="mx-auto max-w-7xl px-6 py-16 md:py-28 text-center md:text-left md:flex items-center gap-12">
        <div className="md:w-3/5">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            OFFICIAL CATALOG
          </div>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Master the <br />
            <span className="text-primary">Einbürgerungstest</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg text-muted-foreground md:text-xl">
            The smartest way to prepare for German citizenship. Interactive
            quizzes in German & English with real-time analytics.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
            <Link
              href={`/learn/${generateSlug("0", getQuestionById("0").question.de)}`}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-black text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              Learn Now <ArrowRight size={20} />
            </Link>
            <Link
              href="/mock-test"
              className="rounded-2xl border border-border bg-card px-8 py-4 text-lg font-bold hover:bg-secondary transition-colors"
            >
              Take Mock Test
            </Link>
          </div>
        </div>

        {/* Stats Card Visual */}
        <div className="mt-16 md:mt-0 md:w-2/5 grid grid-cols-2 gap-4">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-4xl font-black text-primary">310</p>
            <p className="text-sm font-bold text-muted-foreground uppercase">
              Questions
            </p>
          </div>
          <div className="translate-y-6 rounded-3xl bg-foreground p-8 shadow-xl">
            <p className="text-4xl font-black text-background">16</p>
            <p className="text-sm font-bold text-muted-foreground uppercase">
              States
            </p>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="bg-card border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-3xl font-black tracking-tight">
            Everything you need to pass
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <ShieldCheck />,
                title: "Bilingual Support",
                desc: "Study in German or English. Toggle languages instantly for better understanding.",
              },
              {
                icon: <BarChart3 />,
                title: "Detailed Analytics",
                desc: "Identify your weak points and monitor your progress over time.",
              },
              {
                icon: <Globe />,
                title: "State Specific",
                desc: "Includes all regional questions for your specific German Bundesland.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-3xl border border-border bg-background p-8 hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-black">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-bold"
              >
                {item.q}{" "}
                <ChevronDown
                  className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="p-5 pt-0 text-muted-foreground border-t border-border mt-2 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
