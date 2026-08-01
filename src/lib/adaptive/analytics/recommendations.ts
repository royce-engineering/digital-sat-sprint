import type { ExamQuestion, ExamSection } from "../types";
import type {
  AdaptiveExamRecord,
  ExamQuestionResult,
} from "./history";

export type RecommendationConfidence = "low" | "medium" | "high";

export interface SkillRecommendation {
  section: ExamSection;
  skill: string;
  domain: string;
  correct: number;
  total: number;
  unanswered: number;
  accuracy: number;
  priority: number;
  confidence: RecommendationConfidence;
  targetDifficulty: "Easy" | "Medium" | "Hard";
  reason: string;
}

export interface RecommendationOptions {
  section?: ExamSection;
  limit?: number;
  minimumAttempts?: number;
  recentAttemptWeight?: number;
}

export interface PracticePlan {
  section: ExamSection;
  generatedAt: number;
  seed: number;
  requestedCount: number;
  recommendations: SkillRecommendation[];
  questions: ExamQuestion[];
  shortages: string[];
}

interface SkillAccumulator {
  section: ExamSection;
  skill: string;
  domain: string;
  correct: number;
  total: number;
  unanswered: number;
  weightedCorrect: number;
  weightedTotal: number;
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function confidenceFor(total: number): RecommendationConfidence {
  if (total >= 12) return "high";
  if (total >= 5) return "medium";
  return "low";
}

function targetDifficultyFor(
  accuracy: number,
): "Easy" | "Medium" | "Hard" {
  if (accuracy < 0.5) return "Easy";
  if (accuracy < 0.78) return "Medium";
  return "Hard";
}

function recommendationReason(
  accuracy: number,
  total: number,
  unanswered: number,
): string {
  const percentage = Math.round(accuracy * 100);

  if (unanswered > 0) {
    return `${percentage}% accuracy across ${total} questions, including ${unanswered} unanswered.`;
  }

  return `${percentage}% accuracy across ${total} questions.`;
}

function normalizedDomain(result: ExamQuestionResult): string {
  return result.domain?.trim() || "Unclassified";
}

function accumulatorKey(
  section: ExamSection,
  skill: string,
): string {
  return `${section}::${skill}`;
}

export function buildSkillRecommendations(
  records: AdaptiveExamRecord[],
  options: RecommendationOptions = {},
): SkillRecommendation[] {
  const section = options.section ?? "Reading & Writing";
  const limit = Math.max(1, Math.round(options.limit ?? 4));
  const minimumAttempts = Math.max(
    1,
    Math.round(options.minimumAttempts ?? 2),
  );
  const recentAttemptWeight = clamp(
    options.recentAttemptWeight ?? 0.15,
    0,
    0.75,
  );
  const newestFirst = [...records].sort(
    (a, b) => b.completedAt - a.completedAt,
  );
  const accumulators = new Map<string, SkillAccumulator>();

  newestFirst.forEach((record, recordIndex) => {
    const recencyMultiplier =
      1 + recentAttemptWeight / (recordIndex + 1);

    for (const result of record.questionResults) {
      if (result.section !== section) continue;

      const skill = result.skill?.trim() || "Unclassified";
      if (skill === "Unclassified") continue;

      const key = accumulatorKey(section, skill);
      const current = accumulators.get(key) ?? {
        section,
        skill,
        domain: normalizedDomain(result),
        correct: 0,
        total: 0,
        unanswered: 0,
        weightedCorrect: 0,
        weightedTotal: 0,
      };

      current.total += 1;
      current.correct += result.correct ? 1 : 0;
      current.unanswered += result.answered ? 0 : 1;
      current.weightedTotal += recencyMultiplier;
      current.weightedCorrect += result.correct
        ? recencyMultiplier
        : 0;

      if (current.domain === "Unclassified") {
        current.domain = normalizedDomain(result);
      }

      accumulators.set(key, current);
    }
  });

  const all = [...accumulators.values()];
  const eligible = all.filter(
    (item) => item.total >= minimumAttempts,
  );
  const source =
    eligible.length >= Math.min(limit, all.length)
      ? eligible
      : all;

  return source
    .map((item): SkillRecommendation => {
      const weightedAccuracy = item.weightedTotal
        ? item.weightedCorrect / item.weightedTotal
        : 0;
      const unansweredRate = item.total
        ? item.unanswered / item.total
        : 0;
      const evidenceFactor = clamp(item.total / 10, 0.2, 1);
      const priority = clamp(
        (1 - weightedAccuracy) * 0.78 +
          unansweredRate * 0.12 +
          evidenceFactor * 0.1,
        0,
        1,
      );
      const accuracy = item.total
        ? item.correct / item.total
        : 0;

      return {
        section: item.section,
        skill: item.skill,
        domain: item.domain,
        correct: item.correct,
        total: item.total,
        unanswered: item.unanswered,
        accuracy,
        priority,
        confidence: confidenceFor(item.total),
        targetDifficulty: targetDifficultyFor(accuracy),
        reason: recommendationReason(
          accuracy,
          item.total,
          item.unanswered,
        ),
      };
    })
    .sort(
      (a, b) =>
        b.priority - a.priority ||
        a.accuracy - b.accuracy ||
        b.total - a.total,
    )
    .slice(0, limit);
}

function hashSeed(seed: number): number {
  let value = Math.trunc(seed) || 1;
  value ^= value >>> 16;
  value = Math.imul(value, 0x7feb352d);
  value ^= value >>> 15;
  value = Math.imul(value, 0x846ca68b);
  value ^= value >>> 16;
  return value >>> 0;
}

function seededRandom(seed: number): () => number {
  let state = hashSeed(seed);

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^=
      value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(
  values: T[],
  random: () => number,
): T[] {
  const copy = [...values];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [
      copy[swapIndex],
      copy[index],
    ];
  }

  return copy;
}

function questionId(question: ExamQuestion): string {
  return question.examId || question.id;
}

function recentlySeenIds(
  records: AdaptiveExamRecord[],
  section: ExamSection,
  attemptCount = 3,
): Set<string> {
  const newest = [...records]
    .sort((a, b) => b.completedAt - a.completedAt)
    .slice(0, attemptCount);

  return new Set(
    newest.flatMap((record) =>
      record.questionResults
        .filter((item) => item.section === section)
        .flatMap((item) => [item.questionId, item.examId]),
    ),
  );
}

function difficultyDistance(
  actual: ExamQuestion["difficulty"],
  target: SkillRecommendation["targetDifficulty"],
): number {
  const rank = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
  } as const;

