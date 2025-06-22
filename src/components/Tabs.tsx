import React, { useEffect } from "react";
import { useQuizStore } from "../lib/store";
import questionsTeil1 from "../assets/questions";
import {
  questionWithIds as questionsTeil2,
  regions,
} from "../assets/questions_teil_2";

import { Tabs as TabsUI, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { QuestionType, TeilType } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MapIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function SelectRegion({
  handleActiveRegion,
  reset,
}: {
  handleActiveRegion: (region?: string) => {
    filteredQuestions: QuestionType[];
    activeQuestion: QuestionType;
  };
  reset: () => void;
}) {
  const { chosenRegion, setChosenRegion, setQuestions, setActiveQuestion } =
    useQuizStore();

  const handleRegionSelection = (value: string) => {
    reset();
    setChosenRegion(value);
    const { filteredQuestions, activeQuestion } = handleActiveRegion(value);
    setQuestions(filteredQuestions);
    setActiveQuestion(activeQuestion);
  };

  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Choose Region</h4>
        {regions.map((region) => (
          <React.Fragment key={region}>
            <div
              className={cn("text-sm cursor-pointer", {
                "text-blue-600": chosenRegion === region,
              })}
              onClick={() => {
                handleRegionSelection(region);
              }}
            >
              {region}
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

export function Tabs({
  reset,
  showRegion = true,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  reset: () => void;
  showRegion?: boolean;
}) {
  const {
    currentTeil,
    chosenRegion,
    setChosenRegion,
    setQuestions,
    setActiveQuestion,
  } = useQuizStore();

  const teils = [
    { id: "teil_1", name: "1" },
    { id: "teil_2", name: "2" },
  ];

  const handleActiveRegion = (
    region = chosenRegion || regions[0]
  ): {
    filteredQuestions: QuestionType[];
    activeQuestion: QuestionType;
  } => {
    const regionIndex = regions.findIndex((r) => r === region);
    const startIndex = regionIndex * 10;
    const filteredQuestions = [...questionsTeil2].slice(
      startIndex,
      startIndex + 10
    );
    return {
      filteredQuestions,
      activeQuestion: filteredQuestions[0],
    };
  };

  const handleTeilSelection = (teil: TeilType) => {
    reset();
    if (teil === "teil_1") {
      useQuizStore.setState({
        questions: questionsTeil1,
        currentTeil: teil,
      });
    } else {
      const { filteredQuestions, activeQuestion } = handleActiveRegion();
      useQuizStore.setState({
        questions: filteredQuestions,
        currentTeil: teil,
        activeQuestionTeil2: activeQuestion,
      });
    }
  };

  const handleRegionSelection = (region: string) => {
    reset();
    setChosenRegion(region);
    const { filteredQuestions, activeQuestion } = handleActiveRegion(region);
    setQuestions(filteredQuestions);
    setActiveQuestion(activeQuestion);
  };

  useEffect(() => {
    handleTeilSelection(currentTeil);
  }, [currentTeil]);

  return (
    <div className={cn("flex lg:items-center gap-2", className)} {...props}>
      <span>Teil: </span>
      <TabsUI
        defaultValue={currentTeil}
        onValueChange={(value) => handleTeilSelection(value as TeilType)}
      >
        <TabsList>
          {teils.map((teil) => (
            <TabsTrigger value={teil.id} key={teil.id}>
              {teil.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </TabsUI>
      {currentTeil === "teil_2" && (
        <>
          {showRegion ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MapIcon />
                  <span className="sr-only">Choose Region</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {regions.map((region) => (
                  <DropdownMenuItem
                    key={region}
                    onClick={() => handleRegionSelection(region)}
                    className={cn(
                      "cursor-pointer",
                      chosenRegion === region ? "bg-blue-500 text-white" : ""
                    )}
                  >
                    {region}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <SelectRegion
              handleActiveRegion={handleActiveRegion}
              reset={reset}
            />
          )}
        </>
      )}
    </div>
  );
}
