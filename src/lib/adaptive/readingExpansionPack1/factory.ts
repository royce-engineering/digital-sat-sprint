import type {
  CourseChoice,
  ExamDifficulty,
  ExamQuestion,
  ReadingDomain,
  ReadingModule,
  ReadingPassageType,
} from "../types";

export interface ExpansionQuestionParams {
  id: string;
  passage: string;
  prompt: string;
  choices: CourseChoice[];
  answer: number;
  difficulty: ExamDifficulty;
  skill: string;
  domain: ReadingDomain;
  passageType: ReadingPassageType;
  module: ReadingModule;
  estimatedSeconds?: number;
  tags?: string[];
  walkthrough: string[];
}

export function createExpansionQuestion({
  id,
  passage,
  prompt,
  choices,
  answer,
  difficulty,
  skill,
  domain,
  passageType,
  module,
  estimatedSeconds = 75,
  tags = [],
  walkthrough,
}: ExpansionQuestionParams): ExamQuestion {
  return {
    id,
    examId: id,
    section: "Reading & Writing",
    courseId: "reading-expansion-pack-1",
    courseTitle: "Reading Expansion Pack I",
    passage,
    prompt,
    choices,
    answer,
    difficulty,
    skill,
    domain,
    passageType,
    questionType: "multiple-choice",
    estimatedTime: estimatedSeconds,
    tags: [
      "reading-expansion-pack-1",
      difficulty.toLowerCase(),
      ...tags,
    ],
    blueprint: {
      module,
      domain,
      skill,
      passageType,
      difficulty,
      estimatedSeconds,
    },
    walkthrough,
  };
}

export function choice(
  text: string,
  rationale: string,
): CourseChoice {
  return { text, rationale };
}
