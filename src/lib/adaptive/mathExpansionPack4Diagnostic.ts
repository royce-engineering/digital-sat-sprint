import {
  inspectMathContentIssues,
} from "./mathContentIssueInspector";
import {
  mathExpansionPack4,
} from "./mathExpansionPack4";

export interface MathExpansionPack4DiagnosticReport {
  passed: boolean;
  total: number;
  domainCounts:
    Record<string, number>;
  skillCounts:
    Record<string, number>;
  difficultyCounts:
    Record<string, number>;
  questionTypeCounts:
    Record<string, number>;
  duplicateGroups: number;
  duplicateChoiceQuestions: number;
  missingWalkthroughs: number;
  invalidStudentResponses: number;
  invalidTables: number;
  issues: string[];
}

export function diagnoseMathExpansionPack4():
  MathExpansionPack4DiagnosticReport {
  const issues: string[] = [];

  const inspection =
    inspectMathContentIssues(
      mathExpansionPack4,
    );

  const expectedDomains:
    Record<string, number> = {
    "Advanced Math": 10,
    "Problem Solving and Data Analysis": 8,
  };

  const expectedSkills:
    Record<string, number> = {
    "Polynomial Operations": 2,
    "Radical Equations": 4,
    "Quadratic Equations": 4,
    "Data Modeling": 2,
    Ratios: 2,
    "Linear Modeling": 4,
  };

  const domainCounts =
    Object.fromEntries(
      Object.keys(
        expectedDomains,
      ).map((domain) => [
        domain,
        mathExpansionPack4.filter(
          (question) =>
            question.mathDomain ===
            domain,
        ).length,
      ]),
    );

  const skillCounts =
    Object.fromEntries(
      Object.keys(
        expectedSkills,
      ).map((skill) => [
        skill,
        mathExpansionPack4.filter(
          (question) =>
            question.skill ===
            skill,
        ).length,
      ]),
    );

  const difficultyCounts =
    Object.fromEntries(
      [
        "Easy",
        "Medium",
        "Hard",
      ].map((difficulty) => [
        difficulty,
        mathExpansionPack4.filter(
          (question) =>
            question.difficulty ===
            difficulty,
        ).length,
      ]),
    );

  const questionTypeCounts =
    Object.fromEntries(
      [
        "multiple-choice",
        "student-response",
        "table",
        "modeling",
      ].map((questionType) => [
        questionType,
        mathExpansionPack4.filter(
          (question) =>
            question.questionType ===
            questionType,
        ).length,
      ]),
    );

  const missingWalkthroughs =
    mathExpansionPack4.filter(
      (question) =>
        !question.walkthrough
          ?.length,
    ).length;

  const invalidStudentResponses =
    mathExpansionPack4.filter(
      (question) =>
        question.questionType ===
          "student-response" &&
        (
          question.answer !== -1 ||
          question.choices.length !==
            0 ||
          !question.numericAnswer
            ?.trim()
        ),
    ).length;

  const invalidTables =
    mathExpansionPack4.filter(
      (question) =>
        question.questionType ===
          "table" &&
        (
          !question.tableData ||
          question.tableData
            .headers.length < 2 ||
          question.tableData
            .rows.length < 2
        ),
    ).length;

  if (
    mathExpansionPack4.length !==
    18
  ) {
    issues.push(
      `Expected 18 questions; found ${mathExpansionPack4.length}.`,
    );
  }

  for (const [
    domain,
    expected,
  ] of Object.entries(
    expectedDomains,
  )) {
    if (
      (
        domainCounts[domain] ?? 0
      ) !== expected
    ) {
      issues.push(
        `${domain}: expected ${expected}; found ${domainCounts[domain] ?? 0}.`,
      );
    }
  }

  for (const [
    skill,
    expected,
  ] of Object.entries(
    expectedSkills,
  )) {
    if (
      (
        skillCounts[skill] ?? 0
      ) !== expected
    ) {
      issues.push(
        `${skill}: expected ${expected}; found ${skillCounts[skill] ?? 0}.`,
      );
    }
  }

  const expectedDifficulty:
    Record<string, number> = {
    Easy: 5,
    Medium: 4,
    Hard: 9,
  };

  for (const [
    difficulty,
    expected,
  ] of Object.entries(
    expectedDifficulty,
  )) {
    if (
      (
        difficultyCounts[
          difficulty
        ] ?? 0
      ) !== expected
    ) {
      issues.push(
        `${difficulty}: expected ${expected}; found ${difficultyCounts[difficulty] ?? 0}.`,
      );
    }
  }

  const expectedTypes:
    Record<string, number> = {
    "multiple-choice": 6,
    "student-response": 6,
    table: 2,
    modeling: 4,
  };

  for (const [
    questionType,
    expected,
  ] of Object.entries(
    expectedTypes,
  )) {
    if (
      (
        questionTypeCounts[
          questionType
        ] ?? 0
      ) !== expected
    ) {
      issues.push(
        `${questionType}: expected ${expected}; found ${questionTypeCounts[questionType] ?? 0}.`,
      );
    }
  }

  if (
    inspection
      .duplicateContentGroups
      .length > 0
  ) {
    issues.push(
      `${inspection.duplicateContentGroups.length} duplicate-content group(s).`,
    );
  }

  if (
    inspection
      .duplicateChoiceIssues
      .length > 0
  ) {
    issues.push(
      `${inspection.duplicateChoiceIssues.length} duplicate-choice question(s).`,
    );
  }

  if (
    missingWalkthroughs > 0
  ) {
    issues.push(
      `${missingWalkthroughs} missing walkthrough(s).`,
    );
  }

  if (
    invalidStudentResponses > 0
  ) {
    issues.push(
      `${invalidStudentResponses} invalid student-response question(s).`,
    );
  }

  if (
    invalidTables > 0
  ) {
    issues.push(
      `${invalidTables} invalid table question(s).`,
    );
  }

  return {
    passed:
      issues.length === 0,
    total:
      mathExpansionPack4.length,
    domainCounts,
    skillCounts,
    difficultyCounts,
    questionTypeCounts,
    duplicateGroups:
      inspection
        .duplicateContentGroups
        .length,
    duplicateChoiceQuestions:
      inspection
        .duplicateChoiceIssues
        .length,
    missingWalkthroughs,
    invalidStudentResponses,
    invalidTables,
    issues,
  };
}
