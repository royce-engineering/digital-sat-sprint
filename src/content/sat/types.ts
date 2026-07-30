export type VocabularyWord = {
  word: string;
  partOfSpeech?: string;
  rating: 3 | 4 | 5;
  definition: string;
  example: string;
  synonyms: string[];
  antonyms?: string[];
  root?: string;
  frequency?: "High" | "Medium" | "Low";
  difficulty?: "Foundation" | "Core" | "Advanced";
  collocations?: string[];
  satTip?: string;
  wordFamily?: string[];
};

export type PracticeQuestion = {
  id: number;
  prompt: string;
  choices: string[];
  answer: string;
  explanation: string;
};

export type SatDay = {
  day: number;
  title: string;
  description: string;
  words: VocabularyWord[];
  questions: PracticeQuestion[];
};
