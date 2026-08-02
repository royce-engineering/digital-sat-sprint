import {
  readingWritingBank,
} from "./questionBank";
import type {
  ExamDifficulty,
  ExamQuestion,
  ReadingDomain,
  ReadingPassageType,
} from "./types";

export interface ReadingCoverageCell {
  domain: ReadingDomain;
  skill: string;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  passageTypes: ReadingPassageType[];
  module1Eligible: number;
  module2Eligible: number;
  priority: "critical" | "high" | "medium" | "healthy";
  recommendedAdditions: {
    easy: number;
    medium: number;
    hard: number;
    total: number;
  };
}

export interface ReadingDomainCoverage {
  domain: ReadingDomain;
  easy: number;
  medium: number;
  hard: number;
  total: number;
  skills: number;
  passageTypes: number;
}

export interface ReadingCoverageReport {
  generatedAt: number;
  totalQuestions: number;
  uniqueSkills: number;
  uniquePassageTypes: number;
  duplicateExamIds: string[];
  missingMetadataIds: string[];
  domains: ReadingDomainCoverage[];
  cells: ReadingCoverageCell[];
  criticalCells: ReadingCoverageCell[];
  recommendedNewQuestions: number;
}

const DIFFICULTIES: ExamDifficulty[] = [
  "Easy",
  "Medium",
  "Hard",
];

const TARGETS: Record<
  ExamDifficulty,
  number
> = {
  Easy: 8,
  Medium: 10,
  Hard: 10,
};

