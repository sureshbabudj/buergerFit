import questions from "@/assets/questions";
import {
  questionWithIds as questionsTeil2,
  regions,
} from "@/assets/questions_teil_2";
import { encodeRegion, generateSlug } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapIcon, Share2 } from "lucide-react";
import { Metadata } from "next";
import { Question } from "@/components/question-new";
import { MainHeader } from "@/components/main-header";

interface Props {
  params: { params: string[] }; // Catch-all params are always an array
}

/**
 * Helper to identify the context (Common vs Regional)
 */
function getQuestionContext(params: string[]) {
  // Scenario 1: /learn/[region]/[slug]
  if (params.length === 2) {
    const [regionSlug, questionSlug] = params;
    const regionName = regions.find(
      (r) => encodeRegion(r).toLowerCase() === regionSlug.toLowerCase(),
    );

    if (!regionName) return null;

    const regionIndex = regions.indexOf(regionName);
    const startIndex = regionIndex * 10;
    const regionalQuestions = questionsTeil2.slice(startIndex, startIndex + 10);

    const currentIndex = regionalQuestions.findIndex(
      (q) => generateSlug(q.id, q.question.de) === questionSlug,
    );

    if (currentIndex === -1) return null;

    return {
      question: regionalQuestions[currentIndex],
      currentIndex,
      total: regionalQuestions.length,
      prev: regionalQuestions[currentIndex - 1],
      next: regionalQuestions[currentIndex + 1],
      basePath: `/learn/${regionSlug}`,
    };
  }

  // Scenario 2: /learn/[slug]
  if (params.length === 1) {
    const [questionSlug] = params;
    const currentIndex = questions.findIndex(
      (q) => generateSlug(q.id, q.question.de) === questionSlug,
    );

    if (currentIndex === -1) return null;

    return {
      question: questions[currentIndex],
      currentIndex,
      total: questions.length,
      prev: questions[currentIndex - 1],
      next: questions[currentIndex + 1],
      basePath: "/learn",
    };
  }

  return null;
}

export async function generateStaticParams() {
  const paths: { params: string[] }[] = [];

  // 1. Common Questions
  questions.forEach((q) => {
    paths.push({
      params: [generateSlug(q.id, q.question.de)],
    });
  });

  // 2. Regional Questions
  regions.forEach((region, regionIndex) => {
    // IMPORTANT: Sanitize the region name to handle 'ü', 'ö', 'ä', 'ß'
    const regionSlug = encodeRegion(region); // Use the same encoding logic as in getQuestionContext

    const startIndex = regionIndex * 10;
    const regionalQuestions = questionsTeil2.slice(startIndex, startIndex + 10);

    regionalQuestions.forEach((q) => {
      paths.push({
        params: [regionSlug, generateSlug(q.id, q.question.de)],
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { params: routeParams } = await params;
  const context = getQuestionContext(routeParams);

  if (!context) return { title: "Not Found" };

  return {
    title: `Question ${context.currentIndex + 1}: ${context.question.question.de.substring(0, 50)}...`,
    description: context.question.question.de,
  };
}

export default async function QuestionPage({ params }: Props) {
  const { params: routeParams } = await params;
  const context = getQuestionContext(routeParams);

  if (!context) notFound();

  const { question, currentIndex, total, prev, next, basePath } = context;

  return (
    <>
      <MainHeader className="hidden md:block" />
      <div className="flex flex-col h-[calc(100dvh-5rem)] md:h-auto">
        {/* App-Style Header */}
        <header className="flex h-16 shrink-0 items-center justify-center border-b border-border bg-background/80 px-4 backdrop-blur-md">
          {prev ? (
            <Link
              href={`${basePath}/${generateSlug(prev.id, prev.question.de)}`}
              className="flex flex-row md:hidden p-2 items-center justify-center rounded-2xl border-2 border-border bg-card font-bold transition-transform active:scale-95"
            >
              <ChevronLeft size={20} />{" "}
              <span className="hidden md:block">Previous</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          <div className="flex flex-col items-center grow w-full">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              {routeParams.length > 1
                ? routeParams[0].toUpperCase()
                : "General Quiz"}
            </span>
            <span className="text-sm font-bold">
              {currentIndex + 1} / {total}
            </span>
          </div>
          {next ? (
            <Link
              href={`${basePath}/${generateSlug(next.id, next.question.de)}`}
              className="p-2 flex flex-row md:hidden items-center justify-center rounded-2xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
            >
              <span className="hidden md:block">Next</span>{" "}
              <ChevronRight size={20} />
            </Link>
          ) : (
            <>
              {routeParams.length === 1 ? (
                <Link
                  href="/select-region?mode=study"
                  className="p-2 flex flex-row md:hidden items-center justify-center rounded-2xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
                >
                  <span className="hidden md:block">Next</span>{" "}
                  <MapIcon size={20} />
                </Link>
              ) : (
                <Link
                  href="/analytics"
                  className="p-2 flex flex-row md:hidden items-center justify-center rounded-2xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
                >
                  <span className="hidden md:block">Next</span>{" "}
                  <ChevronRight size={20} />
                </Link>
              )}
            </>
          )}
        </header>

        {/* Progress Bar Container */}
        <div className="shrink-0 bg-background/80 md:py-2 backdrop-blur-md">
          <div className="mx-auto h-1.5 w-full max-w-2xl rounded-full bg-secondary overflow-hidden px-4 md:px-0">
            <div
              className="h-full bg-primary transition-all duration-700 ease-in-out"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <main className="flex-1 overflow-y-auto min-h-0 mx-auto w-full max-w-2xl px-6 pt-6 pb-6 md:py-10">
          <Question question={question} />
        </main>

        {/* Persistent Navigation Footer */}
        <footer className="hidden md:block shrink-0 border-t border-border bg-background p-4 md:bg-transparent md:border-none">
          <div className="mx-auto flex max-w-xl gap-4">
            {prev ? (
              <Link
                href={`${basePath}/${generateSlug(prev.id, prev.question.de)}`}
                className="flex flex-1 p-2 items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card font-bold transition-transform active:scale-95"
              >
                <ChevronLeft size={20} /> Previous
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`${basePath}/${generateSlug(next.id, next.question.de)}`}
                className="flex flex-1 p-2 items-center justify-center gap-2 rounded-2xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
              >
                Next <ChevronRight size={20} />
              </Link>
            ) : (
              <>
                {routeParams.length === 1 ? (
                  <Link
                    href="/select-region?mode=study"
                    className="flex flex-1 items-center justify-center rounded-2xl bg-foreground py-3 font-black text-background"
                  >
                    Learn Regional Questions
                  </Link>
                ) : (
                  <Link
                    href="/analytics"
                    className="flex flex-1 items-center justify-center rounded-2xl bg-foreground py-3 font-black text-background"
                  >
                    Finish Quiz
                  </Link>
                )}
              </>
            )}
          </div>
        </footer>
      </div>
    </>
  );
}
