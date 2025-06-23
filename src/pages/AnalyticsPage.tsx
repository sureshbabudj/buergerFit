import { Header } from "@/components/Header";
import { ProgressAnalytics } from "../components/ProgressAnalytics";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AnalyticsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh max-w-4xl mx-auto  bg-background p-4 container">
      <div className="mb-8">
        <Header reset={() => {}} />
      </div>
      <div className="">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Quiz
          </Button>
          <h1 className="text-2xl font-bold">Progress Analytics</h1>
        </div>
        <ProgressAnalytics />
      </div>
    </div>
  );
}
