import { Button } from "./ui/button";
import { useQuizStore } from "../lib/store";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { LanguageType } from "@/types";

export function LanguageSelector() {
  const { language, setLanguage } = useQuizStore();
  return (
    <ToggleGroup
      defaultValue={language}
      variant="outline"
      type="single"
      size="sm"
      onValueChange={(e) => {
        setLanguage(e as LanguageType);
      }}
    >
      <ToggleGroupItem value="de" aria-label="Toggle German">
        DE
      </ToggleGroupItem>
      <ToggleGroupItem value="en" aria-label="Toggle English">
        EN
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
