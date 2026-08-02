import {
  inspectMathContentIssues,
} from "./mathContentIssueInspector";
import {
  mathExpansionPack2,
} from "./mathExpansionPack2";

export interface MathExpansionPack2DiagnosticReport {
  passed: boolean;
  total: number;
  skillCounts: Record<string, number>;
  difficultyCounts: Record<string, number>;
  questionTypeCounts: Record<string, number>;
  duplicateGroups: number;
  duplicateChoiceQuestions: number;
  missingWalkthroughs: number;
  invalidStudentResponses: number;
  invalidGraphQuestions: number;
  issues: string[];
}

export function diagnoseMathExpansionPack2():
  MathExpansionPack2DiagnosticReport {
  const issues: string[] = [];
  const inspection =
    inspectMathContentIssues(
      mathExpansionPack2,
    );

  const expectedSkills:
    Record<string, number> = {
    "Area and Volume": 6,
    "Angles and Parallel Lines": 3,
    "Coordinate Geometry": 3,
    "Slope and Graphs": 6,
  };

  const skillCounts =
    Object.fromEntries(
      Object.keys(
        expectedSkills,
      ).map((skill) => [
        skill,
        mathExpansionPack2.filter(
          (question) =>
            question.skill === skill,
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
        mathExpansionPack2.filter(
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
        "graph",
      ].map((questionType) => [
        questionType,
        mathExpansionPack2.filter(
          (question) =>
            question.questionType ===
            questionType,
        ).length,
      ]),
    );

  const missingWalkthroughs =
    mathExpansionPack2.filter(
      (question) =>
        !question.walkthrough
          ?.length,
    ).length;

  const invalidStudentResponses =
    mathExpansionPack2.filter(
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

  const invalidGraphQuestions =
    mathExpansionPack2.filter(
      (question) =>
        question.questionType ===
          "graph" &&
        (
          question.graphData
            ?.kind !== "line" ||
          (
            question.graphData
              ?.points.length ?? 0
          ) < 2
        ),
    ).length;

  if (
    mathExpansionPack2.length !==
    18
  ) {
    issues.push(
      `Expected 18 questions; found ${mathExpansionPack2.length}.`,
    );
  }

  for (const [
    skill,
    expected,
  ] of Object.entries(
    expectedSkills,
  )) {
    const actual =
      skillCounts[skill] ?? 0;

    if (actual !== expected) {
      issues.push(
        `${skill}: expected ${expected}; found ${actual}.`,
      );
    }
  }

  const expectedDifficulty:
    Record<string, number> = {
    Easy: 5,
    Medium: 6,
    Hard: 7,
  };

  for (const [
    difficulty,
    expected,
  ] of Object.entries(
    expectedDifficulty,
  )) {
    const actual =
      difficultyCounts[
        difficulty
      ] ?? 0;

    if (actual !== expected) {
      issues.push(
        `${difficulty}: expected ${expected}; found ${actual}.`,
      );
    }
  }

  const expectedTypes:
    Record<string, number> = {
    "multiple-choice": 6,
    "student-response": 6,
    graph: 6,
  };

  for (const [
    questionType,
    expected,
  ] of Object.entries(
    expectedTypes,
  )) {
    const actual =
      questionTypeCounts[
        questionType
      ] ?? 0;

    if (actual !== expected) {
      issues.push(
        `${questionType}: expected ${expected}; found ${actual}.`,
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
    invalidGraphQuestions > 0
  ) {
    issues.push(
      `${invalidGraphQuestions} invalid graph question(s).`,
    );
  }

  return {
    passed:
      issues.length === 0,
    total:
      mathExpansionPack2.length,
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
    invalidGraphQuestions,
    issues,
  };
}
