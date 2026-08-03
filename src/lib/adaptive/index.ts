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
export * as analyticsHistory from "./analytics/history";
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
export * from "./readingCoverageAudit";
export * from "./readingExpansionPack1";
export * from "./readingExpansionPack1/validator";
export * from "./readingExpansionPack2";
export * from "./readingExpansionPack2/validator";
export * from "./readingExpansionPack3";
export * from "./readingExpansionPack3/validator";
export * from "./readingExpansionPack4";
export * from "./readingExpansionPack4/validator";
export * from "./readingExpansionPack5";
export * from "./readingExpansionPack5/validator";
export * from "./readingExpansionPack6";
export * from "./readingExpansionPack6/validator";
export * from "./readingExpansionPack7";
export * from "./readingExpansionPack7/validator";
export * from "./readingBankStaticAudit";
export * from "./readingBankAuditSummary";
export * from "./readingContentIssueInspector";
export * from "./duplicateBankDeepAudit";
export * from "./legacyRetirementImpactAudit";
export * from "./readingExpansionPack8";
export * from "./readingExpansionPack8/validator";
export * from "./readingExpansionPack9";
export * from "./readingExpansionPack9/validator";
export * from "./readingExpansionPack10";
export * from "./readingExpansionPack10/validator";
export * from "./readingExpansionPack11";
export * from "./readingExpansionPack11/validator";
export * from "./readingSelectionStressTest";
export * from "./readingBlueprintValidation";
export * from "./productionReadingSelectorStress";
export * from "./legacyWalkthroughMigration";
export * from "./legacyWalkthroughDiagnostic";
export * from "./readingDuplicateRetirement";
export * from "./readingAuditSemantics";
export * from "./readingFinalContentDiagnostic";
export * from "./readingExpansionPack12";
export * from "./readingExpansionPack12/validator";
export * from "./readingProductionGate";
export * from "./mathBankProductionAudit";
export * from "./mathBankAuditSummary";
export * from "./mathAuditCalibration";
export * from "./mathContentIssueInspector";
export * from "./mathContentRepair";
export * from "./mathContentRepairDiagnostic";
export * from "./mathWalkthroughDiagnostic";
export * from "./mathGeneratedWalkthroughs";
export * from "./mathAnswerWalkthroughDiagnostic";
export * from "./mathProductionBlueprintAudit";
export * from "./mathProductionSelectorStress";
export * from "./mathProductionGate";
export * from "./fullSatAssemblyAudit";
export * from "./scoreBasedRouteIntegration";
export * from "./sessionPersistenceRecoveryIntegration";
export * from "./fullTestPhaseBreakIntegration";
export * from "./scoreResultAssemblyConsistency";
export * from "./fullSatProductionGate";
export * from "./mathExpansionGapAudit";
export * from "./mathExpansionBlueprint";
export * from "./mathExpansionPack1";
export * from "./mathExpansionPack1Diagnostic";
export * from "./mathExpansionPack2";
export * from "./mathExpansionPack2Diagnostic";
export * from "./mathExpansionPack3";
export * from "./mathExpansionPack3Diagnostic";
export * from "./mathExpansionPack4";
export * from "./mathExpansionPack4Diagnostic";
export * from "./vocabularyExpansionGapAudit";
export * from "./vocabularyExpansionPack1";
export * from "./vocabularyExpansionPack1Diagnostic";
export * from "./vocabularyQuestionSource";
export * from "./vocabularyExpansionPack2";
export * from "./vocabularyExpansionPack2Diagnostic";
export * from "./vocabularyProductionReachAudit";
export * from "./vocabularyProductionQualityGate";
export * from "./vocabularyExpansionPack3";
export * from "./vocabularyExpansionPack3Diagnostic";
export * from "./fullSatStudentJourneyAudit";
export * from "./fullSatFinalizationAndLockAudit";
