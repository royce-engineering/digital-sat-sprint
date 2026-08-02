import {
  inspectMathContentIssues,
} from "./mathContentIssueInspector";
import {
  mathExpansionPack1,
  mathExpansionPack1Stats,
} from "./mathExpansionPack1";

export interface MathExpansionPack1DiagnosticReport {
  passed: boolean;
  total: number;
  skillCounts: Record<string, number>;
  difficultyCounts: Record<string, number>;
  questionTypeCounts: Record<string, number>;
  duplicateGroups: number;
  duplicateChoiceQuestions: number;
  missingWalkthroughs: number;
  invalidStudentResponses: number;
  issues: string[];
}

export function diagnoseMathExpansionPack1():
  MathExpansionPack1DiagnosticReport {
  const issues: string[] = [];

  const inspection =
    inspectMathContentIssues(
      mathExpansionPack1,
    );

  const skillCounts =
    Object.fromEntries(
      [
        "Circles",
        "Triangles",
        "Right Triangle Trigonometry",
      ].map((skill) => [
        skill,
        mathExpansionPack1.filter(
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
        mathExpansionPack1.filter(
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
      ].map((questionType) => [
        questionType,
        mathExpansionPack1.filter(
          (question) =>
            question.questionType ===
            questionType,
        ).length,
      ]),
    );

  const missingWalkthroughs =
    mathExpansionPack1.filter(
      (question) =>
        !question.walkthrough
          ?.length,
    ).length;

  const invalidStudentResponses =
    mathExpansionPack1.filter(
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

  if (
    mathExpansionPack1Stats.total !==
    18
  ) {
    issues.push(
      `Expected 18 questions; found ${mathExpansionPack1Stats.total}.`,
    );
  }

  for (const [
    skill,
    count,
  ] of Object.entries(
    skillCounts,
  )) {
    if (count !== 6) {
      issues.push(
        `${skill}: expected 6; found ${count}.`,
      );
    }
  }

  for (const [
    difficulty,
    count,
  ] of Object.entries(
    difficultyCounts,
  )) {
    if (count !== 6) {
      issues.push(
        `${difficulty}: expected 6; found ${count}.`,
      );
    }
  }

  if (
    questionTypeCounts[
      "multiple-choice"
    ] !== 12
  ) {
    issues.push(
      `multiple-choice: expected 12; found ${questionTypeCounts["multiple-choice"]}.`,
    );
  }

  if (
    questionTypeCounts[
      "student-response"
    ] !== 6
  ) {
    issues.push(
      `student-response: expected 6; found ${questionTypeCounts["student-response"]}.`,
    );
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
      `${missingWalkthroughs} question(s) missing walkthroughs.`,
    );
  }

  if (
    invalidStudentResponses > 0
  ) {
    issues.push(
      `${invalidStudentResponses} invalid student-response record(s).`,
    );
  }

  return {
    passed:
      issues.length === 0,
    total:
      mathExpansionPack1.length,
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
    issues,
  };
}
