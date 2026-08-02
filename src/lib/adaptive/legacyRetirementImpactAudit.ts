import {
  readingWritingBank,
} from "./questionBank";
import type {
  ExamDifficulty,
  ExamQuestion,
} from "./types";

export interface RetirementCoverageRow {
  skill: string;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  targetEasy: number;
  targetMedium: number;
  targetHard: number;
  addEasy: number;
  addMedium: number;
  addHard: number;
  totalAdditions: number;
}

export interface LegacyRetirementImpactReport {
  rawQuestions: number;
  retainedQuestions: number;
  removedQuestions: number;
  removedRwVocab: number;
  removedRwGrammarExtra: number;
  coverage: RetirementCoverageRow[];
  totalRequiredAdditions: number;
  affectedSkills: RetirementCoverageRow[];
}

const TARGETS: Record<
  ExamDifficulty,
  number
> = {
  Easy: 8,
  Medium: 10,
  Hard: 10,
};

function isRetiredLegacyQuestion(
  question: ExamQuestion,
): boolean {
  const id =
    question.examId ||
    question.id;

  return (
    id.startsWith("rw-vocab-") ||
    id.startsWith(
      "rw-grammar-extra-",
    )
  );
}

function skillOf(
  question: ExamQuestion,
): string | undefined {
  return (
    question.blueprint?.skill ??
    question.skill
  )?.trim();
}

export function auditLegacyRetirementImpact(
  questions: readonly ExamQuestion[] =
    readingWritingBank,
): LegacyRetirementImpactReport {
  const removed = questions.filter(
    isRetiredLegacyQuestion,
  );
  const retained = questions.filter(
    (question) =>
      !isRetiredLegacyQuestion(
        question,
      ),
  );

  const skills = [
    ...new Set(
      retained
        .map(skillOf)
        .filter(
          (
            value,
          ): value is string =>
            Boolean(value),
        ),
    ),
  ];

  const coverage = skills
    .map(
      (
        skill,
      ): RetirementCoverageRow => {
        const items =
          retained.filter(
            (question) =>
              skillOf(question) ===
              skill,
          );

        const easy =
          items.filter(
            (question) =>
              question.difficulty ===
              "Easy",
          ).length;
        const medium =
          items.filter(
            (question) =>
              question.difficulty ===
              "Medium",
          ).length;
        const hard =
          items.filter(
            (question) =>
              question.difficulty ===
              "Hard",
          ).length;

        const addEasy = Math.max(
          0,
          TARGETS.Easy - easy,
        );
        const addMedium = Math.max(
          0,
          TARGETS.Medium - medium,
        );
        const addHard = Math.max(
          0,
          TARGETS.Hard - hard,
        );

        return {
          skill,
          easy,
          medium,
          hard,
          total:
            easy +
            medium +
            hard,
          targetEasy:
            TARGETS.Easy,
          targetMedium:
            TARGETS.Medium,
          targetHard:
            TARGETS.Hard,
          addEasy,
          addMedium,
          addHard,
          totalAdditions:
            addEasy +
            addMedium +
            addHard,
        };
      },
    )
    .sort(
      (left, right) =>
        right.totalAdditions -
          left.totalAdditions ||
        left.skill.localeCompare(
          right.skill,
        ),
    );

  const affectedSkills =
    coverage.filter(
      (row) =>
        row.totalAdditions > 0,
    );

  return {
    rawQuestions:
      questions.length,
    retainedQuestions:
      retained.length,
    removedQuestions:
      removed.length,
    removedRwVocab:
      removed.filter(
        (question) =>
          (
            question.examId ||
            question.id
          ).startsWith(
            "rw-vocab-",
          ),
      ).length,
    removedRwGrammarExtra:
      removed.filter(
        (question) =>
          (
            question.examId ||
            question.id
          ).startsWith(
            "rw-grammar-extra-",
          ),
      ).length,
    coverage,
    totalRequiredAdditions:
      affectedSkills.reduce(
        (sum, row) =>
          sum +
          row.totalAdditions,
        0,
      ),
    affectedSkills,
  };
}

export function legacyRetirementImpactCsv(
  report: LegacyRetirementImpactReport,
): string {
  const rows = [
    [
      "Skill",
      "Easy",
      "Medium",
      "Hard",
      "Total",
      "Add Easy",
      "Add Medium",
      "Add Hard",
      "Total Additions",
    ],
    ...report.coverage.map(
      (row) => [
        row.skill,
        row.easy,
        row.medium,
        row.hard,
        row.total,
        row.addEasy,
        row.addMedium,
        row.addHard,
        row.totalAdditions,
      ],
    ),
  ];

  return rows
    .map((row) =>
      row
        .map((value) =>
          `"${String(value).replaceAll(
            '"',
            '""',
          )}"`,
        )
        .join(","),
    )
    .join("\n");
}