function domainOf(
  question: ExamQuestion,
): ReadingDomain | undefined {
  return (
    question.blueprint?.domain ??
    question.domain
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

function passageTypeOf(
  question: ExamQuestion,
): ReadingPassageType | undefined {
  return (
    question.blueprint?.passageType ??
    question.passageType
  );
}

function difficultyOf(
  question: ExamQuestion,
): ExamDifficulty {
  return (
    question.blueprint?.difficulty ??
    question.difficulty
  );
}

function moduleOf(
  question: ExamQuestion,
): 1 | 2 | undefined {
  return question.blueprint?.module;
}

function priorityFor(
  easy: number,
  medium: number,
  hard: number,
): ReadingCoverageCell["priority"] {
  if (
    easy === 0 ||
    medium === 0 ||
    hard === 0
  ) {
    return "critical";
  }

  if (
    hard < 5 ||
    medium < 5 ||
    easy < 4
  ) {
    return "high";
  }

  if (
    hard < TARGETS.Hard ||
    medium < TARGETS.Medium ||
    easy < TARGETS.Easy
  ) {
    return "medium";
  }

  return "healthy";
}

function additionsFor(
  easy: number,
  medium: number,
  hard: number,
) {
  const additions = {
    easy: Math.max(
      0,
      TARGETS.Easy - easy,
    ),
    medium: Math.max(
      0,
      TARGETS.Medium - medium,
    ),
    hard: Math.max(
      0,
      TARGETS.Hard - hard,
    ),
  };

  return {
    ...additions,
    total:
      additions.easy +
      additions.medium +
      additions.hard,
  };
}

function duplicates(
  values: string[],
): string[] {
  const counts = new Map<string, number>();

  for (const value of values) {
    counts.set(
      value,
      (counts.get(value) ?? 0) + 1,
    );
  }

  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([value]) => value)
    .sort();
}

export function buildReadingCoverageReport(
  bank: ExamQuestion[] =
    readingWritingBank,
): ReadingCoverageReport {
  const missingMetadataIds =
    bank
      .filter(
        (question) =>
          !domainOf(question) ||
          !skillOf(question) ||
          !passageTypeOf(question) ||
          !difficultyOf(question),
      )
      .map(
        (question) =>
          question.examId,
      );

  const grouped = new Map<
    string,
    ExamQuestion[]
  >();

  for (const question of bank) {
    const domain = domainOf(question);
    const skill = skillOf(question);

    if (!domain || !skill) continue;

    const key = `${domain}::${skill}`;
    const current =
      grouped.get(key) ?? [];

    current.push(question);
    grouped.set(key, current);
  }

  const cells = [...grouped.entries()]
    .map(
      ([key, questions]): ReadingCoverageCell => {
        const [domain, skill] =
          key.split("::") as [
            ReadingDomain,
            string,
          ];

        const counts =
          Object.fromEntries(
            DIFFICULTIES.map(
              (difficulty) => [
                difficulty,
                questions.filter(
                  (question) =>
                    difficultyOf(
                      question,
                    ) === difficulty,
                ).length,
              ],
            ),
          ) as Record<
            ExamDifficulty,
            number
          >;

        const passageTypes = [
          ...new Set(
            questions
              .map(passageTypeOf)
              .filter(
                (
                  value,
                ): value is ReadingPassageType =>
                  Boolean(value),
              ),
          ),
        ].sort();

        const module1Eligible =
          questions.filter(
            (question) =>
              moduleOf(question) ===
                undefined ||
              moduleOf(question) === 1,
          ).length;

        const module2Eligible =
          questions.filter(
            (question) =>
              moduleOf(question) ===
                undefined ||
              moduleOf(question) === 2,
          ).length;

        const recommendedAdditions =
          additionsFor(
            counts.Easy,
            counts.Medium,
            counts.Hard,
          );

        return {
          domain,
          skill,
          easy: counts.Easy,
          medium: counts.Medium,
          hard: counts.Hard,
          total: questions.length,
          passageTypes,
          module1Eligible,
          module2Eligible,
          priority: priorityFor(
            counts.Easy,
            counts.Medium,
            counts.Hard,
          ),
          recommendedAdditions,
        };
      },
    )
    .sort(
      (left, right) => {
        const rank = {
          critical: 0,
          high: 1,
          medium: 2,
          healthy: 3,
        };

        return (
          rank[left.priority] -
            rank[right.priority] ||
          left.domain.localeCompare(
            right.domain,
          ) ||
          left.skill.localeCompare(
            right.skill,
          )
        );
      },
    );

  const domains = [
    ...new Set(
      cells.map(
        (cell) => cell.domain,
      ),
    ),
  ]
    .map(
      (
        domain,
      ): ReadingDomainCoverage => {
        const questions =
          bank.filter(
            (question) =>
              domainOf(question) ===
              domain,
          );
        const passageTypes =
          new Set(
            questions
              .map(passageTypeOf)
              .filter(Boolean),
          );

        return {
          domain,
          easy: questions.filter(
            (question) =>
              difficultyOf(question) ===
              "Easy",
          ).length,
          medium: questions.filter(
            (question) =>
              difficultyOf(question) ===
              "Medium",
          ).length,
          hard: questions.filter(
            (question) =>
              difficultyOf(question) ===
              "Hard",
          ).length,
          total: questions.length,
          skills: new Set(
            questions
              .map(skillOf)
              .filter(Boolean),
          ).size,
          passageTypes:
            passageTypes.size,
        };
      },
    )
    .sort((left, right) =>
      left.domain.localeCompare(
        right.domain,
      ),
    );

  return {
    generatedAt: Date.now(),
    totalQuestions: bank.length,
    uniqueSkills: cells.length,
    uniquePassageTypes:
      new Set(
        bank
          .map(passageTypeOf)
          .filter(Boolean),
      ).size,
    duplicateExamIds: duplicates(
      bank.map(
        (question) =>
          question.examId,
      ),
    ),
    missingMetadataIds,
    domains,
    cells,
    criticalCells: cells.filter(
      (cell) =>
        cell.priority ===
          "critical" ||
        cell.priority === "high",
    ),
    recommendedNewQuestions:
      cells.reduce(
        (sum, cell) =>
          sum +
          cell.recommendedAdditions
            .total,
        0,
      ),
  };
}

export function readingCoverageCsv(
  report: ReadingCoverageReport,
): string {
  const header = [
    "Domain",
    "Skill",
    "Easy",
    "Medium",
    "Hard",
    "Total",
    "Module 1 Eligible",
    "Module 2 Eligible",
    "Passage Types",
    "Priority",
    "Add Easy",
    "Add Medium",
    "Add Hard",
    "Recommended Additions",
  ];

  const rows = report.cells.map(
    (cell) => [
      cell.domain,
      cell.skill,
      cell.easy,
      cell.medium,
      cell.hard,
      cell.total,
      cell.module1Eligible,
      cell.module2Eligible,
      cell.passageTypes.join(
        " | ",
      ),
      cell.priority,
      cell.recommendedAdditions
        .easy,
      cell.recommendedAdditions
        .medium,
      cell.recommendedAdditions
        .hard,
      cell.recommendedAdditions
        .total,
    ],
  );

  return [header, ...rows]
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
