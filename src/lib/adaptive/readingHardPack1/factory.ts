import type {
  CourseChoice,
  ExamQuestion,
  ReadingDomain,
  ReadingModule,
  ReadingPassageType,
} from "../types";

interface CreateReadingQuestionParams {
  id: string;
  passage: string;
  prompt: string;
  choices: CourseChoice[];
  answer: number;
  skill: string;
  domain: ReadingDomain;
  passageType?: ReadingPassageType;
  module?: ReadingModule;
  estimatedTime?: number;
  tags?: string[];
  walkthrough?: string[];
}

export function createReadingQuestion({
  id,
  passage,
  prompt,
  choices,
  answer,
  skill,
  domain,
  passageType = "Science",
  module = 2,
  estimatedTime = 75,
  tags = [],
  walkthrough = [],
}: CreateReadingQuestionParams): ExamQuestion {
  return {
    id,
    examId: id,
    section: "Reading & Writing",
    courseId: "reading-hard-pack-1",
    courseTitle: "Reading Hard Pack I",
    passage,
    prompt,
    choices,
    answer,
    difficulty: "Hard",
    skill,
    domain,
    passageType,
    questionType: "multiple-choice",
    estimatedTime,
    tags: ["reading-hard-pack-1", ...tags],
    blueprint: {
      module,
      domain,
      skill,
      passageType,
      difficulty: "Hard",
      estimatedSeconds: estimatedTime,
    },
    walkthrough,
  };
}
