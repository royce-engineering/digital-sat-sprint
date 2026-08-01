import {
  compareByStableHash,
  createSeededRandom,
  deriveSeed,
  shuffleWithSeed,
  stableHash,
} from "./random";
import {
  countBy,
  diagnoseQuotas,
  quotaTotal,
  quotasAreSatisfiable,
} from "./quota";

export interface CoreDiagnosticCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface CoreDiagnosticReport {
  passed: boolean;
  checks: CoreDiagnosticCheck[];
}

function check(
  name: string,
  passed: boolean,
  details: string,
): CoreDiagnosticCheck {
  return { name, passed, details };
}

export function diagnoseAdaptiveCore(): CoreDiagnosticReport {
  const checks: CoreDiagnosticCheck[] = [];
  const values = ["a", "b", "c", "d", "e"];

  const first = shuffleWithSeed(values, 4810);
  const second = shuffleWithSeed(values, 4810);
  const third = shuffleWithSeed(values, 4811);

  checks.push(
    check(
      "Seeded shuffle is deterministic",
      JSON.stringify(first) === JSON.stringify(second),
      first.join(", "),
    ),
    check(
      "Different seeds can produce different orders",
      JSON.stringify(first) !== JSON.stringify(third),
      `${first.join(", ")} vs ${third.join(", ")}`,
    ),
    check(
      "Shuffle does not mutate input",
      values.join(",") === "a,b,c,d,e",
      values.join(", "),
    ),
  );

  const random1 = createSeededRandom(99);
  const random2 = createSeededRandom(99);
  const sequence1 = Array.from({ length: 5 }, random1);
  const sequence2 = Array.from({ length: 5 }, random2);

  checks.push(
    check(
      "Seeded random sequence is reproducible",
      JSON.stringify(sequence1) === JSON.stringify(sequence2),
      sequence1.map((value) => value.toFixed(5)).join(", "),
    ),
    check(
      "Stable hash is reproducible",
      stableHash(10, "Algebra") === stableHash(10, "Algebra"),
      String(stableHash(10, "Algebra")),
    ),
    check(
      "Child seeds vary by label",
      deriveSeed(10, "Algebra") !==
        deriveSeed(10, "Advanced Math"),
      `${deriveSeed(10, "Algebra")} / ${deriveSeed(
        10,
        "Advanced Math",
      )}`,
    ),
  );

  const sorted = [...values].sort((left, right) =>
    compareByStableHash(77, left, right),
  );
  const repeatedSorted = [...values].sort((left, right) =>
    compareByStableHash(77, left, right),
  );

  checks.push(
    check(
      "Stable hash comparator is deterministic",
      JSON.stringify(sorted) === JSON.stringify(repeatedSorted),
      sorted.join(", "),
    ),
  );

  const quotas = {
    Algebra: 7,
    "Advanced Math": 7,
    PSDA: 5,
    Geometry: 3,
  } as const;
  const availability = {
    Algebra: 10,
    "Advanced Math": 9,
    PSDA: 6,
    Geometry: 3,
  };
  const insufficient = {
    ...availability,
    "Advanced Math": 6,
  };

  checks.push(
    check(
      "Quota total is correct",
      quotaTotal(quotas) === 22,
      `Total ${quotaTotal(quotas)}.`,
    ),
    check(
      "Sufficient quotas pass",
      quotasAreSatisfiable(quotas, availability),
      diagnoseQuotas(quotas, availability)
        .map((item) => `${item.key}:${item.available}`)
        .join(", "),
    ),
    check(
      "Shortages are detected",
      !quotasAreSatisfiable(quotas, insufficient) &&
        diagnoseQuotas(quotas, insufficient).find(
          (item) => item.key === "Advanced Math",
        )?.shortage === 1,
      "Advanced Math shortage correctly reported as 1.",
    ),
  );

  const counts = countBy(
    ["A", "A", "B", "C", "C", "C"],
    (value) => value,
  );

  checks.push(
    check(
      "Generic countBy works",
      counts.A === 2 && counts.B === 1 && counts.C === 3,
      JSON.stringify(counts),
    ),
  );

  return {
    passed: checks.every((item) => item.passed),
    checks,
  };
}
