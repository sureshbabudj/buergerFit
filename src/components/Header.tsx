import { LanguageSelector } from "./LanguageSelector";
import { Tabs } from "./Tabs";
import { MobileDrawer } from "./MobileDrawer";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { FileQuestionIcon, InfoIcon, Target } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export function Header({ reset }: { reset: () => void }) {
  const location = useLocation();

  const isQuizPage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isMockTestPage = location.pathname === "/mock-test";

  return (
    <header className="flex w-full items-center justify-between mb-2">
      <a
        className="flex items-center text-2xl font-bold dark:text-white"
        href="/"
      >
        <Logo className="w-8 h-8 mr-2" />{" "}
        {!isQuizPage && <span>BürgerFit</span>}
        <span className="name group ml-2 rounded-3xl bg-[#fafafa] px-3 text-sm font-bold text-black hidden lg:inline-block">
          <span className="">v0.1</span>
        </span>
      </a>
      <div className="flex items-center gap-2">
        {isQuizPage && (
          <div className="hidden lg:block">
            <Tabs reset={reset} />
          </div>
        )}

        {!isAboutPage && !isMockTestPage && (
          <Button asChild variant="outline">
            <Link to="/about" className="flex lg:gap-1 !px-3">
              <InfoIcon className="w-4 h-4" />
              <span className="text-sm font-bold xl:block hidden">About</span>
            </Link>
          </Button>
        )}

        {!isMockTestPage && (
          <Button variant="outline" asChild>
            <Link to="/mock-test" className="flex lg:gap-1 !px-3">
              <Target className="h-4 w-4" />
              <span className="text-sm font-bold xl:block hidden">
                Take Mock Test
              </span>
            </Link>
          </Button>
        )}

        {isAboutPage && (
          <Button asChild variant="outline">
            <Link to="/" className="flex lg:gap-1 !px-3">
              <FileQuestionIcon className="w-4 h-4" />
              <span className="text-sm font-bold lg:block hidden">
                Back to Quiz
              </span>
            </Link>
          </Button>
        )}

        {isQuizPage && <LanguageSelector />}

        <ModeToggle />

        {isQuizPage && (
          <div className="block lg:hidden">
            <MobileDrawer reset={reset} />
          </div>
        )}
      </div>
    </header>
  );
}
