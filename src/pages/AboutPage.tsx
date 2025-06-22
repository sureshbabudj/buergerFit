import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, BarChart3, Play, Users, Target } from "lucide-react";
import { Header } from "@/components/Header";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d6ebe9] to-green-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Header reset={() => {}} />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Prepare for the German Naturalization Test
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master German civics, history, and regional knowledge with
            interactive quizzes. Track your progress and study smarter with
            BürgerFit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <CardTitle>Comprehensive Content</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Cover all topics from the official Einbürgerungstest including
                constitutional rights, democratic principles, and regional
                knowledge.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                <CardTitle>Progress Tracking</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor your learning progress with detailed analytics, identify
                weak areas, and track improvement over time.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <CardTitle>Bilingual Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Study in German or English. All questions and explanations are
                available in both languages for better understanding.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => navigate("/quiz")}
            className="flex items-center gap-2 px-8 py-3"
          >
            <Play className="h-5 w-5" />
            Start Quiz
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/analytics")}
            className="flex items-center gap-2 px-8 py-3"
          >
            <BarChart3 className="h-5 w-5" />
            View Analytics
          </Button>
        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  300+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Questions
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">16</div>
                <div className="text-gray-600 dark:text-gray-400">
                  German States
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Languages
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
