export interface QuestionType {
  id: string;
  question: {
    de: string;
    en: string;
    image?: string;
  };
  options: OptionType[];
  answer: string;
}

export interface OptionType {
  id: string;
  de: string;
  en: string;
}

export type TeilType = "teil_1" | "teil_2";

export interface AttemptedQuestionMap {
  [key: string]: AttemptedQuestion;
}

export interface AttemptedQuestion {
  questionIndex: string;
  selectedOption: number;
  results: boolean[];
  timeTaken: number;
  lastAttemptedAt: string;
  teil: TeilType;
  region: string;
}

export type LanguageType = "de" | "en";

export interface AttemptedMockTest {
  date: string;
  score: number;
  region: string;
}
