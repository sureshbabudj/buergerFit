import questionsTeil1 from "@/assets/questions";
import {
  questionWithIds as questionsTeil2,
  regions,
} from "@/assets/questions_teil_2";
import type { QuestionType } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQuestionIndex(
  questionId: string,
  questions: QuestionType[],
) {
  return questions.findIndex((question) => question.id === questionId);
}

export function getQuestionById(questionId: string, teil = 1): QuestionType {
  const questions: QuestionType[] =
    teil === 1 ? questionsTeil1 : questionsTeil2;
  return questions.find((q) => q.id === questionId) || questions[0];
}

export function encodeRegion(region: string): string {
  return region
    .toLowerCase()
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/\s+/g, "-");
}

export function generateSlug(id: string, text: string): string {
  return `${id} ${text}`
    .toLowerCase()
    .replace(/[ä]/g, "ae") // Handle German Umlaute
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^\w\s-]/g, "") // Remove punctuation
    .split(/\s+/) // Split by whitespace
    .slice(0, 6) // Take first 6 words
    .join("-") // Join with hyphen
    .replace(/-+$/, ""); // Remove trailing hyphen
}

export function getFirstQuestionForRegion(regionSlug: string) {
  // 1. Find the index of the region by comparing sanitized slugs
  const regionIndex = regions.findIndex((r) => {
    const sanitized = encodeRegion(r);
    return sanitized === regionSlug;
  });

  if (regionIndex === -1) return null;

  // 2. Calculate the starting index (every region has 10 questions)
  const startIndex = regionIndex * 10;
  const firstQuestion = questionsTeil2[startIndex];

  if (!firstQuestion) return null;

  // 3. Generate the URL path
  const questionSlug = generateSlug(
    firstQuestion.id,
    firstQuestion.question.de,
  );
  const regionUrl = encodeRegion(regionSlug);

  return {
    question: firstQuestion,
    fullPath: `/learn/${regionUrl}/${questionSlug}`,
    regionName: regions[regionIndex],
  };
}
