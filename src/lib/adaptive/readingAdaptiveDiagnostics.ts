import type { ExamQuestion } from "./types";
import type { ScoreAnswer } from "./scoreEngine";
import {
  buildReadingAdaptiveExam,
  scoreReadingModule1,
} from "./readingAdaptiveEngine";
import { selectReadingModule } from "./selectModule";

export interface ReadingAdaptiveDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface ReadingAdaptiveDiagnosticReport {
  passed: boolean;
  checks: ReadingAdaptiveDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): ReadingAdaptiveDiagnosticCheck {
  return { name, passed, details };
}

function sameOrder(
  left: ExamQuestion[],
  right: ExamQuestion[],
): boolean {
  return (
    left.length === right.length &&
    left.every(
      (question, index) =>
        question.examId === right[index]?.examId,
    )
  );
}

function correctAnswer(question: ExamQuestion): ScoreAnswer {
  return {
    selected:
      question.questionType === "student-response"
        ? -1
        : question.answer,
    typedAnswer:
      question.questionType === "student-response"
        ? question.numericAnswer ?? ""
        : undefined,
    flagged: false,
    answeredAt: 1,
  };
}

function answerMap(
  questions: ExamQuestion[],
): Record<string, ScoreAnswer> {
  return Object.fromEntries(
    questions.map((question) => [
      question.examId,
      correctAnswer(question),
    ]),
  );
}

export function diagnoseReadingAdaptiveEngine(
  seed = 4705,
): ReadingAdaptiveDiagnosticReport {
  const checks: ReadingAdaptiveDiagnosticCheck[] = [];

  const module1 = selectReadingModule({
    module: 1,
    seed,
  });
  const repeatedModule1 = selectReadingModule({
    module: 1,
    seed,
  });

  checks.push(
    check(
      "Module 1 selection is deterministic",
      sameOrder(module1, repeatedModule1),
      `Compared ${module1.length} examId values.`,
    ),
  );

  const module1Ids = new Set(
    module1.map((question) => question.examId),
  );

  const easy = selectReadingModule({
    module: 2,
    route: "Easy",
    seed: seed + 1,
    exclude: [...module1Ids],
  });
  const hard = selectReadingModule({
    module: 2,
    route: "Hard",
    seed: seed + 2,
    exclude: [...module1Ids],
  });

  const easyOverlap = easy.filter((question) =>
    module1Ids.has(question.examId),
  );
  const hardOverlap = hard.filter((question) =>
    module1Ids.has(question.examId),
  );

  checks.push(
    check(
      "Module 2 Easy excludes Module 1 by examId",
      easyOverlap.length === 0,
      easyOverlap.length
        ? `Overlap: ${easyOverlap
            .map((question) => question.examId)
            .join(", ")}`
        : "No overlap.",
    ),
    check(
      "Module 2 Hard excludes Module 1 by examId",
      hardOverlap.length === 0,
      hardOverlap.length
        ? `Overlap: ${hardOverlap
            .map((question) => question.examId)
            .join(", ")}`
        : "No overlap.",
    ),
  );

  const perfect = scoreReadingModule1(
    module1,
    answerMap(module1),
  );
  const empty = scoreReadingModule1(module1, {});

  checks.push(
    check(
      "Perfect Module 1 routes Hard",
      perfect.correct === module1.length &&
        perfect.route === "Hard",
      `${perfect.correct}/${perfect.total}; route ${perfect.route}.`,
    ),
    check(
      "Empty Module 1 routes Easy",
      empty.correct === 0 &&
        empty.unanswered === module1.length &&
        empty.route === "Easy",
      `${empty.correct}/${empty.total}; ${empty.unanswered} unanswered; route ${empty.route}.`,
    ),
  );

  const exam = buildReadingAdaptiveExam({
    module1Seed: seed,
    module2Seed: seed + 10,
  });
  const module2 = exam.buildModule2(
    answerMap(exam.module1),
  );
  const examModule1Ids = new Set(
    exam.module1.map((question) => question.examId),
  );

  checks.push(
    check(
      "End-to-end Reading Module 2 has no overlap",
      module2.questions.every(
        (question) => !examModule1Ids.has(question.examId),
      ),
      `${module2.questions.length} Module 2 questions checked.`,
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
