import type { ExamDifficulty, ExamQuestion } from "./types";

const ADVANCED = "Advanced Math" as const;
const PSDA = "Problem Solving and Data Analysis" as const;

function choice(text: string, correct: boolean, explanation: string) {
  return {
    text,
    rationale: correct
      ? explanation
      : "This option results from an incorrect setup, transformation, or interpretation.",
  };
}

function baseQuestion(
  id: string,
  domain: typeof ADVANCED | typeof PSDA,
  difficulty: ExamDifficulty,
  skill: string,
  questionType: "multiple-choice" | "student-response" | "table" | "modeling",
): Omit<ExamQuestion, "passage" | "prompt" | "choices" | "answer"> {
  return {
    id,
    examId: id,
    section: "Math",
    courseId: "math-expansion-phase2-2",
    courseTitle: `Math Expansion · ${skill}`,
    difficulty,
    skill,
    mathDomain: domain,
    questionType,
    calculatorRecommended:
      difficulty === "Hard" ||
      questionType === "table" ||
      questionType === "modeling",
    estimatedTime: questionType === "student-response" ? 100 : 95,
    tags: ["math-expansion", domain, skill, difficulty, questionType],
  };
}

function multipleChoice(
  id: string,
  domain: typeof ADVANCED | typeof PSDA,
  difficulty: ExamDifficulty,
  skill: string,
  questionType: "multiple-choice" | "table" | "modeling",
  passage: string,
  prompt: string,
  options: string[],
  correctText: string,
  walkthrough: string[],
  extra?: Pick<ExamQuestion, "tableData">,
): ExamQuestion {
  const answer = options.indexOf(correctText);

  if (options.length !== 4 || answer < 0 || new Set(options).size !== 4) {
    throw new Error(`Invalid choices for ${id}.`);
  }

  return {
    ...baseQuestion(id, domain, difficulty, skill, questionType),
    passage,
    prompt,
    choices: options.map((text, index) =>
      choice(text, index === answer, walkthrough[walkthrough.length - 1]),
    ),
    answer,
    walkthrough,
    ...extra,
  };
}

function studentResponse(
  id: string,
  domain: typeof ADVANCED | typeof PSDA,
  difficulty: ExamDifficulty,
  skill: string,
  passage: string,
  prompt: string,
  numericAnswer: string,
  walkthrough: string[],
): ExamQuestion {
  return {
    ...baseQuestion(id, domain, difficulty, skill, "student-response"),
    passage,
    prompt,
    choices: [],
    answer: -1,
    numericAnswer,
    walkthrough,
  };
}

const polynomialOperations: ExamQuestion[] = [
  multipleChoice(
    "math-adv-exp4-polynomial-h1",
    ADVANCED,
    "Hard",
    "Polynomial Operations",
    "multiple-choice",
    "The polynomial x³ - 4x² - x + 4 is factored by grouping.",
    "Which expression is equivalent to the polynomial?",
    [
      "(x - 4)(x² - 1)",
      "(x + 4)(x² - 1)",
      "(x - 1)(x² - 4)",
      "(x + 1)(x² - 4)",
    ],
    "(x - 4)(x² - 1)",
    [
      "Group the terms: x²(x - 4) - 1(x - 4).",
      "Factor out the common binomial.",
      "The result is (x - 4)(x² - 1).",
    ],
  ),
  multipleChoice(
    "math-adv-exp4-polynomial-h2",
    ADVANCED,
    "Hard",
    "Polynomial Operations",
    "multiple-choice",
    "For x ≠ 3, consider the expression (x² - 9)/(x - 3).",
    "Which expression is equivalent to the given expression?",
    ["x - 3", "x + 3", "x² + 3", "1"],
    "x + 3",
    [
      "Factor the numerator: x² - 9 = (x - 3)(x + 3).",
      "Cancel the common factor x - 3.",
      "The expression simplifies to x + 3.",
    ],
  ),
];

