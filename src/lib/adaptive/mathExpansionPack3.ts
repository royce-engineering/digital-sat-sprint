import type {
  ExamDifficulty,
  ExamQuestion,
} from "./types";

const ALGEBRA = "Algebra" as const;
const ADVANCED = "Advanced Math" as const;

function choice(
  text: string,
  correct: boolean,
  explanation: string,
) {
  return {
    text,
    rationale: correct
      ? explanation
      : "This choice results from an incorrect algebraic setup or calculation.",
  };
}

function baseQuestion(
  id: string,
  domain: typeof ALGEBRA | typeof ADVANCED,
  difficulty: ExamDifficulty,
  skill: string,
  questionType:
    | "multiple-choice"
    | "student-response"
    | "table"
    | "modeling",
): Omit<
  ExamQuestion,
  "passage" | "prompt" | "choices" | "answer"
> {
  return {
    id,
    examId: id,
    section: "Math",
    courseId: "math-expansion-phase2-1",
    courseTitle: `Math Expansion · ${skill}`,
    difficulty,
    skill,
    mathDomain: domain,
    questionType,
    calculatorRecommended:
      difficulty === "Hard" ||
      questionType === "table" ||
      questionType === "modeling",
    estimatedTime:
      questionType === "student-response"
        ? 95
        : 90,
    tags: [
      "math-expansion",
      domain,
      skill,
      difficulty,
      questionType,
    ],
  };
}

function multipleChoice(
  id: string,
  domain: typeof ALGEBRA | typeof ADVANCED,
  difficulty: ExamDifficulty,
  skill: string,
  questionType:
    | "multiple-choice"
    | "table"
    | "modeling",
  passage: string,
  prompt: string,
  options: string[],
  correctText: string,
  walkthrough: string[],
  extra?: Pick<
    ExamQuestion,
    "tableData"
  >,
): ExamQuestion {
  const answer = options.indexOf(correctText);

  if (
    options.length !== 4 ||
    answer < 0 ||
    new Set(options).size !== 4
  ) {
    throw new Error(`Invalid choices for ${id}.`);
  }

  return {
    ...baseQuestion(
      id,
      domain,
      difficulty,
      skill,
      questionType,
    ),
    passage,
    prompt,
    choices: options.map((text, index) =>
      choice(
        text,
        index === answer,
        walkthrough[walkthrough.length - 1],
      ),
    ),
    answer,
    walkthrough,
    ...extra,
  };
}

function studentResponse(
  id: string,
  domain: typeof ALGEBRA | typeof ADVANCED,
  difficulty: ExamDifficulty,
  skill: string,
  passage: string,
  prompt: string,
  numericAnswer: string,
  walkthrough: string[],
): ExamQuestion {
  return {
    ...baseQuestion(
      id,
      domain,
      difficulty,
      skill,
      "student-response",
    ),
    passage,
    prompt,
    choices: [],
    answer: -1,
    numericAnswer,
    walkthrough,
  };
}

const linearEquations: ExamQuestion[] = [
  studentResponse(
    "math-alg-exp3-linear-e1",
    ALGEBRA,
    "Easy",
    "Linear Equations",
    "5x - 7 = 28",
    "What is the value of x?",
    "7",
    [
      "Add 7 to both sides: 5x = 35.",
      "Divide by 5.",
      "x = 7.",
    ],
  ),
  studentResponse(
    "math-alg-exp3-linear-m1",
    ALGEBRA,
    "Medium",
    "Linear Equations",
    "4(2x - 3) = 5x + 9",
    "What is the value of x?",
    "7",
    [
      "Expand: 8x - 12 = 5x + 9.",
      "Subtract 5x and add 12: 3x = 21.",
      "x = 7.",
    ],
  ),
  studentResponse(
    "math-alg-exp3-linear-m2",
    ALGEBRA,
    "Medium",
    "Linear Equations",
    "3(x + 4) - 2(x - 5) = 29",
    "What is the value of x?",
    "7",
    [
      "Expand: 3x + 12 - 2x + 10 = 29.",
      "Combine like terms: x + 22 = 29.",
      "x = 7.",
    ],
  ),
  studentResponse(
    "math-alg-exp3-linear-m3",
    ALGEBRA,
    "Medium",
    "Linear Equations",
    "The equation (x - 2)/3 + (x + 1)/2 = 9.",
    "What is the value of x?",
    "11",
    [
      "Multiply by 6: 2(x - 2) + 3(x + 1) = 54.",
      "Expand: 2x - 4 + 3x + 3 = 54.",
      "5x - 1 = 54, so x = 11.",
    ],
  ),
  studentResponse(
    "math-alg-exp3-linear-h1",
    ALGEBRA,
    "Hard",
    "Linear Equations",
    "0.4x + 7.2 = 0.15x + 12.2",
    "What is the value of x?",
    "20",
    [
      "Subtract 0.15x: 0.25x + 7.2 = 12.2.",
      "Subtract 7.2: 0.25x = 5.",
      "x = 20.",
    ],
  ),
  studentResponse(
    "math-alg-exp3-linear-h2",
    ALGEBRA,
    "Hard",
    "Linear Equations",
    "A number x satisfies 2(x - 5) + 3(x + 1) = 4x + 18.",
    "What is the value of x?",
    "25",
    [
      "Expand: 2x - 10 + 3x + 3 = 4x + 18.",
      "Combine: 5x - 7 = 4x + 18.",
      "x = 25.",
    ],
  ),
];

