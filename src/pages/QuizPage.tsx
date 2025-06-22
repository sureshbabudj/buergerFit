import { useState } from "react";
import { Options } from "../components/Options";
import { Question } from "../components/Question";
import { useQuizStore } from "../lib/store";
import type { AttemptedQuestion, OptionType } from "../types";
import { Tools } from "../components/Tools";
import { Nav } from "../components/Nav";
import { toast } from "sonner";
import { Header } from "@/components/Header";

export function QuizPage() {
  const {
    setAttemptedQuestions,
    attemptedQuestions,
    setLanguage,
    getActiveQuestion,
    currentTeil,
    chosenRegion,
  } = useQuizStore();

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [highlightAnswer, setHighlightAnswer] = useState(false);

  const activeQuestion = getActiveQuestion();

  const submitAnswer = (option: OptionType) => {
    setSelectedOption(option);
    checkAnswer(option);
  };

  const checkAnswer = (selectedOption: OptionType) => {
    if (highlightAnswer) {
      toast.info("You have already checked the answer");
    }
    if (selectedOption && activeQuestion) {
      const isCorrect = selectedOption.de === activeQuestion.answer;

      const lastAttemptedAt = new Date().toISOString();
      let attemptedQuestion: AttemptedQuestion;
      const selectedOptionIndex = activeQuestion.options.findIndex(
        (option) => option.de === selectedOption.de
      );

      if (attemptedQuestions[activeQuestion.id]) {
        attemptedQuestion = {
          ...attemptedQuestions[activeQuestion.id],
          selectedOption: selectedOptionIndex,
          results: [
            ...attemptedQuestions[activeQuestion.id].results,
            isCorrect,
          ],
          timeTaken: attemptedQuestions[activeQuestion.id].timeTaken + 1,
          lastAttemptedAt,
          teil: currentTeil,
          region: currentTeil === "teil_2" ? chosenRegion : "",
        };
      } else {
        attemptedQuestion = {
          questionIndex: activeQuestion.id,
          selectedOption: selectedOptionIndex,
          results: [isCorrect],
          timeTaken: 1,
          lastAttemptedAt,
          teil: currentTeil,
          region: currentTeil === "teil_2" ? chosenRegion : "",
        };
      }

      setAttemptedQuestions(attemptedQuestion);
      setHighlightAnswer(true);
    }
  };

  const reset = () => {
    setSelectedOption(null);
    setHighlightAnswer(false);
    setLanguage("de");
  };

  return (
    <main className="flex flex-col lg:flex-row">
      <section className="hidden h-screen w-5/12 flex-col items-center justify-center bg-[#d6ebe9] p-9 lg:flex dark:bg-zinc-900">
        {activeQuestion && <Question question={activeQuestion} />}
      </section>
      <section className="bale flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Header reset={reset} />

        <div>
          <div className="lg:hidden">
            {activeQuestion && <Question question={activeQuestion} />}
          </div>
          {activeQuestion && (
            <Options
              question={activeQuestion}
              setSelectedOption={submitAnswer}
              highlightAnswer={highlightAnswer}
              selectedOption={selectedOption}
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Tools />
          <Nav reset={reset} />
        </div>
      </section>
    </main>
  );
}
