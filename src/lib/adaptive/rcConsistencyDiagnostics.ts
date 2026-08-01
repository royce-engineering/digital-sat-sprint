import {
  buildReadingScoreModules,
} from "./analytics/readingHistory";
import {
  readingWritingBank,
} from "./questionBank";

export interface RcConsistencyCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface RcConsistencyReport {
  passed: boolean;
  checks: RcConsistencyCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): RcConsistencyCheck {
  return { name, passed, details };
}

/**
 * Verifies final release-candidate identifier consistency.
 */
export function diagnoseRcConsistency(): RcConsistencyReport {
  const checks: RcConsistencyCheck[] = [];
  const module1 = readingWritingBank.slice(0, 3);
  const module2 = readingWritingBank.slice(3, 6);
  const modules = buildReadingScoreModules(
    module1,
    module2,
    "Hard",
  );

  const expected = [
    ...module1,
    ...module2,
  ].map((question) => question.examId);
  const actual = modules.flatMap(
    (module) => module.questionIds,
  );

  checks.push(
    check(
      "Reading score modules use canonical examId values",
      JSON.stringify(actual) === JSON.stringify(expected),
      `${actual.length} question references checked.`,
    ),
    check(
      "Reading Module 2 route is preserved",
      modules[1]?.difficulty === "Hard",
      `Module 2 difficulty: ${
        modules[1]?.difficulty ?? "missing"
      }.`,
    ),
    check(
      "Reading score module metadata is complete",
      modules.length === 2 &&
        modules.every(
          (module) =>
            module.section === "Reading & Writing" &&
            module.questionIds.length > 0,
        ),
      `${modules.length} modules generated.`,
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
