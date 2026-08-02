import type {
  ExamQuestion,
} from "./types";

export interface MathAnswerIntegrityIssue {
  questionId: string;
  questionType: string;
  expectedAnswer: string;
  storedAnswer: string;
  message: string;
}

export interface MathWalkthroughGenerationResult {
  questions: ExamQuestion[];
  generatedIds: string[];
  unsupportedIds: string[];
  answerIssues: MathAnswerIntegrityIssue[];
}

function idOf(
  question: ExamQuestion,
): string {
  return question.examId || question.id;
}

function numericValue(
  value: string,
): number | null {
  const cleaned = value
    .replace(/[$,%\s]/g, "")
    .trim();

  if (!cleaned) return null;

  const parsed = Number(cleaned);
  return Number.isFinite(parsed)
    ? parsed
    : null;
}

function approximatelyEqual(
  left: number,
  right: number,
): boolean {
  return Math.abs(left - right) < 1e-9;
}

function displayedNumber(
  value: number,
): string {
  return Number.isInteger(value)
    ? String(value)
    : String(
        Math.round(value * 100) /
          100,
      );
}

function storedChoiceValue(
  question: ExamQuestion,
): string {
  return (
    question.choices[
      question.answer
    ]?.text ?? ""
  );
}

function modelingWalkthrough(
  question: ExamQuestion,
): {
  expected: number;
  steps: string[];
} | null {
  const passageMatch =
    /fixed fee of \$([0-9.]+) plus \$([0-9.]+) per hour/i.exec(
      question.passage,
    );
  const promptMatch =
    /for ([0-9.]+) hours?/i.exec(
      question.prompt,
    );

  if (
    !passageMatch ||
    !promptMatch
  ) {
    return null;
  }

  const fixed =
    Number(passageMatch[1]);
  const rate =
    Number(passageMatch[2]);
  const hours =
    Number(promptMatch[1]);

  if (
    !Number.isFinite(fixed) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(hours)
  ) {
    return null;
  }

  const variableCost =
    rate * hours;
  const total =
    fixed + variableCost;

  return {
    expected: total,
    steps: [
      `Use total cost = fixed fee + hourly rate × hours.`,
      `Variable cost = ${displayedNumber(rate)} × ${displayedNumber(hours)} = ${displayedNumber(variableCost)}.`,
      `Total cost = ${displayedNumber(fixed)} + ${displayedNumber(variableCost)} = ${displayedNumber(total)}.`,
    ],
  };
}

function tableWalkthrough(
  question: ExamQuestion,
): {
  expected: number;
  steps: string[];
} | null {
  const rows =
    question.tableData?.rows;

  if (!rows || rows.length < 2) {
    return null;
  }

  const x1 =
    Number(rows[0][0]);
  const y1 =
    Number(rows[0][1]);
  const x2 =
    Number(rows[1][0]);
  const y2 =
    Number(rows[1][1]);

  const promptMatch =
    /x\s*=\s*(-?[0-9.]+)/i.exec(
      question.prompt,
    );

  if (
    !promptMatch ||
    ![
      x1,
      y1,
      x2,
      y2,
    ].every(Number.isFinite) ||
    x2 === x1
  ) {
    return null;
  }

  const target =
    Number(promptMatch[1]);
  const slope =
    (y2 - y1) /
    (x2 - x1);
  const intercept =
    y1 - slope * x1;
  const expected =
    slope * target +
    intercept;

  return {
    expected,
    steps: [
      `Find the slope from two table rows: (${displayedNumber(y2)} - ${displayedNumber(y1)}) ÷ (${displayedNumber(x2)} - ${displayedNumber(x1)}) = ${displayedNumber(slope)}.`,
      `Use y = ${displayedNumber(slope)}x + ${displayedNumber(intercept)}.`,
      `For x = ${displayedNumber(target)}, y = ${displayedNumber(expected)}.`,
    ],
  };
}

function graphWalkthrough(
  question: ExamQuestion,
): {
  expected: number;
  steps: string[];
} | null {
  const points =
    question.graphData?.points;

  if (!points || points.length < 2) {
    return null;
  }

  const [x1, y1] =
    points[0];
  const second =
    points.find(
      ([x]) => x !== x1,
    );

  if (!second) return null;

  const [x2, y2] =
    second;
  const expected =
    (y2 - y1) /
    (x2 - x1);

  return {
    expected,
    steps: [
      `Choose two points on the line: (${displayedNumber(x1)}, ${displayedNumber(y1)}) and (${displayedNumber(x2)}, ${displayedNumber(y2)}).`,
      `Slope = change in y ÷ change in x.`,
      `m = (${displayedNumber(y2)} - ${displayedNumber(y1)}) ÷ (${displayedNumber(x2)} - ${displayedNumber(x1)}) = ${displayedNumber(expected)}.`,
    ],
  };
}

function generatedSolution(
  question: ExamQuestion,
): {
  expected: number;
  steps: string[];
} | null {
  switch (
    question.questionType
  ) {
    case "modeling":
      return modelingWalkthrough(
        question,
      );
    case "table":
      return tableWalkthrough(
        question,
      );
    case "graph":
      return graphWalkthrough(
        question,
      );
    default:
      return null;
  }
}

export function generateVerifiedMathWalkthroughs(
  questions: readonly ExamQuestion[],
): MathWalkthroughGenerationResult {
  const generatedIds: string[] =
    [];
  const unsupportedIds: string[] =
    [];
  const answerIssues:
    MathAnswerIntegrityIssue[] = [];

  const migrated =
    questions.map(
      (question): ExamQuestion => {
        if (
          question.walkthrough
            ?.length
        ) {
          return question;
        }

        const solution =
          generatedSolution(
            question,
          );
        const questionId =
          idOf(question);

        if (!solution) {
          unsupportedIds.push(
            questionId,
          );
          return question;
        }

        const storedText =
          storedChoiceValue(
            question,
          );
        const storedNumber =
          numericValue(
            storedText,
          );

        if (
          storedNumber === null ||
          !approximatelyEqual(
            solution.expected,
            storedNumber,
          )
        ) {
          answerIssues.push({
            questionId,
            questionType:
              question.questionType ??
              "(missing)",
            expectedAnswer:
              displayedNumber(
                solution.expected,
              ),
            storedAnswer:
              storedText,
            message:
              "The independently computed answer does not match the stored correct choice.",
          });

          return question;
        }

        generatedIds.push(
          questionId,
        );

        return {
          ...question,
          walkthrough:
            solution.steps,
        };
      },
    );

  return {
    questions: migrated,
    generatedIds,
    unsupportedIds,
    answerIssues,
  };
}
