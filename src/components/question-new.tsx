"use client";

import { cn } from "@/lib/utils";
import { OptionType, QuestionType } from "@/types";
import Image from "next/image";
import { useState } from "react";

export function Question({ question }: { question: QuestionType }) {
  const [attempted, setAttempted] = useState<OptionType | null>(null);

  const attemptAnswer = (option: OptionType) => {
    if (attempted) return; // Prevent multiple attempts
    setAttempted(option);
  };

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-black leading-tight md:text-3xl">
          {question.question.de}
        </h1>
        <p className="border-l-4 border-primary/20 pl-4 text-lg text-muted-foreground italic">
          {question.question.en}
        </p>
      </div>

      {question.question.image && (
        <div className="flex justify-center">
          <Image
            src={`/images/${question.question.image}`}
            alt={question.question.en}
            width={500}
            height={300}
            className="lg:max-h-72 w-auto h-auto p-3 rounded-md object-contain bg-zinc-100 dark:bg-zinc-800"
          />
        </div>
      )}

      {/* Options Grid */}
      <div className="grid gap-3">
        {question.options.map((opt) => (
          <button
            disabled={!!attempted}
            onClick={() => attemptAnswer(opt)}
            key={opt.id}
            className={cn(
              "flex flex-col rounded-2xl border-2 border-border bg-card p-5 text-left transition-all",
              {
                "hover:border-primary hover:bg-secondary/50 active:scale-[0.97]":
                  !attempted,
                "border-green-500 bg-green-500 text-white hover:border-green-500 hover:bg-green-500":
                  attempted?.id === opt.id && question.answer === opt.de,
                "border-red-500 bg-red-500 text-white hover:border-red-500 hover:bg-red-500":
                  attempted?.id === opt.id && question.answer !== opt.de,
                "border-green-500 bg-green-400 hover:border-green-500":
                  attempted &&
                  question.answer === opt.de &&
                  attempted.id !== opt.id,
              },
            )}
          >
            <span className="text-base font-bold">{opt.de}</span>
            <span className="text-sm text-muted-foreground">{opt.en}</span>
          </button>
        ))}
      </div>
    </article>
  );
}
