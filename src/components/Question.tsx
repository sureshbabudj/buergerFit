import { useQuizStore } from "../lib/store";
import type { QuestionType } from "../types";

export function Question({ question }: { question: QuestionType }) {
  const { language } = useQuizStore();
  const q = question.question;
  const qNumber = parseInt(question.id) + 1;
  return (
    <div className="mx-auto flex flex-col justify-between gap-1 md:gap-2 lg:gap-4">
      <span className="font-bold text-black dark:text-white sm:text-[22px] md:text-[32px] lg:text-[64px] lg:leading-none lg:-mb-6">
        <i className="lg:leading-none text-xs sm:text-[11px] md:text-[16px] lg:text-[32px]">
          #
        </i>
        {qNumber}
      </span>
      <p className="font-semibold text-md md:text-xl lg:text-2xl">
        {q[language]}
      </p>
      {q.image && (
        <div className="p-3 rounded-md object-cover bg-zinc-100 dark:bg-zinc-800">
          <img src={`images/${q.image}`} alt={q[language]} />
        </div>
      )}
    </div>
  );
}
