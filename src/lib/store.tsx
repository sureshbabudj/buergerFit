import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import type {
  AttemptedQuestion,
  AttemptedQuestionMap,
  LanguageType,
  QuestionType,
  TeilType,
  AttemptedMockTest,
} from "../types";

const QUIZ_STORE_NAME = "quiz-store";

export interface QuizStore {
  currentTeil: TeilType;
  chosenRegion: string;
  setChosenRegion: (region: string) => void;
  setCurrentTeil: (teil: TeilType) => void;
  attemptedQuestions: AttemptedQuestionMap;
  setAttemptedQuestions: (attemptedQuestion: AttemptedQuestion) => void;
  questions: QuestionType[];
  setQuestions: (questions: QuestionType[]) => void;
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  activeQuestionTeil1: QuestionType | null;
  activeQuestionTeil2: QuestionType | null;
  setActiveQuestion: (question: QuestionType) => void;
  getActiveQuestion: () => QuestionType | null;
  showAnalytics: boolean;
  setShowAnalytics: (v: boolean) => void;
  attemptedMockTests: AttemptedMockTest[];
  setAttemptedMockTests: (attemptedMockTest: AttemptedMockTest) => void;
}

export const useQuizStore = create<QuizStore>()(
  devtools(
    persist(
      (set, get) => ({
        attemptedQuestions: {},
        setAttemptedQuestions: (attemptedQuestion) =>
          set((state) => {
            return {
              attemptedQuestions: {
                ...state.attemptedQuestions,
                [String(attemptedQuestion.questionIndex)]: attemptedQuestion,
              },
            };
          }),
        currentTeil: "teil_1",
        setCurrentTeil: (teil) => set({ currentTeil: teil }),
        chosenRegion: "",
        setChosenRegion: (region) => set({ chosenRegion: region }),
        questions: [],
        setQuestions: (questions) => set({ questions }),
        language: "de",
        setLanguage: (language) => set({ language }),
        activeQuestion: null,
        activeQuestionTeil1: null,
        activeQuestionTeil2: null,
        setActiveQuestion: (question) => {
          if (get().currentTeil === "teil_1") {
            set({ activeQuestionTeil1: question });
          } else {
            set({ activeQuestionTeil2: question });
          }
        },
        getActiveQuestion: () => {
          const {
            currentTeil,
            activeQuestionTeil1,
            activeQuestionTeil2,
            questions,
          } = get();
          if (currentTeil === "teil_1") {
            if (activeQuestionTeil1) {
              return activeQuestionTeil1;
            } else {
              if (questions.length > 0) {
                return questions[0];
              } else {
                return null;
              }
            }
          } else {
            if (activeQuestionTeil2) {
              return activeQuestionTeil2;
            } else {
              if (questions.length > 0) {
                return questions[0];
              } else {
                return null;
              }
            }
          }
        },
        showAnalytics: false,
        setShowAnalytics: (v) => set({ showAnalytics: v }),
        attemptedMockTests: [],
        setAttemptedMockTests: (attemptedMockTest) =>
          set((state) => ({
            attemptedMockTests: [
              ...state.attemptedMockTests,
              attemptedMockTest,
            ],
          })),
      }),
      {
        name: QUIZ_STORE_NAME,
        partialize: (state) => ({
          attemptedQuestions: state.attemptedQuestions,
          currentTeil: state.currentTeil,
          chosenRegion: state.chosenRegion,
          activeQuestionTeil1: state.activeQuestionTeil1,
          activeQuestionTeil2: state.activeQuestionTeil2,
          attemptedMockTests: state.attemptedMockTests,
        }),
      }
    )
  )
);
