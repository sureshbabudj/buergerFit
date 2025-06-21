import { Button } from "./ui/button";
import { useQuizStore } from "../lib/store";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LanguagesIcon } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage } = useQuizStore();
  return (
    <ToggleGroup
      value={language}
      variant="outline"
      type="single"
      size="sm"
      onValueChange={(e) => {
        if (e === "en") {
          setLanguage("en");
        } else {
          setLanguage("de");
        }
      }}
    >
      <ToggleGroupItem
        value="en"
        aria-label={language === "de" ? "Toggle English" : "Toggle German"}
      >
        <LanguagesIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function LanguageSelector1() {
  const { language, setLanguage } = useQuizStore();

  return (
    <div className="flex items-center gap-2">
      <Button
        className={`language_button button${
          language === "de" ? " active" : ""
        }`}
        onClick={() => setLanguage("de")}
      >
        DE
      </Button>
      <Button
        className={`language_button button${
          language === "en" ? " active" : ""
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
    </div>
  );
}
