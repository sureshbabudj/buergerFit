import questions from "@/assets/questions";
import { generateSlug } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Metadata } from "next";
import { Question } from "@/components/question-new";
import { MainHeader } from "@/components/main-header";

interface Props {
  params: { slug: string };
}

// SSG: Pre-render all 300+ pages
export async function generateStaticParams() {
  return questions.map((q) => ({
    slug: generateSlug(q.id, q.question.de),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const question = questions.find(
    (q) => generateSlug(q.id, q.question.de) === decodedSlug,
  );

  if (!question) return { title: "Not Found" };

  return {
    title: `Question: ${question.question.de}`,
    description: question.question.de,
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Find question by comparing generated slugs
  const currentIndex = questions.findIndex(
    (q) => generateSlug(q.id, q.question.de) === decodedSlug,
  );

  const question = questions[currentIndex];

  if (!question) notFound();

  const prevQuestion = questions[currentIndex - 1];
  const nextQuestion = questions[currentIndex + 1];

  return (
    <div className="min-h-full pb-20">
      {/* Main header */}
      <MainHeader className="hidden md:block" />

      {/* App Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md">
        <Link href="/" className="rounded-full p-2 hover:bg-secondary">
          <ChevronLeft size={24} />
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            Progress
          </span>
          <span className="text-sm font-bold">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
        <button className="rounded-full p-2 hover:bg-secondary">
          <Share2 size={20} />
        </button>
      </header>

      {/* Progress Bar */}
      <div className="mb-2 md:mt-4 md:mb-4 h-1 md:h-2 w-full max-w-2xl mx-auto rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <main className="mx-auto max-w-2xl py-4 px-6 md:py-8">
        <Question question={question} />
      </main>

      {/* Mobile Bottom Navigation */}
      <footer className="fixed bottom-20 md:bottom-0 left-0 w-full border-t border-border bg-background p-4 md:relative md:bg-transparent md:border-none">
        <div className="mx-auto flex max-w-xl gap-2">
          {prevQuestion ? (
            <Link
              href={`/learn/${generateSlug(prevQuestion.id, prevQuestion.question.de)}`}
              className="flex flex-1 p-2 items-center justify-center gap-2 rounded-2xl border-2 border-border bg-card font-bold transition-transform active:scale-95"
            >
              <ChevronLeft size={20} /> Previous
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextQuestion ? (
            <Link
              href={`/learn/${generateSlug(nextQuestion.id, nextQuestion.question.de)}`}
              className="flex flex-1 p-2 items-center justify-center gap-2 rounded-2xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
            >
              Next <ChevronRight size={20} />
            </Link>
          ) : (
            <button className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-foreground font-black text-background">
              Finish
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
