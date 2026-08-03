import { readingWritingBank } from "./questionBank";
import { selectReadingModule } from "./selectModule";
import type { ExamQuestion } from "./types";

type Route = "module1" | "module2-easy" | "module2-hard";
type Pack = "existing" | "pack1" | "pack2" | "pack3";

const idOf = (q: ExamQuestion) => q.examId || q.id;

const isVocabulary = (q: ExamQuestion) => {
  const value = `${q.skill} ${q.courseId} ${q.courseTitle}`.toLowerCase();
  return (
    value.includes("words in context") ||
    value.includes("words-in-context") ||
    value.includes("vocabulary")
  );
};

const packOf = (q: ExamQuestion): Pack => {
  const id = idOf(q);

  if (
    id.startsWith("vocab-exp1-") ||
    q.courseId === "vocabulary-expansion-pack-1"
  )
    return "pack1";

  if (
    id.startsWith("vocab-exp2-") ||
    q.courseId === "vocabulary-expansion-pack-2"
  )
    return "pack2";

  if (
    id.startsWith("vocab-exp3-") ||
    q.courseId === "vocabulary-expansion-pack-3"
  )
    return "pack3";

  return "existing";
};

function selectRoute(route: Route, seed: number): ExamQuestion[] {
  const module1 = selectReadingModule({ module: 1, seed });
  if (route === "module1") return module1;
  return selectReadingModule({
    module: 2,
    route: route === "module2-easy" ? "Easy" : "Hard",
    seed: seed + 100_000,
    exclude: module1.map(idOf),
  });
}

export function auditVocabularyProductionReach(seeds = 1000) {
  const questions = readingWritingBank.filter(isVocabulary);
  const routes: Route[] = ["module1", "module2-easy", "module2-hard"];
  const usage = new Map<Route, Map<string, number>>();

  for (const route of routes) {
    const counts = new Map<string, number>();
    for (let seed = 0; seed < seeds; seed += 1) {
      for (const question of selectRoute(route, seed).filter(isVocabulary)) {
        const id = idOf(question);
        counts.set(id, (counts.get(id) ?? 0) + 1);
      }
    }
    usage.set(route, counts);
  }

  const questionRows = questions.map((question) => {
    const id = idOf(question);
    const module1 = usage.get("module1")?.get(id) ?? 0;
    const module2Easy = usage.get("module2-easy")?.get(id) ?? 0;
    const module2Hard = usage.get("module2-hard")?.get(id) ?? 0;
    return {
      questionId: id,
      pack: packOf(question),
      difficulty: question.difficulty,
      correctWord: question.choices[question.answer]?.text ?? "(invalid)",
      module1,
      module2Easy,
      module2Hard,
      total: module1 + module2Easy + module2Hard,
    };
  });

  const packTotals = {
    existing: questionRows.filter((row) => row.pack === "existing").length,
    pack1: questionRows.filter((row) => row.pack === "pack1").length,
    pack2: questionRows.filter((row) => row.pack === "pack2").length,
    pack3: questionRows.filter((row) => row.pack === "pack3").length,
  };

  const routeRows = routes.map((route) => {
    const counts = usage.get(route)!;
    const reachedIds = new Set(counts.keys());
    const reached = (pack: Pack) =>
      questions.filter((q) => packOf(q) === pack && reachedIds.has(idOf(q)))
        .length;
    return {
      route,
      runs: seeds,
      selections: [...counts.values()].reduce((sum, count) => sum + count, 0),
      uniqueReached: reachedIds.size,
      existingReached: reached("existing"),
      pack1Reached: reached("pack1"),
      pack2Reached: reached("pack2"),
      pack3Reached: reached("pack3"),
    };
  });

  const unreachableIds = questionRows
    .filter((row) => row.total === 0)
    .map((row) => row.questionId);
  const issues: string[] = [];
  if (questions.length !== 136)
    issues.push(
      `Expected 100 Vocabulary questions; found ${questions.length}.`,
    );
  if (packTotals.existing !== 28)
    issues.push(
      `Expected 28 existing questions; found ${packTotals.existing}.`,
    );
  if (packTotals.pack1 !== 36)
    issues.push(`Expected 36 Pack 1 questions; found ${packTotals.pack1}.`);
  if (packTotals.pack2 !== 36)
    issues.push(`Expected 36 Pack 2 questions; found ${packTotals.pack2}.`);
  if (unreachableIds.length)
    issues.push(`${unreachableIds.length} question(s) were unreachable.`);
  if (packTotals.pack3 !== 36) {
    issues.push(`Expected 36 Pack 3 questions; found ${packTotals.pack3}.`);
  }
  return {
    passed: issues.length === 0,
    totalReadingQuestions: readingWritingBank.length,
    totalVocabularyQuestions: questions.length,
    ...packTotals,
    seeds,
    routes: routeRows,
    questions: questionRows,
    unreachableIds,
    issues,
  };
}

export const vocabularyProductionReachAuditJson = (
  report: ReturnType<typeof auditVocabularyProductionReach>,
) => JSON.stringify(report, null, 2);
