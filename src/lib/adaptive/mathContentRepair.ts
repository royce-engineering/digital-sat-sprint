import type { ExamQuestion } from "./types";

type QuestionPatch = Partial<
  Pick<
    ExamQuestion,
    | "passage"
    | "prompt"
    | "choices"
    | "answer"
    | "numericAnswer"
    | "walkthrough"
  >
>;

function choice(text: string, rationale: string) {
  return {
    text,
    rationale,
  };
}

function mcqPatch(
  passage: string,
  prompt: string,
  correct: string,
  distractors: string[],
  rationale: string,
  answerIndex: number,
): QuestionPatch {
  const values = [correct, ...distractors];

  const ordered = values.map(
    (_, index) => values[(index + (4 - answerIndex)) % 4],
  );

  const answer = ordered.indexOf(correct);

  return {
    passage,
    prompt,
    choices: ordered.map((text, index) =>
      choice(
        text,
        index === answer
          ? rationale
          : "This option results from an incorrect operation or interpretation.",
      ),
    ),
    answer,
    walkthrough: [
      "Identify the relevant equation or relationship.",
      rationale,
      `The correct answer is ${correct}.`,
    ],
  };
}

const REWRITE_PATCHES: Record<string, QuestionPatch> = {
  "math-v2-multiple-choice-1013": mcqPatch(
    "The function f(x) = 4^x.",
    "What is the value of f(3)?",
    "64",
    ["12", "16", "67"],
    "Substitute x = 3: f(3) = 4³ = 64.",
    1,
  ),

  "math-v2-multiple-choice-1022": mcqPatch(
    "(x + 1)(5x + 7) = 5x² + 12x + 7",
    "Which expression is the quotient when the polynomial is divided by x + 1?",
    "5x + 7",
    ["5x - 7", "7x + 5", "12x"],
    "The displayed factorization shows that dividing by x + 1 leaves 5x + 7.",
    2,
  ),

  "math-v2-multiple-choice-1017": mcqPatch(
    "The function f(x) = 2^x.",
    "What is the value of f(6)?",
    "64",
    ["12", "32", "66"],
    "Substitute x = 6: f(6) = 2⁶ = 64.",
    3,
  ),

  "math-v2-multiple-choice-1021": mcqPatch(
    "The function f(x) = 5^x.",
    "What is the value of f(3)?",
    "125",
    ["15", "25", "128"],
    "Substitute x = 3: f(3) = 5³ = 125.",
    0,
  ),

  "math-v2-student-response-38": {
    passage: "A circle has radius 9. Its area is kπ square units.",
    prompt: "What is the value of k?",
    numericAnswer: "81",
    walkthrough: ["Use A = πr².", "Substitute r = 9.", "k = 9² = 81."],
  },

  "math-v2-student-response-23": {
    passage: "x² = 64, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "8",
    walkthrough: ["Take the positive square root of 64.", "x = 8."],
  },

  "math-v2-student-response-35": {
    passage: "x² = 81, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "9",
    walkthrough: ["Take the positive square root of 81.", "x = 9."],
  },

  "math-v2-student-response-30": {
    passage: "A circle has diameter 14. Its area is kπ square units.",
    prompt: "What is the value of k?",
    numericAnswer: "49",
    walkthrough: [
      "The radius is half the diameter, so r = 7.",
      "Use A = πr².",
      "k = 7² = 49.",
    ],
  },

  "math-v2-student-response-15": {
    passage: "x² = 36, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "6",
    walkthrough: ["Take the positive square root of 36.", "x = 6."],
  },

  "math-v2-student-response-27": {
    passage: "x² = 16, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "4",
    walkthrough: ["Take the positive square root of 16.", "x = 4."],
  },

  "math-v2-student-response-39": {
    passage: "x² = 100, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "10",
    walkthrough: ["Take the positive square root of 100.", "x = 10."],
  },

  "math-v2-student-response-34": {
    passage: "A circle has diameter 18. Its area is kπ square units.",
    prompt: "What is the value of k?",
    numericAnswer: "81",
    walkthrough: [
      "The radius is half the diameter, so r = 9.",
      "Use A = πr².",
      "k = 9² = 81.",
    ],
  },
  "math-v2-student-response-19": {
    passage: "x² = 121, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "11",
    walkthrough: ["Take the positive square root of 121.", "x = 11."],
  },

  "math-v2-student-response-31": {
    passage: "x² = 144, and x is positive.",
    prompt: "Enter the value of x.",
    numericAnswer: "12",
    walkthrough: ["Take the positive square root of 144.", "x = 12."],
  },
};

const DISTRACTOR_PATCHES: Record<string, string[]> = {
  "math-v2-modeling-9": ["36", "40", "28", "32"],
  "math-v2-graph-7": ["3", "2", "-2", "-3"],
  "math-v2-graph-12": ["-2", "3", "2", "6"],
  "math-v2-graph-14": ["4", "6", "-4", "5"],
  "math-v2-graph-16": ["-2", "3", "2", "7"],
  "math-v2-graph-18": ["4", "1", "-4", "6"],
  "math-v2-multiple-choice-1006": ["4x + 4", "4x - 4", "8x + 4", "8x"],
  "math-v2-multiple-choice-1009": ["9", "30", "27", "6"],
};

function patchChoices(question: ExamQuestion, texts: string[]): ExamQuestion {
  if (texts.length !== question.choices.length) {
    return question;
  }

  return {
    ...question,
    choices: question.choices.map((existing, index) => ({
      ...existing,
      text: texts[index],
    })),
  };
}

export interface MathContentRepairResult {
  questions: ExamQuestion[];
  rewrittenIds: string[];
  distractorRepairedIds: string[];
}

export function repairMathContent(
  questions: readonly ExamQuestion[],
): MathContentRepairResult {
  const rewrittenIds: string[] = [];
  const distractorRepairedIds: string[] = [];

  const repaired = questions.map((question): ExamQuestion => {
    const id = question.examId || question.id;
    const rewrite = REWRITE_PATCHES[id];

    if (rewrite) {
      rewrittenIds.push(id);

      return {
        ...question,
        ...rewrite,
      };
    }

    const distractors = DISTRACTOR_PATCHES[id];

    if (distractors) {
      distractorRepairedIds.push(id);

      return patchChoices(question, distractors);
    }

    return question;
  });

  return {
    questions: repaired,
    rewrittenIds,
    distractorRepairedIds,
  };
}
