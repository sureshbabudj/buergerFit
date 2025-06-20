import { useState } from "react";
import { ModeToggle } from "./components/ModeToggle";
import { Options } from "./components/Options";
import { Question } from "./components/Question";
import { Tabs } from "./components/Tabs";
import { useQuizStore } from "./lib/store";
import type { AttemptedQuestion, OptionType } from "./types";
import { Button } from "./components/ui/button";
import { LanguageSelector } from "./components/LanguageSelector";
import { Tools } from "./components/Tools";
import { Nav } from "./components/Nav";
import { toast } from "sonner";
import { MobileDrawer } from "./components/MobileDrawer";
import { Logo } from "./components/Logo";

export default function App() {
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

  const checkAnswer = () => {
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
      <section className="hidden h-screen w-full flex-col items-center justify-center bg-[#d6ebe9] p-9 lg:flex dark:bg-zinc-900">
        {activeQuestion && <Question question={activeQuestion} />}
      </section>
      <section className="bale flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <div className="flex w-full items-center justify-between">
          <a
            className="flex items-center text-2xl font-bold dark:text-white"
            href="/"
          >
            <Logo className="mr-2 h-8 w-8" />
            BürgerFit{" "}
            <span className="name group ml-2 rounded-3xl bg-[#fafafa] px-3 text-sm font-bold text-black hidden lg:inline-block">
              <span className="">v0.1</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Tabs reset={reset} />
            </div>
            <LanguageSelector />
            <ModeToggle />
            <div className="block lg:hidden">
              <MobileDrawer reset={reset} />
            </div>
          </div>
        </div>

        <div>
          <div className="lg:hidden">
            {activeQuestion && <Question question={activeQuestion} />}
          </div>
          {activeQuestion && (
            <Options
              question={activeQuestion}
              setSelectedOption={setSelectedOption}
              highlightAnswer={highlightAnswer}
              selectedOption={selectedOption}
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full max-w-md mx-auto">
            <Button className="w-full" onClick={checkAnswer}>
              Submit
            </Button>
          </div>
          <Tools />
          <Nav reset={reset} />
        </div>
      </section>
    </main>
  );
}
