import { getBlueprint, validateBlueprint } from "./blueprint";
import type { ScoreAnswer } from "./scoreEngine";
import type { ExamQuestion } from "./types";
import {
  buildMathAdaptiveExam,
  scoreMathModule1,
} from "./mathAdaptiveEngine";
import { selectMathModule } from "./selectMathModule";

export interface MathDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface MathAdaptiveDiagnosticReport {
  passed: boolean;
  checks: MathDiagnosticCheck[];
}

function sameQuestionOrder(
  left: ExamQuestion[],
  right: ExamQuestion[],
): boolean {
  return (
    left.length === right.length &&
    left.every(
      (question, index) => question.examId === right[index]?.examId,
    )
  );
}

function hasUniqueExamIds(questions: ExamQuestion[]): boolean {
  return new Set(questions.map((question) => question.examId)).size ===
    questions.length;
}

function makeCorrectAnswer(question: ExamQuestion): ScoreAnswer {
  return {
    selected:
      question.questionType === "student-response" ? -1 : question.answer,
    typedAnswer:
      question.questionType === "student-response"
        ? question.numericAnswer ?? ""
        : undefined,
    flagged: false,
    answeredAt: 1,
  };
}

function buildCorrectAnswers(
  questions: ExamQuestion[],
): Record<string, ScoreAnswer> {
  return Object.fromEntries(
    questions.map((question) => [
      question.examId,
      makeCorrectAnswer(question),
    ]),
  );
}

function check(
  name: string,
  passed: boolean,
  details: string,
): MathDiagnosticCheck {
  return { name, passed, details };
}

/**
 * Runs deterministic, framework-independent checks against the Math
 * selector and adaptive routing engine.
 *
 * This is intended for development diagnostics. It does not replace
 * unit tests in Vitest or Jest.
 */
export function diagnoseMathAdaptiveEngine(
  seed = 4603,
): MathAdaptiveDiagnosticReport {
  const checks: MathDiagnosticCheck[] = [];

  const module1 = selectMathModule({
    module: 1,
    seed,
  });
  const module2Easy = selectMathModule({
    module: 2,
    route: "Easy",
    seed: seed + 1,
    exclude: module1.map((question) => question.examId),
  });
  const module2Hard = selectMathModule({
    module: 2,
    route: "Hard",
    seed: seed + 2,
    exclude: module1.map((question) => question.examId),
  });

  checks.push(
    check(
      "Module 1 has 22 questions",
      module1.length === 22,
      `Received ${module1.length}.`,
    ),
    check(
      "Module 2 Easy has 22 questions",
      module2Easy.length === 22,
      `Received ${module2Easy.length}.`,
    ),
    check(
      "Module 2 Hard has 22 questions",
      module2Hard.length === 22,
      `Received ${module2Hard.length}.`,
    ),
    check(
      "Module 1 IDs are unique",
      hasUniqueExamIds(module1),
      `${new Set(module1.map((question) => question.examId)).size} unique IDs.`,
    ),
    check(
      "Module 2 Easy IDs are unique",
      hasUniqueExamIds(module2Easy),
      `${new Set(module2Easy.map((question) => question.examId)).size} unique IDs.`,
    ),
    check(
      "Module 2 Hard IDs are unique",
      hasUniqueExamIds(module2Hard),
      `${new Set(module2Hard.map((question) => question.examId)).size} unique IDs.`,
    ),
  );

  const module1Ids = new Set(module1.map((question) => question.examId));
  const easyOverlap = module2Easy.filter((question) =>
    module1Ids.has(question.examId),
  );
  const hardOverlap = module2Hard.filter((question) =>
    module1Ids.has(question.examId),
  );

  checks.push(
    check(
      "Module 2 Easy excludes Module 1",
      easyOverlap.length === 0,
      easyOverlap.length
        ? `Overlapping IDs: ${easyOverlap.map((question) => question.examId).join(", ")}.`
        : "No overlap.",
    ),
    check(
      "Module 2 Hard excludes Module 1",
      hardOverlap.length === 0,
      hardOverlap.length
        ? `Overlapping IDs: ${hardOverlap.map((question) => question.examId).join(", ")}.`
        : "No overlap.",
    ),
  );

  const repeatedModule1 = selectMathModule({
    module: 1,
    seed,
  });

  checks.push(
    check(
      "Selection is deterministic for the same seed",
      sameQuestionOrder(module1, repeatedModule1),
      "Compared Module 1 examId order.",
    ),
  );

  const module1Validation = validateBlueprint(
    module1,
    getBlueprint("Math", "Medium", 22),
  );
  const easyValidation = validateBlueprint(
    module2Easy,
    getBlueprint("Math", "Easy", 22),
  );
  const hardValidation = validateBlueprint(
    module2Hard,
    getBlueprint("Math", "Hard", 22),
  );

  checks.push(
    check(
      "Module 1 satisfies required blueprint constraints",
      module1Validation.valid,
      module1Validation.errors.join(" ") || "No blueprint errors.",
    ),
    check(
      "Module 2 Easy satisfies required blueprint constraints",
      easyValidation.valid,
      easyValidation.errors.join(" ") || "No blueprint errors.",
    ),
    check(
      "Module 2 Hard satisfies required blueprint constraints",
      hardValidation.valid,
      hardValidation.errors.join(" ") || "No blueprint errors.",
    ),
  );

  const correctAnswers = buildCorrectAnswers(module1);
  const allCorrectResult = scoreMathModule1(module1, correctAnswers);
  const emptyResult = scoreMathModule1(module1, {});

  checks.push(
    check(
      "All-correct Module 1 routes Hard",
      allCorrectResult.correct === module1.length &&
        allCorrectResult.unanswered === 0 &&
        allCorrectResult.route === "Hard",
      `${allCorrectResult.correct}/${allCorrectResult.total}, route ${allCorrectResult.route}.`,
    ),
    check(
      "Empty Module 1 routes Easy",
      emptyResult.correct === 0 &&
        emptyResult.unanswered === module1.length &&
        emptyResult.route === "Easy",
      `${emptyResult.correct}/${emptyResult.total}, ${emptyResult.unanswered} unanswered, route ${emptyResult.route}.`,
    ),
  );

  const exam = buildMathAdaptiveExam({
    module1Seed: seed,
    module2Seed: seed + 10,
  });
  const adaptiveModule2 = exam.buildModule2(
    buildCorrectAnswers(exam.module1),
  );

  checks.push(
    check(
      "Adaptive exam builds Hard Module 2 after perfect Module 1",
      adaptiveModule2.route === "Hard" &&
        adaptiveModule2.questions.length === 22,
      `Route ${adaptiveModule2.route}; ${adaptiveModule2.questions.length} questions.`,
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