  return Math.abs(rank[actual] - rank[target]);
}

export function buildRecommendedPracticePlan(
  bank: ExamQuestion[],
  records: AdaptiveExamRecord[],
  options: RecommendationOptions & {
    count?: number;
    seed?: number;
    excludeRecentlySeen?: boolean;
  } = {},
): PracticePlan {
  const section = options.section ?? "Reading & Writing";
  const count = Math.max(1, Math.round(options.count ?? 10));
  const seed = Math.trunc(options.seed ?? Date.now());
  const recommendations = buildSkillRecommendations(
    records,
    {
      ...options,
      section,
    },
  );
  const random = seededRandom(seed);
  const seen =
    options.excludeRecentlySeen === false
      ? new Set<string>()
      : recentlySeenIds(records, section);
  const selected = new Map<string, ExamQuestion>();
  const shortages: string[] = [];

  const selectOne = (
    candidates: ExamQuestion[],
  ): boolean => {
    const available = candidates.filter(
      (question) => !selected.has(questionId(question)),
    );

    if (!available.length) return false;

    const choice = shuffle(available, random)[0];
    selected.set(questionId(choice), choice);
    return true;
  };

  if (recommendations.length) {
    let cursor = 0;
    let stalledRounds = 0;

    while (
      selected.size < count &&
      stalledRounds < recommendations.length * 2
    ) {
      const recommendation =
        recommendations[cursor % recommendations.length];

      const exactSkill = bank
        .filter((question) => question.section === section)
        .filter(
          (question) =>
            question.skill === recommendation.skill,
        )
        .filter(
          (question) => !seen.has(questionId(question)),
        )
        .sort(
          (a, b) =>
            difficultyDistance(
              a.difficulty,
              recommendation.targetDifficulty,
            ) -
            difficultyDistance(
              b.difficulty,
              recommendation.targetDifficulty,
            ),
        );

      if (selectOne(exactSkill)) stalledRounds = 0;
      else stalledRounds += 1;

      cursor += 1;
    }

    for (const recommendation of recommendations) {
      const hasSkill = [...selected.values()].some(
        (question) =>
          question.skill === recommendation.skill,
      );

      if (!hasSkill) {
        shortages.push(
          `No unused questions were available for ${recommendation.skill}.`,
        );
      }
    }
  }

  const sectionBank = bank.filter(
    (question) => question.section === section,
  );
  const fallbackTiers = [
    sectionBank.filter(
      (question) => !seen.has(questionId(question)),
    ),
    sectionBank,
  ];

  for (const tier of fallbackTiers) {
    for (const question of shuffle(tier, random)) {
      if (selected.size >= count) break;
      selected.set(questionId(question), question);
    }
  }

  if (selected.size < count) {
    shortages.push(
      `Requested ${count} questions, but only ${selected.size} unique questions were available.`,
    );
  }

  return {
    section,
    generatedAt: Date.now(),
    seed,
    requestedCount: count,
    recommendations,
    questions: shuffle(
      [...selected.values()].slice(0, count),
      random,
    ),
    shortages,
  };
}
