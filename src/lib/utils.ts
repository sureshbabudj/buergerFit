import type { QuestionType } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQuestionIndex(
  questionId: string,
  questions: QuestionType[]
) {
  return questions.findIndex((question) => question.id === questionId);
}
