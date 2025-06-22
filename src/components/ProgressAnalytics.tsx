import { useMemo } from "react";
import { useQuizStore } from "../lib/store";
import { Progress } from "./ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Users,
  Award,
  InfoIcon,
  SendIcon,
} from "lucide-react";
import type { AttemptedQuestion } from "@/types";

interface QuestionAnalytics {
  questionId: string;
  attempts: number;
  correctAttempts: number;
  lastAttemptedAt: string;
  successRate: number;
  status: "excellent" | "good" | "needs_attention" | "poor";
}

interface OverallAnalytics {
  totalQuestions: number;
  attemptedQuestions: number;
  completionRate: number;
  averageAttempts: number;
  overallSuccessRate: number;
  progressStatus: "excellent" | "good" | "needs_attention" | "poor";
  questionsByStatus: {
    excellent: AttemptedQuestion[];
    good: AttemptedQuestion[];
    needs_attention: AttemptedQuestion[];
    poor: AttemptedQuestion[];
  };
  recentActivity: {
    date: string;
    questionsAttempted: number;
    averageSuccessRate: number;
  }[];
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import { format } from "date-fns";

export function QuestionInformation({
  questions,
}: {
  questions: AttemptedQuestion[];
}) {
  const { questions: allQuestions, language } = useQuizStore();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <InfoIcon className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Questions</h4>
          </div>
          <ScrollArea className="h-62">
            {allQuestions.length > 0 &&
              questions.map((q, index) => {
                const question = allQuestions.find(
                  (a) => a.id === q.questionIndex
                );
                if (!question) return null;
                return (
                  <>
                    <div
                      key={question.id}
                      className="flex flex-col gap-2 text-sm items-start"
                    >
                      <p>
                        <span>
                          {parseInt(question.id, 10) + 1}
                          {". "}
                          {question.question[language]}
                        </span>
                      </p>
                      <p>
                        <SendIcon className="w-4 h-4 inline-block mr-2" />
                        <span>{question.answer}</span>
                      </p>
                    </div>
                    {index !== questions.length - 1 && (
                      <Separator className="my-2" orientation="horizontal" />
                    )}
                  </>
                );
              })}
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ProgressAnalytics() {
  const {
    attemptedQuestions: actualAttemptedQuestions,
    questions,
    currentTeil,
    chosenRegion,
  } = useQuizStore();

  const analytics = useMemo((): OverallAnalytics => {
    const attemptedQuestions = Object.values(actualAttemptedQuestions).filter(
      (i) =>
        i.teil === currentTeil &&
        (currentTeil === "teil_2" ? i.region === chosenRegion : true)
    );
    const totalQuestions = questions.length;
    const attemptedQuestionsCount = Object.keys(attemptedQuestions).length;
    const completionRate =
      totalQuestions > 0 ? (attemptedQuestionsCount / totalQuestions) * 100 : 0;

    // Calculate average attempts and success rate
    let totalAttempts = 0;
    let totalCorrectAttempts = 0;
    const questionAnalytics: QuestionAnalytics[] = [];

    Object.entries(attemptedQuestions).forEach(([questionId, data]) => {
      const attempts = data.results.length;
      const correctAttempts = data.results.filter((result) => result).length;
      const successRate = attempts > 0 ? (correctAttempts / attempts) * 100 : 0;

      totalAttempts += attempts;
      totalCorrectAttempts += correctAttempts;

      // Determine status based on attempts and success rate
      let status: QuestionAnalytics["status"] = "poor";
      if (attempts === 1 && correctAttempts === 1) status = "excellent";
      else if (successRate >= 75) status = "good";
      else if (successRate >= 50) status = "needs_attention";
      else status = "poor";

      questionAnalytics.push({
        questionId,
        attempts,
        correctAttempts,
        lastAttemptedAt: data.lastAttemptedAt,
        successRate,
        status,
      });
    });

    const averageAttempts =
      attemptedQuestionsCount > 0 ? totalAttempts / attemptedQuestionsCount : 0;
    const overallSuccessRate =
      totalAttempts > 0 ? (totalCorrectAttempts / totalAttempts) * 100 : 0;

    // Determine overall progress status
    let progressStatus: OverallAnalytics["progressStatus"] = "poor";
    if (completionRate >= 80 && overallSuccessRate >= 80)
      progressStatus = "excellent";
    else if (completionRate >= 60 && overallSuccessRate >= 70)
      progressStatus = "good";
    else if (completionRate >= 40 && overallSuccessRate >= 50)
      progressStatus = "needs_attention";
    else progressStatus = "poor";

    // Group questions by status
    const getQuestionsByStatus = () => {
      const excellentIds = questionAnalytics
        .filter((q) => q.status === "excellent")
        .map((q) => q.questionId);
      const goodIds = questionAnalytics
        .filter((q) => q.status === "good")
        .map((q) => q.questionId);
      const needsAttentionIds = questionAnalytics
        .filter((q) => q.status === "needs_attention")
        .map((q) => q.questionId);
      const poorIds = questionAnalytics
        .filter((q) => q.status === "poor")
        .map((q) => q.questionId);

      return {
        excellent: Object.values(actualAttemptedQuestions).filter((q) =>
          excellentIds.includes(q.questionIndex)
        ),
        good: Object.values(actualAttemptedQuestions).filter((q) =>
          goodIds.includes(q.questionIndex)
        ),
        needs_attention: Object.values(actualAttemptedQuestions).filter((q) =>
          needsAttentionIds.includes(q.questionIndex)
        ),
        poor: Object.values(actualAttemptedQuestions).filter((q) =>
          poorIds.includes(q.questionIndex)
        ),
      };
    };

    // Calculate recent activity (last 7 days)
    const recentActivity = calculateRecentActivity(attemptedQuestions);

    return {
      totalQuestions,
      attemptedQuestions: attemptedQuestionsCount,
      completionRate,
      averageAttempts,
      overallSuccessRate,
      progressStatus,
      questionsByStatus: getQuestionsByStatus(),
      recentActivity,
    };
  }, [actualAttemptedQuestions, questions, currentTeil, chosenRegion]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <Award className="h-4 w-4 text-green-600" />;
      case "good":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      case "needs_attention":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "poor":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "needs_attention":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "poor":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getProgressMessage = () => {
    const { completionRate } = analytics;

    if (completionRate < 20) {
      return "You're just getting started! Keep practicing to build momentum.";
    } else if (completionRate < 50) {
      return "Good progress! Focus on understanding the concepts you're struggling with.";
    } else if (completionRate < 80) {
      return "You're doing well! Review the questions that need attention.";
    } else {
      return "Excellent work! You're well-prepared for the test.";
    }
  };

  return (
    <ScrollArea>
      <div className="space-y-6">
        {/* Overall Progress Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Overall Progress
            </CardTitle>
            <CardDescription>Your learning journey at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Completion Rate</span>
              <Badge className={getStatusColor(analytics.progressStatus)}>
                {analytics.completionRate.toFixed(1)}%
              </Badge>
            </div>
            <Progress value={analytics.completionRate} className="h-2" />

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {analytics.attemptedQuestions}
                </div>
                <div className="text-sm text-gray-600">Questions Attempted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {analytics.overallSuccessRate.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {analytics.averageAttempts.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">
                Average Attempts per Question
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">{getProgressMessage()}</p>
            </div>
          </CardContent>
        </Card>

        {/* Performance Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Performance Breakdown
            </CardTitle>
            <CardDescription>
              How you're performing across different categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {getStatusIcon("excellent")}
                  <span className="text-lg font-bold text-green-600">
                    {analytics.questionsByStatus.excellent.length}
                  </span>
                </div>
                <div className="text-xs text-green-700 flex items-center justify-center gap-1 mb-1">
                  <span>Excellent</span>
                  {analytics.questionsByStatus.excellent.length !== 0 && (
                    <QuestionInformation
                      questions={analytics.questionsByStatus.excellent}
                    />
                  )}
                </div>
              </div>

              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {getStatusIcon("good")}
                  <span className="text-lg font-bold text-blue-600">
                    {analytics.questionsByStatus.good.length}
                  </span>
                </div>
                <div className="text-xs text-blue-700 flex items-center justify-center gap-1 mb-1">
                  <span>Good</span>
                  {analytics.questionsByStatus.good.length !== 0 && (
                    <QuestionInformation
                      questions={analytics.questionsByStatus.good}
                    />
                  )}
                </div>
              </div>

              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {getStatusIcon("needs_attention")}
                  <span className="text-lg font-bold text-yellow-600">
                    {analytics.questionsByStatus.needs_attention.length}
                  </span>
                </div>
                <div className="text-xs text-yellow-700 flex items-center justify-center gap-1 mb-1">
                  <span>Needs Attention</span>
                  {analytics.questionsByStatus.needs_attention.length !== 0 && (
                    <QuestionInformation
                      questions={analytics.questionsByStatus.needs_attention}
                    />
                  )}
                </div>
              </div>

              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {getStatusIcon("poor")}
                  <span className="text-lg font-bold text-red-600">
                    {analytics.questionsByStatus.poor.length}
                  </span>
                </div>
                <div className="text-xs text-red-700 flex items-center justify-center gap-1 mb-1">
                  <span>Poor</span>
                  {analytics.questionsByStatus.poor.length !== 0 && (
                    <QuestionInformation
                      questions={analytics.questionsByStatus.poor}
                    />
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        {analytics.recentActivity.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your study activity over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-32">
                <div className="space-y-2">
                  {analytics.recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2  dark:bg-gray-200 text-gray-800 dark:text-gray-900 rounded"
                    >
                      <span className="text-sm font-medium">
                        {activity.date}
                      </span>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{activity.questionsAttempted} questions</span>
                        <span className="text-green-600 font-bold">
                          {activity.averageSuccessRate.toFixed(1)}% success
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        )}

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recommendations
            </CardTitle>
            <CardDescription>
              Personalized suggestions to improve your performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analytics.questionsByStatus.poor.length > 0 && (
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-red-800">
                      Focus on Struggling Areas
                    </div>
                    <div className="text-sm text-red-700">
                      You have {analytics.questionsByStatus.poor.length}{" "}
                      questions that need more practice. Review these concepts
                      thoroughly.
                    </div>
                  </div>
                </div>
              )}

              {analytics.averageAttempts > 3 && (
                <div className="flex items-start gap-2 p-3 bg-yellow-50 rounded-lg">
                  <Clock className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-yellow-800">
                      Reduce Attempts
                    </div>
                    <div className="text-sm text-yellow-700">
                      You're averaging {analytics.averageAttempts.toFixed(1)}{" "}
                      attempts per question. Try to understand concepts better
                      before answering.
                    </div>
                  </div>
                </div>
              )}

              {analytics.completionRate < 50 && (
                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-blue-800">
                      Increase Coverage
                    </div>
                    <div className="text-sm text-blue-700">
                      You've completed {analytics.completionRate.toFixed(1)}% of
                      questions. Try to attempt more questions to get a better
                      understanding.
                    </div>
                  </div>
                </div>
              )}

              {analytics.overallSuccessRate >= 80 && (
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                  <Award className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-green-800">
                      Excellent Performance!
                    </div>
                    <div className="text-sm text-green-700">
                      You're doing great with{" "}
                      {analytics.overallSuccessRate.toFixed(1)}% success rate.
                      Keep up the good work!
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}

function calculateRecentActivity(attemptedQuestions: any) {
  const now = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    return date.toISOString().split("T")[0];
  }).reverse();

  const activityByDate: {
    [key: string]: { questions: number; correct: number; total: number };
  } = {};

  Object.values(attemptedQuestions).forEach((data: any) => {
    const date = data.lastAttemptedAt.split("T")[0];
    if (last7Days.includes(date)) {
      if (!activityByDate[date]) {
        activityByDate[date] = { questions: 0, correct: 0, total: 0 };
      }
      activityByDate[date].questions += 1;
      activityByDate[date].total += data.results.length;
      activityByDate[date].correct += data.results.filter(
        (r: boolean) => r
      ).length;
    }
  });

  return last7Days
    .map((date) => ({
      date: format(new Date(date), "do MMM, yyyy"),
      questionsAttempted: activityByDate[date]?.questions || 0,
      averageSuccessRate:
        activityByDate[date]?.total > 0
          ? (activityByDate[date].correct / activityByDate[date].total) * 100
          : 0,
    }))
    .filter((activity) => activity.questionsAttempted > 0);
}
