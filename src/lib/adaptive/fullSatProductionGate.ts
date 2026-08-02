import {
  runMathProductionGate,
} from "./mathProductionGate";
import {
  runFullSatAssemblyAudit,
} from "./fullSatAssemblyAudit";
import {
  runScoreBasedRouteIntegration,
} from "./scoreBasedRouteIntegration";
import {
  runSessionPersistenceRecoveryIntegration,
} from "./sessionPersistenceRecoveryIntegration";
import {
  runFullTestPhaseBreakIntegration,
} from "./fullTestPhaseBreakIntegration";
import {
  runScoreResultAssemblyConsistency,
} from "./scoreResultAssemblyConsistency";

export interface FullSatProductionGateCheck {
  name: string;
  passed: boolean;
  details: string;
}

export interface FullSatProductionGateReport {
  passed: boolean;
  generatedAt: number;
  checks: FullSatProductionGateCheck[];
}

export interface FullSatProductionGateOptions {
  mathStressSeeds?: number;
  assemblySeeds?: number;
}

export function runFullSatProductionGate(
  options: FullSatProductionGateOptions = {},
): FullSatProductionGateReport {
  const mathStressSeeds =
    options.mathStressSeeds ?? 1000;
  const assemblySeeds =
    options.assemblySeeds ?? 500;

  const mathGate =
    runMathProductionGate(
      mathStressSeeds,
    );

  const assembly =
    runFullSatAssemblyAudit(
      assemblySeeds,
    );

  const routing =
    runScoreBasedRouteIntegration();

  const recovery =
    runSessionPersistenceRecoveryIntegration();

  const phaseBreak =
    runFullTestPhaseBreakIntegration();

  const scoring =
    runScoreResultAssemblyConsistency();

  const checks: FullSatProductionGateCheck[] = [
    {
      name: "Math production gate",
      passed:
        mathGate.passed,
      details: `${mathGate.checks.filter((check) => !check.passed).length} failed Math production check(s).`,
    },
    {
      name: "Full SAT assembly",
      passed:
        assembly.passed,
      details: `${assembly.totalAssemblies} complete test assemblies; ${assembly.failures.length} failure(s).`,
    },
    {
      name: "Score-based routing",
      passed:
        routing.passed,
      details: `${routing.cases.length} boundary case(s); ${routing.issues.length} issue(s).`,
    },
    {
      name: "Session persistence and recovery",
      passed:
        recovery.passed,
      details: `${recovery.checks.filter((check) => !check.passed).length} failed recovery check(s).`,
    },
    {
      name: "Full-test phase and break flow",
      passed:
        phaseBreak.passed,
      details: `${phaseBreak.checks.filter((check) => !check.passed).length} failed controller check(s).`,
    },
    {
      name: "Score and result consistency",
      passed:
        scoring.passed,
      details: `${scoring.checks.filter((check) => !check.passed).length} failed score consistency check(s).`,
    },
    {
      name: "Production-scale Math stress",
      passed:
        mathGate.checks.some(
          (check) =>
            check.name ===
              "Production selector stress" &&
            check.passed,
        ),
      details: `${mathStressSeeds * 3} Math production module generations requested.`,
    },
    {
      name: "Production-scale full-test diversity",
      passed:
        assembly.summaries.every(
          (summary) =>
            summary.failures === 0 &&
            summary.uniqueFullTests ===
              summary.runs,
        ),
      details: assembly.summaries
        .map(
          (summary) =>
            `RW ${summary.readingRoute} / Math ${summary.mathRoute}: ${summary.uniqueFullTests}/${summary.runs} unique`,
        )
        .join("; "),
    },
  ];

  return {
    passed:
      checks.every(
        (check) =>
          check.passed,
      ),
    generatedAt:
      Date.now(),
    checks,
  };
}
