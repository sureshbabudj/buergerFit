import { useQuizStore } from "../lib/store";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "./ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";
import { BarChart3 } from "lucide-react";
import { ProgressAnalytics } from "./ProgressAnalytics";

export function Tools() {
  const {
    attemptedQuestions,
    questions,
    getActiveQuestion,
    currentTeil,
    chosenRegion,
    showAnalytics,
    setShowAnalytics,
  } = useQuizStore();

  const attemptedQuestionsTeil = Object.values(attemptedQuestions).filter(
    (i) =>
      i.teil === currentTeil &&
      (currentTeil === "teil_2" ? i.region === chosenRegion : true)
  );
  const progress = (attemptedQuestionsTeil.length / questions.length) * 100;
  const activeQuestion = getActiveQuestion();

  if (showAnalytics) {
    return (
      <div className="space-y-4 my-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Progress Analytics</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAnalytics(false)}
          >
            Back to Quiz
          </Button>
        </div>
        <ProgressAnalytics />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-between my-2 text-xs md:text-sm lg:text-md">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-xs self-start">Progress</span>
            <span className="text-xs self-end">{progress.toFixed(2)}%</span>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
        </div>
        {activeQuestion &&
          attemptedQuestions[activeQuestion.id]?.lastAttemptedAt && (
            <div className="flex gap-2">
              <div>
                <p>
                  Last attempeted at{" "}
                  {formatDistanceToNow(
                    attemptedQuestions[activeQuestion.id].lastAttemptedAt,
                    { addSuffix: true }
                  )}
                </p>
                <div>
                  Attempted Times:{" "}
                  <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                    {attemptedQuestions[activeQuestion.id].timeTaken}
                  </Badge>
                </div>
              </div>
              <Separator orientation="vertical" />
              <div>
                <div>
                  Chosen right answer{" "}
                  <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                    {
                      attemptedQuestions[activeQuestion.id].results.filter(
                        (i) => i
                      ).length
                    }
                  </Badge>{" "}
                  time(s)
                </div>
              </div>
            </div>
          )}
      </div>

      {/* Analytics Button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full mb-2"
        onClick={() => setShowAnalytics(true)}
      >
        <BarChart3 className="h-4 w-4 mr-2" />
        View Detailed Analytics
      </Button>

      <Separator orientation="horizontal" />
    </>
  );
}
