import type { AdaptiveExamRecord } from "./history";

export type ScoreSeries = "readingWriting" | "math" | "total";

export interface ScoreTrendPoint {
  recordId: string;
  completedAt: number;
  label: string;
  value: number;
  rollingAverage: number;
}

export interface TrendSummary {
  count: number;
  latest?: number;
  best?: number;
  average?: number;
  improvement?: number;
  recentImprovement?: number;
  consistency?: number;
}

function scoreFor(record: AdaptiveExamRecord, series: ScoreSeries): number | undefined {
  if (series === "readingWriting") return record.readingWriting?.score;
  if (series === "math") return record.math?.score;
  return record.bestTotal;
}

function chronological(records: AdaptiveExamRecord[]): AdaptiveExamRecord[] {
  return [...records].sort((a, b) => a.completedAt - b.completedAt);
}

function mean(values: number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function standardDeviation(values: number[]): number {
  if (values.length < 2) return 0;
  const average = mean(values);
  const variance = mean(values.map((value) => (value - average) ** 2));
  return Math.sqrt(variance);
}

export function rollingAverage(values: number[], windowSize = 3): number[] {
  const size = Math.max(1, Math.floor(windowSize));
  return values.map((_, index) => {
    const start = Math.max(0, index - size + 1);
    return Math.round(mean(values.slice(start, index + 1)));
  });
}

export function buildScoreTrend(
  records: AdaptiveExamRecord[],
  series: ScoreSeries,
  windowSize = 3,
): ScoreTrendPoint[] {
  const values = chronological(records)
    .map((record) => ({ record, value: scoreFor(record, series) }))
    .filter((item): item is { record: AdaptiveExamRecord; value: number } =>
      typeof item.value === "number" && Number.isFinite(item.value),
    );

  const rolling = rollingAverage(values.map((item) => item.value), windowSize);

  return values.map(({ record, value }, index) => ({
    recordId: record.id,
    completedAt: record.completedAt,
    label: new Date(record.completedAt).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    }),
    value,
    rollingAverage: rolling[index],
  }));
}

export function summarizeTrend(
  records: AdaptiveExamRecord[],
  series: ScoreSeries,
): TrendSummary {
  const points = buildScoreTrend(records, series);
  const values = points.map((point) => point.value);

  if (!values.length) return { count: 0 };

  const first = values[0];
  const latest = values[values.length - 1];
  const recentWindow = values.slice(-3);
  const priorWindow = values.slice(Math.max(0, values.length - 6), Math.max(0, values.length - 3));
  const recentImprovement = priorWindow.length
    ? Math.round(mean(recentWindow) - mean(priorWindow))
    : Math.round(latest - first);

  return {
    count: values.length,
    latest,
    best: Math.max(...values),
    average: Math.round(mean(values)),
    improvement: Math.round(latest - first),
    recentImprovement,
    consistency: Math.round(standardDeviation(values)),
  };
}

export function latestRecord(records: AdaptiveExamRecord[]): AdaptiveExamRecord | undefined {
  return [...records].sort((a, b) => b.completedAt - a.completedAt)[0];
}

export function bestRecord(
  records: AdaptiveExamRecord[],
  series: ScoreSeries = "total",
): AdaptiveExamRecord | undefined {
  return records.reduce<AdaptiveExamRecord | undefined>((best, record) => {
    const value = scoreFor(record, series);
    if (value === undefined) return best;
    if (!best) return record;
    return value > (scoreFor(best, series) ?? Number.NEGATIVE_INFINITY) ? record : best;
  }, undefined);
}
