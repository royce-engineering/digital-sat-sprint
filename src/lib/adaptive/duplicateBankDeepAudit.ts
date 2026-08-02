import { readingWritingBank } from "./questionBank";
import type { ExamQuestion } from "./types";

export interface DuplicateAuditGroup {
  key: string;
  count: number;
  questionIds: string[];
  skills: string[];
  difficulties: string[];
  passage: string;
  prompt: string;
}

export interface DuplicateCoverageRow {
  key: string;
  raw: number;
  unique: number;
  duplicates: number;
  duplicateRate: number;
}

export interface DuplicateBankDeepAuditReport {
  rawQuestions: number;
  uniqueQuestions: number;
  duplicateCopies: number;
  duplicateRate: number;
  duplicateGroups: DuplicateAuditGroup[];
  bySource: DuplicateCoverageRow[];
  bySkill: DuplicateCoverageRow[];
  byDifficulty: DuplicateCoverageRow[];
}

function norm(value: string | undefined): string {
  return (value ?? "")
    .toLowerCase()
    .replace(/[“”"'’‘]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function contentKey(q: ExamQuestion): string {
  return `${norm(q.passage)}::${norm(q.prompt)}`;
}

function idOf(q: ExamQuestion): string {
  return q.examId || q.id;
}

function sourceOf(q: ExamQuestion): string {
  const id = idOf(q);
  if (id.startsWith("rw-grammar-extra-")) return "rw-grammar-extra";
  if (id.startsWith("rw-vocab-")) return "rw-vocab";
  if (id.startsWith("rexp1-")) return "readingExpansionPack1";
  if (id.startsWith("rexp2-")) return "readingExpansionPack2";
  if (id.startsWith("rexp3-")) return "readingExpansionPack3";
  if (id.startsWith("rexp4-")) return "readingExpansionPack4";
  if (id.startsWith("rexp5-")) return "readingExpansionPack5";
  if (id.startsWith("rexp6-")) return "readingExpansionPack6";
  if (id.startsWith("rexp7-")) return "readingExpansionPack7";
  if (id.startsWith("rw21-")) return "rw21";
  if (id.startsWith("rw2-")) return "rw2";
  if (id.startsWith("rw-hard-")) return "readingHard";
  return id.split("-").slice(0, 2).join("-") || "other";
}

function coverage(
  questions: readonly ExamQuestion[],
  keyFor: (q: ExamQuestion) => string,
): DuplicateCoverageRow[] {
  const buckets = new Map<string, ExamQuestion[]>();
  for (const q of questions) {
    const key = keyFor(q) || "(missing)";
    const list = buckets.get(key) ?? [];
    list.push(q);
    buckets.set(key, list);
  }

  return [...buckets.entries()]
    .map(([key, list]) => {
      const unique = new Set(list.map(contentKey)).size;
      const raw = list.length;
      const duplicates = raw - unique;
      return {
        key,
        raw,
        unique,
        duplicates,
        duplicateRate: raw ? duplicates / raw : 0,
      };
    })
    .sort((a, b) => b.duplicates - a.duplicates || a.key.localeCompare(b.key));
}

export function auditDuplicateReadingBank(
  questions: readonly ExamQuestion[] = readingWritingBank,
): DuplicateBankDeepAuditReport {
  const groups = new Map<string, ExamQuestion[]>();

  for (const q of questions) {
    const key = contentKey(q);
    const list = groups.get(key) ?? [];
    list.push(q);
    groups.set(key, list);
  }

  const duplicateGroups = [...groups.entries()]
    .filter(([, list]) => list.length > 1)
    .map(([key, list]) => ({
      key,
      count: list.length,
      questionIds: list.map(idOf),
      skills: [...new Set(list.map(q => q.skill ?? "(missing)"))],
      difficulties: [...new Set(list.map(q => q.difficulty))],
      passage: list[0].passage,
      prompt: list[0].prompt,
    }))
    .sort((a, b) => b.count - a.count || a.questionIds[0].localeCompare(b.questionIds[0]));

  const rawQuestions = questions.length;
  const uniqueQuestions = groups.size;
  const duplicateCopies = rawQuestions - uniqueQuestions;

  return {
    rawQuestions,
    uniqueQuestions,
    duplicateCopies,
    duplicateRate: rawQuestions ? duplicateCopies / rawQuestions : 0,
    duplicateGroups,
    bySource: coverage(questions, sourceOf),
    bySkill: coverage(questions, q => q.skill ?? "(missing)"),
    byDifficulty: coverage(questions, q => q.difficulty),
  };
}