const linearFunctions: ExamQuestion[] = [
  multipleChoice(
    "math-alg-exp3-functions-m1",
    ALGEBRA,
    "Medium",
    "Linear Functions",
    "table",
    "The table shows values of a linear function f.",
    "What is the value of f(10)?",
    ["23", "27", "31", "35"],
    "31",
    [
      "The output increases by 6 when x increases by 2, so the slope is 3.",
      "Using (2, 7), f(x) = 3x + 1.",
      "f(10) = 31.",
    ],
    {
      tableData: {
        headers: ["x", "f(x)"],
        rows: [
          ["2", "7"],
          ["4", "13"],
          ["6", "19"],
          ["8", "25"],
        ],
        caption: "Values of a linear function",
      },
    },
  ),
  multipleChoice(
    "math-alg-exp3-functions-m2",
    ALGEBRA,
    "Medium",
    "Linear Functions",
    "table",
    "The table shows values of a linear function g.",
    "Which equation defines g(x)?",
    [
      "g(x) = 2x + 5",
      "g(x) = 3x - 4",
      "g(x) = 4x - 7",
      "g(x) = 5x - 8",
    ],
    "g(x) = 4x - 7",
    [
      "The output increases by 8 when x increases by 2, so the slope is 4.",
      "Using (1, -3), -3 = 4(1) + b, so b = -7.",
      "Therefore g(x) = 4x - 7.",
    ],
    {
      tableData: {
        headers: ["x", "g(x)"],
        rows: [
          ["1", "-3"],
          ["3", "5"],
          ["5", "13"],
          ["7", "21"],
        ],
        caption: "Values of a linear function",
      },
    },
  ),
];

const linearModeling: ExamQuestion[] = [
  multipleChoice(
    "math-alg-exp3-model-m1",
    ALGEBRA,
    "Medium",
    "Linear Modeling",
    "modeling",
    "A streaming service charges a one-time setup fee of $18 and $7 per month.",
    "Which equation gives the total cost C after m months?",
    [
      "C = 18m + 7",
      "C = 7m + 18",
      "C = 25m",
      "C = 7m - 18",
    ],
    "C = 7m + 18",
    [
      "The monthly rate is the coefficient of m.",
      "The setup fee is the constant term.",
      "Therefore C = 7m + 18.",
    ],
  ),
  multipleChoice(
    "math-alg-exp3-model-h1",
    ALGEBRA,
    "Hard",
    "Linear Modeling",
    "modeling",
    "A tank initially contains 260 liters of water and drains at a constant rate of 12 liters per minute.",
    "After how many minutes will 80 liters remain?",
    ["10", "12", "15", "18"],
    "15",
    [
      "Model the amount by A = 260 - 12t.",
      "Set 80 = 260 - 12t.",
      "12t = 180, so t = 15.",
    ],
  ),
];

