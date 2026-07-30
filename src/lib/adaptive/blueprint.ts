import type { ExamDifficulty, ExamQuestion, ExamSection, MathDomain, MathQuestionType } from "./types";

export type ReadingDomain = "Information and Ideas" | "Craft and Structure" | "Expression of Ideas" | "Standard English Conventions";

type DifficultyQuota = Record<ExamDifficulty, number>;
type DomainQuota = Record<string, number>;
type TypeQuota = Partial<Record<MathQuestionType | "advanced-reading", number>>;

export interface ModuleBlueprint {
  section: ExamSection;
  pathway: ExamDifficulty;
  count: number;
  domains: DomainQuota;
  difficulties: DifficultyQuota;
  questionTypes: TypeQuota;
}

const READING_DOMAINS: ReadingDomain[] = [
  "Information and Ideas",
  "Craft and Structure",
  "Expression of Ideas",
  "Standard English Conventions",
];

const MATH_DOMAINS: MathDomain[] = [
  "Algebra",
  "Advanced Math",
  "Problem Solving and Data Analysis",
  "Geometry and Trigonometry",
];

export function inferReadingDomain(question: ExamQuestion): ReadingDomain {
  if (question.domain) return question.domain;
  const skill = question.skill.toLowerCase();
  const course = question.courseId.toLowerCase();
  if (/transition|concision|synthesis|organization|precision|expression/.test(`${course} ${skill}`)) return "Expression of Ideas";
  if (/grammar|convention|punctuation|agreement|boundary|verb|modifier|pronoun|parallel/.test(`${course} ${skill}`)) return "Standard English Conventions";
  if (/vocabulary|context|purpose|tone|structure|cross-text|function/.test(`${course} ${skill}`)) return "Craft and Structure";
  return "Information and Ideas";
}

export function inferMathDomain(question: ExamQuestion): MathDomain {
  if (question.mathDomain) return question.mathDomain;
  const value = `${question.courseId} ${question.skill}`.toLowerCase();
  if (/geometry|triangle|circle|volume|area|angle|trigon|sine|cosine/.test(value)) return "Geometry and Trigonometry";
  if (/ratio|percent|probability|statistics|mean|median|scatter|data|unit rate/.test(value)) return "Problem Solving and Data Analysis";
  if (/quadratic|polynomial|exponential|radical|rational|nonlinear/.test(value)) return "Advanced Math";
  return "Algebra";
}

export function getBlueprint(section: ExamSection, pathway: ExamDifficulty, count: number): ModuleBlueprint {
  if (section === "Reading & Writing") {
    const domains: DomainQuota = count === 27
      ? { "Information and Ideas": 7, "Craft and Structure": 8, "Expression of Ideas": 5, "Standard English Conventions": 7 }
      : proportionalQuota(READING_DOMAINS, [0.26, 0.28, 0.20, 0.26], count);
    const difficulties = difficultyQuota(pathway, count, section);
    return { section, pathway, count, domains, difficulties, questionTypes: { "advanced-reading": Math.min(4, count) } };
  }
  const domains: DomainQuota = count === 22
    ? { "Algebra": 7, "Advanced Math": 7, "Problem Solving and Data Analysis": 5, "Geometry and Trigonometry": 3 }
    : proportionalQuota(MATH_DOMAINS, [0.35, 0.35, 0.20, 0.10], count);
  return {
    section,
    pathway,
    count,
    domains,
    difficulties: difficultyQuota(pathway, count, section),
    questionTypes: {
      "student-response": Math.min(5, count),
      table: Math.min(2, count),
      graph: Math.min(2, count),
      modeling: Math.min(4, count),
    },
  };
}

function proportionalQuota(labels: readonly string[], weights: number[], count: number): DomainQuota {
  const quota: DomainQuota = {};
  let assigned = 0;
  labels.forEach((label, index) => {
    const amount = index === labels.length - 1 ? count - assigned : Math.round(count * weights[index]);
    quota[label] = Math.max(0, amount);
    assigned += amount;
  });
  return quota;
}

function difficultyQuota(pathway: ExamDifficulty, count: number, section: ExamSection): DifficultyQuota {
  const profiles: Record<ExamDifficulty, [number, number, number]> = section === "Math"
    ? { Easy: [0.36, 0.46, 0.18], Medium: [0.23, 0.54, 0.23], Hard: [0.14, 0.36, 0.50] }
    : { Easy: [0.37, 0.44, 0.19], Medium: [0.26, 0.48, 0.26], Hard: [0.15, 0.37, 0.48] };
  const [easy, medium] = profiles[pathway];
  const easyCount = Math.round(count * easy);
  const mediumCount = Math.round(count * medium);
  return { Easy: easyCount, Medium: mediumCount, Hard: count - easyCount - mediumCount };
}

