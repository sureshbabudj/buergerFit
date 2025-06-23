import { useMemo, useState } from "react";
import { useQuizStore } from "../lib/store";
import { Header } from "@/components/Header";
import { Question } from "@/components/Question";
import { Options } from "@/components/Options";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Play,
  CheckCircle,
  XCircle,
  Target,
  Award,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { OptionType } from "@/types";

import questionsTeil1 from "@/assets/questions";
import {
  questionWithIds as questionsTeil2,
  regions,
} from "@/assets/questions_teil_2";
import { SelectRegion } from "@/components/Tabs";
import { Separator } from "@/components/ui/separator";

interface MockTestState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  isCompleted: boolean;
  startTime: Date | null;
  endTime: Date | null;
  showResults: boolean;
}

const GENERAL_QUESTIONS = 30;
const REGIONAL_QUESTIONS = 3;
const PASSING_SCORE = 50; // 17 out of 33 questions

export function MockTestPage() {
  const navigate = useNavigate();
  const { chosenRegion, setChosenRegion, setAttemptedMockTests } =
    useQuizStore();

  const [testState, setTestState] = useState<MockTestState>({
    currentQuestionIndex: 0,
    answers: [],
    isCompleted: false,
    startTime: null,
    endTime: null,
    showResults: false,
  });

  // Generate mock test questions
  const mockTestQuestions = useMemo(() => {
    if (!chosenRegion) return [];

    // Get 30 random questions from Teil 1 (300 questions)
    const shuffledTeil1 = [...questionsTeil1].sort(() => Math.random() - 0.5);
    const selectedTeil1 = shuffledTeil1.slice(0, GENERAL_QUESTIONS);

    const regionIndex = regions.findIndex((r) => r === chosenRegion);
    const startIndex = regionIndex * 10;
    const filteredQuestions = [...questionsTeil2].slice(
      startIndex,
      startIndex + 10
    );

    const shuffledTeil2 = [...filteredQuestions].sort(
      () => Math.random() - 0.5
    );
    const regionalQuestions = shuffledTeil2.slice(0, REGIONAL_QUESTIONS);

    // Combine and shuffle all questions
    const allQuestions = [...selectedTeil1, ...regionalQuestions];
    return allQuestions
      .sort(() => Math.random() - 0.5)
      .map((q, i) => ({ ...q, id: String(i) }));
  }, [chosenRegion]);

  const currentQuestion = mockTestQuestions[testState.currentQuestionIndex];
  const totalQuestions = mockTestQuestions.length;
  const progress =
    totalQuestions > 0
      ? ((testState.currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;

  const startTest = () => {
    if (!chosenRegion) {
      toast.error("Please select a region first");
      return;
    }

    setTestState((prev) => ({
      ...prev,
      startTime: new Date(),
      answers: new Array(totalQuestions).fill(null),
    }));
  };

  const submitAnswer = (option: OptionType) => {
    if (testState.isCompleted) return;

    const optionIndex = currentQuestion.options.findIndex(
      (opt) => opt.id === option.id
    );

    setTestState((prev) => ({
      ...prev,
      answers: prev.answers.map((answer, index) =>
        index === prev.currentQuestionIndex ? optionIndex : answer
      ),
    }));
  };

  const nextQuestion = () => {
    if (testState.currentQuestionIndex < totalQuestions - 1) {
      setTestState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      completeTest();
    }
  };

  const previousQuestion = () => {
    if (testState.currentQuestionIndex > 0) {
      setTestState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  };

  const completeTest = () => {
    setTestState((prev) => ({
      ...prev,
      isCompleted: true,
      endTime: new Date(),
      showResults: true,
    }));
    setAttemptedMockTests({
      date: new Date().toISOString(),
      score: results.score,
      region: chosenRegion,
    });
  };

  const resetTest = () => {
    setTestState({
      currentQuestionIndex: 0,
      answers: [],
      isCompleted: false,
      startTime: null,
      endTime: null,
      showResults: false,
    });
  };

  const calculateResults = () => {
    const correctAnswers = testState.answers.filter((answer, index) => {
      const question = mockTestQuestions[index];
      const correctOptionIndex = question.options.findIndex(
        (opt) => opt.de === question.answer
      );
      return answer === correctOptionIndex;
    }).length;

    const score = (correctAnswers / totalQuestions) * 100;
    const timeSpent =
      testState.endTime && testState.startTime
        ? Math.round(
            (testState.endTime.getTime() - testState.startTime.getTime()) /
              1000 /
              60
          )
        : 0;

    return {
      correctAnswers,
      totalQuestions,
      score,
      timeSpent,
      passed: score >= PASSING_SCORE, // 75% passing score
    };
  };

  const results = calculateResults();

  // Show region selection if no region is chosen
  if (!chosenRegion) {
    return (
      <div className="min-h-dvh bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Header reset={() => {}} />
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Mock Test Setup
              </CardTitle>
              <CardDescription>
                Select your federal state to start the mock test
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">The mock test includes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>30 questions from the general catalog</li>
                  <li>3 state-specific questions</li>
                  <li>75% passing score required</li>
                </ul>
              </div>

              <SelectRegion reset={() => {}} />

              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Show test setup if not started
  if (!testState.startTime) {
    return (
      <div className="min-h-dvh bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Header reset={() => {}} />
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Mock Test Ready
              </CardTitle>
              <CardDescription>
                Test for {chosenRegion} - {totalQuestions} questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Test includes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>30 general questions</li>
                  <li>3 {chosenRegion} specific questions</li>
                  <li>75% passing score required</li>
                </ul>
              </div>

              <Button onClick={startTest} className="w-full" size="lg">
                <Play className="h-4 w-4 mr-2" />
                Start Mock Test
              </Button>

              <Button
                onClick={() => setChosenRegion("")}
                variant="outline"
                className="w-full"
              >
                Change Region
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Show results
  if (testState.showResults) {
    return (
      <div className="min-h-dvh bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Header reset={() => {}} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {results.passed ? (
                  <Award className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                Mock Test Results
              </CardTitle>
              <CardDescription>
                {results.passed
                  ? "Congratulations! You passed!"
                  : "Keep practicing to improve your score"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {results.score.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {results.correctAnswers}/{results.totalQuestions}
                  </div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {results.timeSpent} min
                  </div>
                  <div className="text-sm text-gray-600">Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {chosenRegion}
                  </div>
                  <div className="text-sm text-gray-600">Region</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={resetTest} className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Test
                </Button>
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="flex-1"
                >
                  Back to Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Show test interface
  return (
    <div className="min-h-dvh bg-background">
      <div className="flex flex-col lg:flex-row h-dvh">
        {/* Question Display */}
        <section className="hidden h-dvh w-full flex-col items-center justify-center bg-[#d6ebe9] p-9 lg:flex dark:bg-zinc-900">
          {currentQuestion && <Question question={currentQuestion} />}
        </section>

        {/* Test Interface */}
        <section className="flex h-dvh w-full flex-col justify-between p-9 lg:h-auto">
          <Header reset={() => {}} />

          {/* Question */}
          <div>
            <div className="lg:hidden mb-6">
              {currentQuestion && <Question question={currentQuestion} />}
            </div>

            {currentQuestion && (
              <Options
                question={currentQuestion}
                setSelectedOption={submitAnswer}
                highlightAnswer={false}
                selectedOption={
                  testState.answers[testState.currentQuestionIndex] !== null
                    ? currentQuestion.options[
                        testState.answers[testState.currentQuestionIndex]!
                      ]
                    : null
                }
              />
            )}
          </div>

          <div>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Question {testState.currentQuestionIndex + 1} of{" "}
                  {totalQuestions}
                </span>
                <Badge variant="outline">
                  {Math.round(progress)}% Complete
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Separator />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={previousQuestion}
                disabled={testState.currentQuestionIndex === 0}
                variant="outline"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium hidden lg:inline">
                  Previous
                </span>
              </Button>

              <div className="text-sm text-muted-foreground">
                {testState.answers.filter((answer) => answer !== null).length}{" "}
                of {totalQuestions} answered
              </div>

              <Button
                onClick={nextQuestion}
                disabled={
                  testState.answers[testState.currentQuestionIndex] === null
                }
              >
                {testState.currentQuestionIndex === totalQuestions - 1 ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium hidden lg:inline">
                      Finish Test
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-sm font-medium hidden lg:inline">
                      Next
                    </span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
