"use client";

import React, { useState } from "react";
import {
  BookOpen,
  BarChart3,
  Globe,
  Github,
  ChevronDown,
  Home,
  PlayCircle,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function BurgerFitLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: "Comprehensive Content",
      desc: "All official topics including constitutional rights and democratic principles.",
      icon: <ShieldCheck className="text-amber-500" size={28} />,
    },
    {
      title: "Progress Tracking",
      desc: "Detailed analytics to identify weak areas and track improvement over time.",
      icon: <BarChart3 className="text-amber-500" size={28} />,
    },
    {
      title: "Bilingual Support",
      desc: "Study in German or English. Toggle languages instantly on any question.",
      icon: <Globe className="text-amber-500" size={28} />,
    },
  ];

  const faqs = [
    {
      q: "Is this the official question catalog?",
      a: "Yes, we use the 300 general questions and all 10 state-specific questions approved by the BAMF.",
    },
    {
      q: "Can I use it offline?",
      a: "The web app is optimized for performance, and once loaded, it works seamlessly on most modern browsers.",
    },
    {
      q: "Is my progress saved?",
      a: "Yes, your progress is saved locally to your device so you can pick up where you left off.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20 md:pb-0 font-sans">
      {/* --- DESKTOP NAVIGATION --- */}
      <nav className="hidden md:flex items-center justify-between px-10 py-6 max-w-7xl mx-auto sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-2 rounded-xl shadow-lg shadow-amber-200">
            <BookOpen className="text-white" size={20} />
          </div>
          <span className="text-xl font-black tracking-tight uppercase">
            BürgerFit
          </span>
        </div>
        <div className="flex gap-8 font-semibold text-slate-500">
          <a href="#features" className="hover:text-amber-600 transition">
            Features
          </a>
          <a href="#faq" className="hover:text-amber-600 transition">
            FAQ
          </a>
          <a
            href="https://github.com"
            className="flex items-center gap-1 hover:text-slate-900"
          >
            <Github size={18} /> Code
          </a>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-slate-200">
          Start Quiz
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-12 md:pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="text-center md:text-left md:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              OFFICIAL 2026 QUESTION CATALOG
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-slate-900">
              German Citizenship <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Made Simple.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Master civics, history, and regional knowledge with interactive
              quizzes. Study smarter in German or English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-amber-300 transition-all flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="bg-white border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Mock Test
              </button>
            </div>
          </div>

          {/* Visual Badge/Stats */}
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50 flex flex-col items-center">
                <span className="text-4xl font-black text-slate-900">300+</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-tighter">
                  Questions
                </span>
              </div>
              <div className="bg-slate-900 p-6 rounded-[2rem] shadow-xl text-white flex flex-col items-center translate-y-8">
                <span className="text-4xl font-black text-amber-400">16</span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-tighter">
                  States
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16">
            Why Study with BürgerFit?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 hover:border-amber-200 transition-colors group"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-5 text-left flex justify-between items-center font-bold hover:bg-slate-50 transition"
              >
                {faq.q}
                <ChevronDown
                  className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="text-amber-400" size={24} />
              <span className="text-xl font-black tracking-tight">
                BürgerFit
              </span>
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left">
              Open source project to help the <br /> expat community in Germany.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition"
            >
              <Github />
            </a>
          </div>
        </div>
      </footer>

      {/* --- MOBILE APP BAR (STUCK TO BOTTOM ON MOBILE) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 px-8 py-4 flex justify-between items-center z-[100]">
        <button className="flex flex-col items-center gap-1 text-amber-600">
          <Home size={20} />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <PlayCircle size={20} />
          <span className="text-[10px] font-bold">Quiz</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <BarChart3 size={20} />
          <span className="text-[10px] font-bold">Stats</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <HelpCircle size={20} />
          <span className="text-[10px] font-bold">FAQ</span>
        </button>
      </div>
    </div>
  );
}