function stableRank(seed: number, text: string): number {
  let value = seed || 1;
  for (let index = 0; index < text.length; index += 1) value = (value * 33 + text.charCodeAt(index)) >>> 0;
  return value / 0xffffffff;
}

function questionDomain(question: ExamQuestion, section: ExamSection): string {
  return section === "Math" ? inferMathDomain(question) : inferReadingDomain(question);
}

function typeMatches(question: ExamQuestion, type: string): boolean {
  if (type === "advanced-reading") return question.courseId.startsWith("reading-v2-advanced");
  return question.questionType === type;
}

export function selectByBlueprint(bank: ExamQuestion[], blueprint: ModuleBlueprint, seed: number, exclude: string[] = []): ExamQuestion[] {
  const excluded = new Set(exclude);
  const candidates = bank.filter((question) => !excluded.has(question.examId));
  const selected: ExamQuestion[] = [];
  const domainCounts: Record<string, number> = {};
  const difficultyCounts: Record<string, number> = {};
  const typeCounts: Record<string, number> = {};

  while (selected.length < blueprint.count) {
    const remaining = candidates.filter((question) => !selected.some((item) => item.examId === question.examId));
    if (!remaining.length) break;
    const ranked = remaining.map((question) => {
      const domain = questionDomain(question, blueprint.section);
      const domainDeficit = (blueprint.domains[domain] ?? 0) - (domainCounts[domain] ?? 0);
      const difficultyDeficit = blueprint.difficulties[question.difficulty] - (difficultyCounts[question.difficulty] ?? 0);
      let typeDeficit = 0;
      for (const [type, target] of Object.entries(blueprint.questionTypes)) {
        if (target && typeMatches(question, type)) typeDeficit += target - (typeCounts[type] ?? 0);
      }
      const score = domainDeficit * 100 + difficultyDeficit * 24 + typeDeficit * 18 + stableRank(seed + selected.length * 97, question.examId);
      return { question, score, domain };
    }).sort((a, b) => b.score - a.score);
    const chosen = ranked[0];
    selected.push(chosen.question);
    domainCounts[chosen.domain] = (domainCounts[chosen.domain] ?? 0) + 1;
    difficultyCounts[chosen.question.difficulty] = (difficultyCounts[chosen.question.difficulty] ?? 0) + 1;
    for (const type of Object.keys(blueprint.questionTypes)) {
      if (typeMatches(chosen.question, type)) typeCounts[type] = (typeCounts[type] ?? 0) + 1;
    }
  }

  return [...selected].sort((a, b) => stableRank(seed + 701, a.examId) - stableRank(seed + 701, b.examId));
}

export interface BlueprintValidation {
  valid: boolean;
  errors: string[];
  warnings: string[];
  actual: { total: number; domains: Record<string, number>; difficulties: Record<string, number>; questionTypes: Record<string, number>; duplicates: string[] };
}

export function validateBlueprint(questions: ExamQuestion[], blueprint: ModuleBlueprint): BlueprintValidation {
  const domains: Record<string, number> = {};
  const difficulties: Record<string, number> = {};
  const questionTypes: Record<string, number> = {};
  const seen = new Set<string>();
  const duplicates: string[] = [];
  for (const question of questions) {
    const domain = questionDomain(question, blueprint.section);
    domains[domain] = (domains[domain] ?? 0) + 1;
    difficulties[question.difficulty] = (difficulties[question.difficulty] ?? 0) + 1;
    for (const type of Object.keys(blueprint.questionTypes)) if (typeMatches(question, type)) questionTypes[type] = (questionTypes[type] ?? 0) + 1;
    if (seen.has(question.examId)) duplicates.push(question.examId);
    seen.add(question.examId);
  }
  const errors: string[] = [];
  const warnings: string[] = [];
  if (questions.length !== blueprint.count) errors.push(`Expected ${blueprint.count} questions; received ${questions.length}.`);
  if (duplicates.length) errors.push(`Duplicate questions: ${duplicates.join(", ")}.`);
  for (const [domain, target] of Object.entries(blueprint.domains)) {
    const actual = domains[domain] ?? 0;
    if (actual !== target) errors.push(`${domain}: expected ${target}; received ${actual}.`);
  }
  for (const [difficulty, target] of Object.entries(blueprint.difficulties)) {
    const actual = difficulties[difficulty] ?? 0;
    if (Math.abs(actual - target) > 1) warnings.push(`${difficulty}: target ${target}; received ${actual}.`);
  }
  for (const [type, target] of Object.entries(blueprint.questionTypes)) {
    const actual = questionTypes[type] ?? 0;
    if (actual < (target ?? 0)) warnings.push(`${type}: target at least ${target}; received ${actual}.`);
  }
  return { valid: errors.length === 0, errors, warnings, actual: { total: questions.length, domains, difficulties, questionTypes, duplicates } };
}
