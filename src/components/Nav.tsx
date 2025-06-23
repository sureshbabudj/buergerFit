import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuizStore } from "../lib/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getQuestionIndex } from "@/lib/utils";

export function Nav({ reset }: { reset: () => void }) {
  const { questions, getActiveQuestion, setActiveQuestion } = useQuizStore();
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);

  const activeQuestion = getActiveQuestion();

  const handleQuestionSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value || questionIndex === null) {
      return;
    }
    const value = parseInt(e.target.value) - 1;
    if (value < 0 || value >= questions.length) {
      return;
    }
    reset();
    setActiveQuestion(questions[value]);
    setQuestionIndex(value);
  };

  const changeQuestionIndex = (isPrev = false) => {
    if (questionIndex === null) {
      return;
    }
    reset();
    if (isPrev) {
      setActiveQuestion(questions[questionIndex - 1]);
      setQuestionIndex(questionIndex - 1);
    } else {
      setActiveQuestion(questions[questionIndex + 1]);
      setQuestionIndex(questionIndex + 1);
    }
  };

  useEffect(() => {
    if (!activeQuestion) {
      if (questions.length > 0) {
        setActiveQuestion(questions[0]);
      } else {
        toast.error("Questions has not been loaded!");
      }
    } else {
      setQuestionIndex(getQuestionIndex(activeQuestion.id, questions));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeQuestion, questions.length]);

  if (questionIndex === null) {
    return null;
  }

  return (
    <nav className="flex w-full items-center justify-between">
      <Button
        onClick={() => changeQuestionIndex(true)}
        disabled={questionIndex === 0}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden lg:block">Back</span>
      </Button>

      <div className="py-2 text-xs font-bold group-hover:bg-[#e1ffe1c5]">
        <p className="text-xs">
          <span className="inline-block dark:text-white">
            <Input
              className="text-sm"
              type="number"
              min={1}
              max={questions.length}
              value={questionIndex + 1}
              onChange={handleQuestionSelection}
            />{" "}
          </span>
          <span className="inline-block px-3 opacity-50">/</span>
          <span className="inline-block opacity-50 dark:text-white">
            {questions.length}
          </span>
        </p>
      </div>

      <Button
        onClick={() => changeQuestionIndex()}
        disabled={questionIndex === questions.length - 1}
      >
        <span className="hidden lg:block">Next</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </nav>
  );
}
