import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { QuizPage } from "./pages/QuizPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { MockTestPage } from "./pages/MockTestPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/mock-test" element={<MockTestPage />} />
      </Routes>
    </Router>
  );
}
