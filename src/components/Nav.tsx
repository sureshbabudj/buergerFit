"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuizStore } from "@/lib/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { getQuestionIndex } from "@/lib/utils";

interface NavProps {
  reset: () => void;
  className?: string;
}

export function Nav({ reset, className }: NavProps) {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);
  const { questions, getActiveQuestion, setActiveQuestion } = useQuizStore();

  const activeQuestion = getActiveQuestion();

  // Sync store with URL id
  useEffect(() => {
    if (!questions.length) {
      toast.error("Questions have not been loaded!");
      return;
    }

    const index = id - 1;

    if (index < 0 || index >= questions.length) {
      toast.error("Invalid question id");
      return;
    }

    setActiveQuestion(questions[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, questions.length, setActiveQuestion]);

  if (!activeQuestion) return null;

  const index = getQuestionIndex(activeQuestion.id, questions);
  const total = questions.length;

  // Handle manual input navigation
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!value || value < 1 || value > total) return;

    reset();
    router.push(`/quiz/${value}`);
  };

  return (
    <nav className={`flex w-full items-center justify-between ${className}`}>
      {/* PREV BUTTON */}
      <Button asChild disabled={index === 1}>
        <Link href={`/quiz/${index}`} onClick={reset}>
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden lg:block">Back</span>
        </Link>
      </Button>

      {/* INPUT + COUNTER */}
      <div className="py-2 text-xs font-bold group-hover:bg-[#e1ffe1c5]">
        <p className="text-xs">
          <span className="inline-block dark:text-white">
            <Input
              className="text-sm"
              type="number"
              min={1}
              max={total}
              value={id}
              onChange={handleInput}
            />{" "}
          </span>
          <span className="inline-block px-3 opacity-50">/</span>
          <span className="inline-block opacity-50 dark:text-white">
            {total}
          </span>
        </p>
      </div>

      {/* NEXT BUTTON */}
      <Button asChild disabled={index === total - 1}>
        <Link href={`/quiz/${index + 2}`} onClick={reset}>
          <span className="hidden lg:block">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </Button>
    </nav>
  );
}