const exponentialFunctions: ExamQuestion[] = [
  multipleChoice(
    "math-adv-exp3-exponential-e1",
    ADVANCED,
    "Easy",
    "Exponential Functions",
    "multiple-choice",
    "The function f(x) = 3·2^x.",
    "What is the value of f(4)?",
    ["24", "32", "48", "81"],
    "48",
    [
      "Substitute x = 4.",
      "f(4) = 3·2^4 = 3·16 = 48.",
    ],
  ),
  multipleChoice(
    "math-adv-exp3-exponential-m1",
    ADVANCED,
    "Medium",
    "Exponential Functions",
    "multiple-choice",
    "A population is modeled by P(t) = 500(1.08)^t.",
    "What does 1.08 represent in this model?",
    [
      "An 8% decrease each period",
      "An 8% increase each period",
      "An increase of 1.08 individuals each period",
      "An initial population of 1.08",
    ],
    "An 8% increase each period",
    [
      "A growth factor has the form 1 + r.",
      "Here 1.08 = 1 + 0.08.",
      "The population increases by 8% each period.",
    ],
  ),
  multipleChoice(
    "math-adv-exp3-exponential-m2",
    ADVANCED,
    "Medium",
    "Exponential Functions",
    "multiple-choice",
    "The equation 5·3^x = 405.",
    "What is the value of x?",
    ["3", "4", "5", "6"],
    "4",
    [
      "Divide by 5: 3^x = 81.",
      "Since 81 = 3^4, x = 4.",
    ],
  ),
  multipleChoice(
    "math-adv-exp3-exponential-h1",
    ADVANCED,
    "Hard",
    "Exponential Functions",
    "multiple-choice",
    "A quantity doubles every 3 hours. Its initial value is 40.",
    "Which expression gives the value after h hours?",
    [
      "40·2^(h/3)",
      "40·3^(h/2)",
      "80·2^h",
      "40 + 2h/3",
    ],
    "40·2^(h/3)",
    [
      "Each 3-hour interval contributes one doubling.",
      "The number of doubling intervals is h/3.",
      "The model is 40·2^(h/3).",
    ],
  ),
  multipleChoice(
    "math-adv-exp3-exponential-h2",
    ADVANCED,
    "Hard",
    "Exponential Functions",
    "multiple-choice",
    "The function g(x) = 6·4^(x-1).",
    "What is g(3)/g(1)?",
    ["4", "8", "16", "64"],
    "16",
    [
      "g(3) = 6·4^2 and g(1) = 6·4^0.",
      "Their ratio is 4^2/4^0 = 4^2 = 16.",
    ],
  ),
  multipleChoice(
    "math-adv-exp3-exponential-h3",
    ADVANCED,
    "Hard",
    "Exponential Functions",
    "multiple-choice",
    "The equation 2^(x+1) = 64.",
    "What is the value of x?",
    ["4", "5", "6", "7"],
    "5",
    [
      "64 = 2^6.",
      "Therefore x + 1 = 6.",
      "x = 5.",
    ],
  ),
];

const polynomialOperations: ExamQuestion[] = [
  multipleChoice(
    "math-adv-exp3-polynomial-e1",
    ADVANCED,
    "Easy",
    "Polynomial Operations",
    "multiple-choice",
    "Consider (x + 3)(x + 5).",
    "Which expression is equivalent?",
    [
      "x² + 8x + 15",
      "x² + 15x + 8",
      "x² + 2x + 15",
      "x² + 8",
    ],
    "x² + 8x + 15",
    [
      "Multiply each term.",
      "x² + 5x + 3x + 15 = x² + 8x + 15.",
    ],
  ),
  multipleChoice(
    "math-adv-exp3-polynomial-e2",
    ADVANCED,
    "Easy",
    "Polynomial Operations",
    "multiple-choice",
    "Consider 3x² + 7x - 4 minus (x² - 2x + 5).",
    "What is the result?",
    [
      "2x² + 5x + 1",
      "2x² + 9x - 9",
      "4x² + 5x - 9",
      "2x² - 9x + 1",
    ],
    "2x² + 9x - 9",
    [
      "Distribute the subtraction sign.",
      "3x² + 7x - 4 - x² + 2x - 5.",
      "Combine like terms to get 2x² + 9x - 9.",
    ],
  ),
];

export const mathExpansionPack3: ExamQuestion[] = [
  ...linearEquations,
  ...linearFunctions,
  ...linearModeling,
  ...exponentialFunctions,
  ...polynomialOperations,
];

export const mathExpansionPack3Stats = {
  total: mathExpansionPack3.length,
  algebra: mathExpansionPack3.filter(
    (q) => q.mathDomain === ALGEBRA,
  ).length,
  advancedMath: mathExpansionPack3.filter(
    (q) => q.mathDomain === ADVANCED,
  ).length,
  easy: mathExpansionPack3.filter(
    (q) => q.difficulty === "Easy",
  ).length,
  medium: mathExpansionPack3.filter(
    (q) => q.difficulty === "Medium",
  ).length,
  hard: mathExpansionPack3.filter(
    (q) => q.difficulty === "Hard",
  ).length,
};
