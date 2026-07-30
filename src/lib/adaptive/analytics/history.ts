import type { ScoreAnswer, ScoreBreakdown } from "../scoreEngine";
import type { ExamDifficulty, ExamSection } from "../types";

export const EXAM_HISTORY_STORAGE_KEY = "digital-sat-exam-history-v1";
export const EXAM_HISTORY_VERSION = 1 as const;
export const MAX_HISTORY_RECORDS = 100;

export type AdaptiveRoute = "Easy" | "Hard" | "Not completed";

export interface ExamQuestionResult {
  questionId: string;
  examId: string;
  section: ExamSection;
  moduleKey: string;
  moduleTitle: string;
  difficulty: ExamDifficulty;
  domain: string;
  skill: string;
  correct: boolean;
  answered: boolean;
  flagged: boolean;
  answeredAt?: number;
}

export interface ExamSectionRecord {
  section: ExamSection;
  score?: number;
  lowEstimate?: number;
  highEstimate?: number;
  module2Path: AdaptiveRoute;
  correct: number;
  total: number;
  unanswered: number;
  accuracy: number;
  weightedAccuracy?: number;
  durationSeconds?: number;
  domainBreakdown: ScoreBreakdown[];
  difficultyBreakdown: ScoreBreakdown[];
}

export interface AdaptiveExamRecord {
  version: typeof EXAM_HISTORY_VERSION;
  id: string;
  title: string;
  startedAt: number;
  completedAt: number;
  durationSeconds: number;
  readingWriting?: ExamSectionRecord;
  math?: ExamSectionRecord;
  bestTotal?: number;
  lowTotal?: number;
  highTotal?: number;
  confidence?: "low" | "medium" | "high";
  answers: Record<string, ScoreAnswer>;
  questionResults: ExamQuestionResult[];
}

export interface CreateExamRecordInput
  extends Omit<AdaptiveExamRecord, "version" | "id" | "completedAt" | "durationSeconds"> {
  id?: string;
  completedAt?: number;
  durationSeconds?: number;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function createRecordId(completedAt: number): string {
  const randomPart = Math.random().toString(36).slice(2, 9);
  return `sat-${completedAt}-${randomPart}`;
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isHistoryRecord(value: unknown): value is AdaptiveExamRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<AdaptiveExamRecord>;

  return (
    record.version === EXAM_HISTORY_VERSION &&
    typeof record.id === "string" &&
    typeof record.title === "string" &&
    isFiniteNumber(record.startedAt) &&
    isFiniteNumber(record.completedAt) &&
    isFiniteNumber(record.durationSeconds) &&
    Boolean(record.answers && typeof record.answers === "object") &&
    Array.isArray(record.questionResults)
  );
}

function sortNewestFirst(records: AdaptiveExamRecord[]): AdaptiveExamRecord[] {
  return [...records].sort((a, b) => b.completedAt - a.completedAt);
}

export function createExamRecord(input: CreateExamRecordInput): AdaptiveExamRecord {
  const completedAt = input.completedAt ?? Date.now();
  const durationSeconds =
    input.durationSeconds ?? Math.max(0, Math.round((completedAt - input.startedAt) / 1000));

  return {
    ...input,
    version: EXAM_HISTORY_VERSION,
    id: input.id ?? createRecordId(completedAt),
    completedAt,
    durationSeconds,
  };
}

export function loadExamHistory(): AdaptiveExamRecord[] {
  if (!canUseStorage()) return [];

  const raw = window.localStorage.getItem(EXAM_HISTORY_STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return sortNewestFirst(parsed.filter(isHistoryRecord));
  } catch {
    return [];
  }
}

export function saveExamHistory(records: AdaptiveExamRecord[]): AdaptiveExamRecord[] {
  const normalized = sortNewestFirst(records).slice(0, MAX_HISTORY_RECORDS);
  if (canUseStorage()) {
    window.localStorage.setItem(EXAM_HISTORY_STORAGE_KEY, JSON.stringify(normalized));
  }
  return normalized;
}

export function addExamRecord(record: AdaptiveExamRecord): AdaptiveExamRecord[] {
  const existing = loadExamHistory().filter((item) => item.id !== record.id);
  return saveExamHistory([record, ...existing]);
}

export function createAndAddExamRecord(input: CreateExamRecordInput): AdaptiveExamRecord {
  const record = createExamRecord(input);
  addExamRecord(record);
  return record;
}

export function getExamRecord(id: string): AdaptiveExamRecord | undefined {
  return loadExamHistory().find((record) => record.id === id);
}

export function deleteExamRecord(id: string): AdaptiveExamRecord[] {
  return saveExamHistory(loadExamHistory().filter((record) => record.id !== id));
}

export function clearExamHistory(): void {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(EXAM_HISTORY_STORAGE_KEY);
}

export function replaceExamRecord(record: AdaptiveExamRecord): AdaptiveExamRecord[] {
  const existing = loadExamHistory();
  const found = existing.some((item) => item.id === record.id);
  return saveExamHistory(found ? existing.map((item) => (item.id === record.id ? record : item)) : [record, ...existing]);
}