const radicalEquations: ExamQuestion[] = [
  multipleChoice(
    "math-adv-exp4-radical-e1",
    ADVANCED,
    "Easy",
    "Radical Equations",
    "multiple-choice",
    "The equation √x = 9.",
    "What is the value of x?",
    ["3", "18", "81", "162"],
    "81",
    ["Square both sides.", "x = 9² = 81."],
  ),
  multipleChoice(
    "math-adv-exp4-radical-e2",
    ADVANCED,
    "Easy",
    "Radical Equations",
    "multiple-choice",
    "The expression √50 is simplified.",
    "Which expression is equivalent to √50?",
    ["2√5", "5√2", "10√5", "25√2"],
    "5√2",
    ["Factor 50 as 25·2.", "√50 = √25·√2 = 5√2."],
  ),
  multipleChoice(
    "math-adv-exp4-radical-m1",
    ADVANCED,
    "Medium",
    "Radical Equations",
    "multiple-choice",
    "The equation √(3x + 1) = 7.",
    "What is the value of x?",
    ["8", "12", "16", "24"],
    "16",
    ["Square both sides: 3x + 1 = 49.", "Then 3x = 48.", "x = 16."],
  ),
  multipleChoice(
    "math-adv-exp4-radical-h1",
    ADVANCED,
    "Hard",
    "Radical Equations",
    "multiple-choice",
    "The equation √(x + 6) = x.",
    "What is the positive solution?",
    ["2", "3", "4", "6"],
    "3",
    [
      "Square both sides: x + 6 = x².",
      "Rearrange: x² - x - 6 = 0.",
      "Factor: (x - 3)(x + 2) = 0.",
      "The positive solution is x = 3.",
    ],
  ),
];

const quadraticEquations: ExamQuestion[] = [
  studentResponse(
    "math-adv-exp4-quadratic-e1",
    ADVANCED,
    "Easy",
    "Quadratic Equations",
    "x² = 49 and x is positive.",
    "What is the value of x?",
    "7",
    ["Take the positive square root of both sides.", "x = 7."],
  ),
  studentResponse(
    "math-adv-exp4-quadratic-m1",
    ADVANCED,
    "Medium",
    "Quadratic Equations",
    "The equation x² - 11x + 24 = 0 has two positive solutions.",
    "What is the larger solution?",
    "8",
    [
      "Factor the quadratic.",
      "x² - 11x + 24 = (x - 3)(x - 8).",
      "The solutions are 3 and 8, so the larger solution is 8.",
    ],
  ),
  studentResponse(
    "math-adv-exp4-quadratic-h1",
    ADVANCED,
    "Hard",
    "Quadratic Equations",
    "The equation 2x² - 7x + 3 = 0 has two solutions.",
    "What is the larger solution?",
    "3",
    [
      "Factor: 2x² - 7x + 3 = (2x - 1)(x - 3).",
      "The solutions are 1/2 and 3.",
      "The larger solution is 3.",
    ],
  ),
  studentResponse(
    "math-adv-exp4-quadratic-h2",
    ADVANCED,
    "Hard",
    "Quadratic Equations",
    "The vertex of y = x² - 10x + 21 has x-coordinate h.",
    "What is the value of h?",
    "5",
    [
      "For y = ax² + bx + c, the vertex x-coordinate is -b/(2a).",
      "Here a = 1 and b = -10.",
      "h = 10/2 = 5.",
    ],
  ),
];

const dataModeling: ExamQuestion[] = [
  multipleChoice(
    "math-psda-exp4-data-m1",
    PSDA,
    "Medium",
    "Data Modeling",
    "table",
    "The table shows the number of hours studied and the corresponding test score for four students.",
    "Which statement is best supported by the table?",
    [
      "Test score decreases as study time increases.",
      "Test score generally increases as study time increases.",
      "All students earn the same score.",
      "Study time and score have no apparent relationship.",
    ],
    "Test score generally increases as study time increases.",
    [
      "Compare the ordered pairs in the table.",
      "As study time rises from 1 to 4 hours, the scores rise from 68 to 88.",
      "The data support a positive association.",
    ],
    {
      tableData: {
        headers: ["Hours studied", "Test score"],
        rows: [
          ["1", "68"],
          ["2", "74"],
          ["3", "81"],
          ["4", "88"],
        ],
        caption: "Study time and test score",
      },
    },
  ),
  multipleChoice(
    "math-psda-exp4-data-h1",
    PSDA,
    "Hard",
    "Data Modeling",
    "table",
    "The table shows values from a linear model.",
    "What is the predicted value of y when x = 12?",
    ["31", "34", "37", "40"],
    "37",
    [
      "The y-values increase by 6 when x increases by 2, so the slope is 3.",
      "Using (2, 7), the model is y = 3x + 1.",
      "At x = 12, y = 37.",
    ],
    {
      tableData: {
        headers: ["x", "y"],
        rows: [
          ["2", "7"],
          ["4", "13"],
          ["6", "19"],
          ["8", "25"],
        ],
        caption: "Values from a linear model",
      },
    },
  ),
];

