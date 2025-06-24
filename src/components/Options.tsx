import { cn } from "@/lib/utils";
import { useQuizStore } from "../lib/store";
import type { OptionType, QuestionType } from "../types";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMemo } from "react";

export function Options({
  question,
  selectedOption,
  setSelectedOption,
  highlightAnswer,
}: {
  question: QuestionType;
  setSelectedOption: (o: OptionType) => void;
  highlightAnswer: boolean;
  selectedOption: OptionType | null;
}) {
  const { language } = useQuizStore();
  const { options: actualOptions, answer } = question;

  const options = useMemo(() => {
    return actualOptions.sort(() => Math.random() - 0.5);
  }, [actualOptions]);

  return (
    <div className="my-4">
      <RadioGroup
        value={selectedOption?.id ?? ""}
        onValueChange={(option) => {
          const selected = options.find((i) => option === i.id);
          if (selected) {
            setSelectedOption(selected);
          }
        }}
      >
        {options.map((option) => (
          <div
            key={option.id}
            className={cn(
              "flex items-center gap-2 hover:cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md p-3",
              {
                "!bg-green-500 !text-white":
                  highlightAnswer && answer === option.de,
                "!bg-red-500 t!ext-white":
                  highlightAnswer &&
                  selectedOption?.id === option.id &&
                  answer !== option.de,
              }
            )}
          >
            <RadioGroupItem
              value={option.id}
              id={option.id}
              disabled={highlightAnswer}
            />
            <Label htmlFor={option.id} className="block w-full">
              {option[language]}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
