/**
 * Public API for the adaptive SAT subsystem.
 *
 * Internal banks and blueprint implementation files may still be imported
 * directly inside this package, but application pages should prefer this
 * barrel when practical.
 */

// Canonical shared types
export * from "./types";

// Question lookup, canonical identifiers, and banks
export * from "./questionBank";
export * from "./identifiers";

// Reading selection and adaptive routing
export * from "./blueprintEngine";
export * from "./readingAdaptiveEngine";
export * from "./readingAdaptiveDiagnostics";
export * from "./selectModule";

// Math selection, routing, and diagnostics
export * from "./selectMathModule";
export * from "./mathAdaptiveEngine";
export * from "./mathAdaptiveDiagnostics";

// Scoring and answer evaluation
export * from "./answerEvaluator";
export * from "./scoreEngine";

// Persistent sessions
export * from "./session/readingSession";
export * from "./session/mathSession";

// History and analytics
export * from "./analytics/history";
export * from "./analytics/readingHistory";
export * from "./analytics/fullSatHistory";
export * from "./analytics/statistics";
export * from "./analytics/trends";
export * from "./analytics/recommendations";

// Taxonomy and release diagnostics
export * from "./taxonomy/mathSkills";
export * from "./systemDiagnostics";

// Reading Hard Pack
export * from "./readingHardPack1";
export * from "./readingHardPack1/validator";
export * from "./identifierDiagnostics";
export * from "./core";

// Release-candidate consistency checks
export * from "./rcConsistencyDiagnostics";
export * from "./runtime";
export * from "./runtime/finalizationDiagnostics";