const ratios: ExamQuestion[] = [
  studentResponse(
    "math-psda-exp4-ratios-e1",
    PSDA,
    "Easy",
    "Ratios",
    "A store discounts a $60 item by 25%.",
    "What is the sale price, in dollars?",
    "45",
    [
      "A 25% discount is 0.25(60) = 15.",
      "Subtract the discount from the original price.",
      "60 - 15 = 45.",
    ],
  ),
  studentResponse(
    "math-psda-exp4-ratios-h1",
    PSDA,
    "Hard",
    "Ratios",
    "A solution contains acid and water in a ratio of 3:7. The solution contains 42 liters of water.",
    "How many liters of acid does the solution contain?",
    "18",
    [
      "Seven ratio parts correspond to 42 liters.",
      "Each part is 42/7 = 6 liters.",
      "Acid is 3 parts, so 3·6 = 18 liters.",
    ],
  ),
];

const linearModeling: ExamQuestion[] = [
  multipleChoice(
    "math-psda-exp4-model-e1",
    PSDA,
    "Easy",
    "Linear Modeling",
    "modeling",
    "A taxi charges a base fee of $4 plus $3 per mile.",
    "Which expression gives the cost C of a trip of m miles?",
    ["C = 4m + 3", "C = 3m + 4", "C = 7m", "C = 3m - 4"],
    "C = 3m + 4",
    [
      "The per-mile rate is the coefficient of m.",
      "The base fee is the constant term.",
      "Therefore C = 3m + 4.",
    ],
  ),
  multipleChoice(
    "math-psda-exp4-model-m1",
    PSDA,
    "Medium",
    "Linear Modeling",
    "modeling",
    "A reservoir contains 900 gallons and loses water at a constant rate of 25 gallons per hour.",
    "Which equation gives the amount A remaining after h hours?",
    ["A = 900 + 25h", "A = 25h - 900", "A = 900 - 25h", "A = 875h"],
    "A = 900 - 25h",
    [
      "The initial amount is 900.",
      "The amount decreases by 25 each hour.",
      "Therefore A = 900 - 25h.",
    ],
  ),
  multipleChoice(
    "math-psda-exp4-model-h1",
    PSDA,
    "Hard",
    "Linear Modeling",
    "modeling",
    "Company A charges $35 plus $8 per hour. Company B charges $59 plus $5 per hour.",
    "After how many hours do the companies charge the same amount?",
    ["6", "8", "10", "12"],
    "8",
    [
      "Set the cost expressions equal.",
      "35 + 8h = 59 + 5h.",
      "3h = 24, so h = 8.",
    ],
  ),
  multipleChoice(
    "math-psda-exp4-model-h2",
    PSDA,
    "Hard",
    "Linear Modeling",
    "modeling",
    "A machine is worth $24,000 and loses $1,500 in value each year.",
    "After how many years will the machine be worth $12,000?",
    ["6", "8", "10", "12"],
    "8",
    [
      "Model the value by V = 24000 - 1500t.",
      "Set 12000 = 24000 - 1500t.",
      "1500t = 12000, so t = 8.",
    ],
  ),
];

export const mathExpansionPack4: ExamQuestion[] = [
  ...polynomialOperations,
  ...radicalEquations,
  ...quadraticEquations,
  ...dataModeling,
  ...ratios,
  ...linearModeling,
];

export const mathExpansionPack4Stats = {
  total: mathExpansionPack4.length,
  advancedMath: mathExpansionPack4.filter(
    (question) => question.mathDomain === ADVANCED,
  ).length,
  problemSolvingAndDataAnalysis: mathExpansionPack4.filter(
    (question) => question.mathDomain === PSDA,
  ).length,
  easy: mathExpansionPack4.filter((question) => question.difficulty === "Easy")
    .length,
  medium: mathExpansionPack4.filter(
    (question) => question.difficulty === "Medium",
  ).length,
  hard: mathExpansionPack4.filter((question) => question.difficulty === "Hard")
    .length,
};
