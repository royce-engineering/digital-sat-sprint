import {
  assembleFullSat,
} from "./fullSatAssemblyAudit";
import {
  estimateSatScore,
  estimateSectionScore,
  isScoreAnswerCorrect,
  type ScoreAnswer,
  type ScoreModule,
} from "./scoreEngine";
import type {
  ExamQuestion,
} from "./types";

export interface ScoreConsistencyCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface ScoreConsistencyReport {
  passed: boolean;
  checks: ScoreConsistencyCheck[];
}

function idOf(
  question: ExamQuestion,
): string {
  return question.examId || question.id;
}

function correctAnswer(
  question: ExamQuestion,
): ScoreAnswer {
  if (
    question.questionType ===
    "student-response"
  ) {
    return {
      selected: -1,
      typedAnswer:
        question.numericAnswer ?? "",
      flagged: false,
      answeredAt: 1,
    };
  }

  return {
    selected: question.answer,
    typedAnswer: "",
    flagged: false,
    answeredAt: 1,
  };
}

function wrongAnswer(
  question: ExamQuestion,
): ScoreAnswer {
  if (
    question.questionType ===
    "student-response"
  ) {
    return {
      selected: -1,
      typedAnswer:
        "__wrong__",
      flagged: false,
      answeredAt: 1,
    };
  }

  return {
    selected:
      question.choices.length > 1
        ? (
            question.answer + 1
          ) %
          question.choices.length
        : -1,
    typedAnswer: "",
    flagged: false,
    answeredAt: 1,
  };
}

function buildAnswers(
  questions: readonly ExamQuestion[],
  correctCount: number,
): Record<string, ScoreAnswer> {
  const answers:
    Record<string, ScoreAnswer> = {};

  questions.forEach(
    (question, index) => {
      answers[question.examId] =
        index < correctCount
          ? correctAnswer(
              question,
            )
          : wrongAnswer(
              question,
            );
    },
  );

  return answers;
}

function scoreModules(
  assembly: ReturnType<
    typeof assembleFullSat
  >,
): ScoreModule[] {
  return [
    {
      key: "reading-module-1",
      title: "Reading Module 1",
      section:
        "Reading & Writing",
      difficulty: "Medium",
      questionIds:
        assembly.readingModule1.map(
          idOf,
        ),
    },
    {
      key: "reading-module-2",
      title: "Reading Module 2",
      section:
        "Reading & Writing",
      difficulty: "Hard",
      questionIds:
        assembly.readingModule2.map(
          idOf,
        ),
    },
    {
      key: "math-module-1",
      title: "Math Module 1",
      section: "Math",
      difficulty: "Medium",
      questionIds:
        assembly.mathModule1.map(
          idOf,
        ),
    },
    {
      key: "math-module-2",
      title: "Math Module 2",
      section: "Math",
      difficulty: "Easy",
      questionIds:
        assembly.mathModule2.map(
          idOf,
        ),
    },
  ];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): ScoreConsistencyCheck {
  return {
    name,
    passed,
    details,
  };
}

export function runScoreResultAssemblyConsistency(): ScoreConsistencyReport {
  const checks:
    ScoreConsistencyCheck[] = [];

  const assembly =
    assembleFullSat(
      55_501,
      "Hard",
      "Easy",
    );

  const allQuestions = [
    ...assembly.readingModule1,
    ...assembly.readingModule2,
    ...assembly.mathModule1,
    ...assembly.mathModule2,
  ];

  const readingQuestions = [
    ...assembly.readingModule1,
    ...assembly.readingModule2,
  ];

  const mathQuestions = [
    ...assembly.mathModule1,
    ...assembly.mathModule2,
  ];

  const readingCorrectTarget =
    Math.floor(
      readingQuestions.length *
        0.7,
    );

  const mathCorrectTarget =
    Math.floor(
      mathQuestions.length *
        0.6,
    );

  const answers = {
    ...buildAnswers(
      readingQuestions,
      readingCorrectTarget,
    ),
    ...buildAnswers(
      mathQuestions,
      mathCorrectTarget,
    ),
  };

  const modules =
    scoreModules(assembly);

  const readingStandalone =
    estimateSectionScore(
      "Reading & Writing",
      modules,
      answers,
    );

  const mathStandalone =
    estimateSectionScore(
      "Math",
      modules,
      answers,
    );

  const full =
    estimateSatScore(
      modules,
      answers,
    );

  checks.push(
    check(
      "Reading correct count matches independent evaluation",
      readingStandalone.correct ===
        readingCorrectTarget,
      `expected=${readingCorrectTarget}; actual=${readingStandalone.correct}`,
    ),
  );

  checks.push(
    check(
      "Math correct count matches independent evaluation",
      mathStandalone.correct ===
        mathCorrectTarget,
      `expected=${mathCorrectTarget}; actual=${mathStandalone.correct}`,
    ),
  );

  checks.push(
    check(
      "Full SAT Reading result matches standalone section result",
      full.readingWriting
        .bestEstimate ===
        readingStandalone
          .bestEstimate &&
        full.readingWriting.correct ===
          readingStandalone.correct &&
        full.readingWriting
          .unanswered ===
          readingStandalone
            .unanswered &&
        full.readingWriting
          .module2Path ===
          readingStandalone
            .module2Path,
      `full=${full.readingWriting.bestEstimate}; standalone=${readingStandalone.bestEstimate}`,
    ),
  );

  checks.push(
    check(
      "Full SAT Math result matches standalone section result",
      full.math.bestEstimate ===
        mathStandalone
          .bestEstimate &&
        full.math.correct ===
          mathStandalone.correct &&
        full.math.unanswered ===
          mathStandalone
            .unanswered &&
        full.math.module2Path ===
          mathStandalone
            .module2Path,
      `full=${full.math.bestEstimate}; standalone=${mathStandalone.bestEstimate}`,
    ),
  );

  checks.push(
    check(
      "Best total equals section best estimates",
      full.bestTotal ===
        full.readingWriting
          .bestEstimate +
          full.math.bestEstimate,
      `${full.bestTotal} = ${full.readingWriting.bestEstimate} + ${full.math.bestEstimate}`,
    ),
  );

  checks.push(
    check(
      "Low total equals section low estimates",
      full.lowTotal ===
        full.readingWriting
          .lowEstimate +
          full.math.lowEstimate,
      `${full.lowTotal} = ${full.readingWriting.lowEstimate} + ${full.math.lowEstimate}`,
    ),
  );

  checks.push(
    check(
      "High total equals section high estimates",
      full.highTotal ===
        full.readingWriting
          .highEstimate +
          full.math.highEstimate,
      `${full.highTotal} = ${full.readingWriting.highEstimate} + ${full.math.highEstimate}`,
    ),
  );

  checks.push(
    check(
      "Module 2 paths match assembly routes",
      full.readingWriting
        .module2Path ===
        "Hard" &&
        full.math.module2Path ===
          "Easy",
      `reading=${full.readingWriting.module2Path}; math=${full.math.module2Path}`,
    ),
  );

  checks.push(
    check(
      "All assembled answers resolve to known questions",
      Object.keys(
        answers,
      ).length ===
        allQuestions.length &&
        allQuestions.every(
          (question) =>
            Boolean(
              answers[
                question.examId
              ],
            ),
        ),
      `answers=${Object.keys(answers).length}; questions=${allQuestions.length}`,
    ),
  );

  const independentCorrect =
    allQuestions.filter(
      (question) =>
        isScoreAnswerCorrect(
          question,
          answers[
            question.examId
          ],
        ),
    ).length;

  checks.push(
    check(
      "Combined correct count equals section totals",
      independentCorrect ===
        full.readingWriting.correct +
          full.math.correct,
      `independent=${independentCorrect}; sections=${full.readingWriting.correct + full.math.correct}`,
    ),
  );

  checks.push(
    check(
      "Section score bands are internally ordered",
      full.readingWriting
        .lowEstimate <=
        full.readingWriting
          .bestEstimate &&
        full.readingWriting
          .bestEstimate <=
          full.readingWriting
            .highEstimate &&
        full.math.lowEstimate <=
          full.math.bestEstimate &&
        full.math.bestEstimate <=
          full.math.highEstimate,
      `RW ${full.readingWriting.lowEstimate}/${full.readingWriting.bestEstimate}/${full.readingWriting.highEstimate}; Math ${full.math.lowEstimate}/${full.math.bestEstimate}/${full.math.highEstimate}`,
    ),
  );

  checks.push(
    check(
      "Total score band is internally ordered",
      full.lowTotal <=
        full.bestTotal &&
        full.bestTotal <=
          full.highTotal,
      `${full.lowTotal}/${full.bestTotal}/${full.highTotal}`,
    ),
  );

  return {
    passed:
      checks.every(
        (item) =>
          item.passed,
      ),
    checks,
  };
}
