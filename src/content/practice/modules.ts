export type PracticeModuleStatus = "available" | "coming-soon";

export interface PracticeModuleSummary {
  id: string;
  title: string;
  description: string;
  category: "Reading Skills" | "Subject Reading" | "Review Center";
  estimatedMinutes: number;
  vocabularyCount: number;
  questionCount: number;
  difficulty: "Easy" | "Medium" | "Hard";
  status: PracticeModuleStatus;
}

export const practiceModules: PracticeModuleSummary[] = [
  { id: "reading-skills", title: "Reading Skills Center", description: "Learn Main Idea through a complete course with strategy, traps, 10 worked examples, 20 questions, and 30 flashcards.", category: "Reading Skills", estimatedMinutes: 90, vocabularyCount: 30, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "context-clues", title: "Context Clues", description: "Infer unfamiliar meanings from definitions, contrasts, examples, and cause-and-effect clues.", category: "Reading Skills", estimatedMinutes: 45, vocabularyCount: 10, questionCount: 5, difficulty: "Easy", status: "available" },
  { id: "tone", title: "Tone & Attitude", description: "Recognize an author's attitude, degree of certainty, and emotional stance.", category: "Reading Skills", estimatedMinutes: 50, vocabularyCount: 20, questionCount: 10, difficulty: "Medium", status: "available" },
  { id: "transition-words", title: "Transition Words", description: "Choose connectors that accurately express contrast, cause, continuation, and conclusion.", category: "Reading Skills", estimatedMinutes: 40, vocabularyCount: 20, questionCount: 10, difficulty: "Medium", status: "available" },
  { id: "common-sat-verbs", title: "Common SAT Verbs", description: "Master high-frequency analytical verbs used in passages and question stems.", category: "Reading Skills", estimatedMinutes: 45, vocabularyCount: 20, questionCount: 10, difficulty: "Medium", status: "available" },
  { id: "logic", title: "Logic & Argument", description: "Identify claims, evidence, assumptions, conclusions, and counterarguments.", category: "Reading Skills", estimatedMinutes: 60, vocabularyCount: 20, questionCount: 10, difficulty: "Hard", status: "available" },
  { id: "science", title: "Science Vocabulary", description: "Master 100 high-value terms used in experiments, biology, ecology, chemistry, physics, climate science, and health research.", category: "Subject Reading", estimatedMinutes: 130, vocabularyCount: 100, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "humanities", title: "Humanities Vocabulary", description: "Master 80 high-value terms for art, philosophy, architecture, music, culture, interpretation, and media.", category: "Subject Reading", estimatedMinutes: 115, vocabularyCount: 80, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "history", title: "History Vocabulary", description: "Master 80 high-value terms for historical evidence, causation, conflict, reform, economic change, migration, institutions, and public memory.", category: "Subject Reading", estimatedMinutes: 115, vocabularyCount: 80, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "social-science", title: "Social Science Vocabulary", description: "Master 100 high-value terms used in psychology, sociology, anthropology, education, demographics, institutions, and inequality research.", category: "Subject Reading", estimatedMinutes: 130, vocabularyCount: 100, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "economics", title: "Economics Vocabulary", description: "Master 100 high-value terms for markets, firms, macroeconomics, money, fiscal policy, labor, trade, data, behavioral economics, and environmental policy.", category: "Subject Reading", estimatedMinutes: 130, vocabularyCount: 100, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "government", title: "Government Vocabulary", description: "Master 90 high-value terms for constitutional structure, institutions, rights, elections, public policy, and democratic accountability.", category: "Subject Reading", estimatedMinutes: 115, vocabularyCount: 90, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "literature", title: "Literature Vocabulary", description: "Master 80 high-value terms for narrative, characterization, structure, figurative language, poetry, drama, and interpretation.", category: "Subject Reading", estimatedMinutes: 115, vocabularyCount: 80, questionCount: 20, difficulty: "Hard", status: "available" },
  { id: "academic-vocabulary", title: "Academic Vocabulary", description: "Master high-value academic words used in research, argument, analysis, and evidence-based writing.", category: "Review Center", estimatedMinutes: 120, vocabularyCount: 100, questionCount: 20, difficulty: "Hard", status: "available" },
  { id: "confusing-word-pairs", title: "Confusing Word Pairs", description: "Distinguish 50 frequently confused word groups using meaning, grammar, context, and common collocations.", category: "Review Center", estimatedMinutes: 90, vocabularyCount: 50, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "collocations", title: "Academic Collocations", description: "Master 64 natural academic word partnerships used in evidence, research, argument, comparison, policy, and data analysis.", category: "Review Center", estimatedMinutes: 100, vocabularyCount: 64, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "word-roots-affixes", title: "Word Roots and Affixes", description: "Decode unfamiliar academic words by recognizing 72 high-value prefixes, roots, and suffixes.", category: "Review Center", estimatedMinutes: 110, vocabularyCount: 72, questionCount: 20, difficulty: "Medium", status: "available" },
  { id: "advanced-vocabulary", title: "Advanced Vocabulary", description: "Review challenging academic words and precise distinctions among near-synonyms.", category: "Review Center", estimatedMinutes: 65, vocabularyCount: 20, questionCount: 10, difficulty: "Hard", status: "available" },
  { id: "mixed-review", title: "Mixed Review", description: "Combine vocabulary, reading, grammar, and math questions in one review session.", category: "Review Center", estimatedMinutes: 75, vocabularyCount: 20, questionCount: 10, difficulty: "Hard", status: "available" },
  { id: "final-review", title: "Final Review", description: "Complete a focused exam-week review of the most important concepts and strategies.", category: "Review Center", estimatedMinutes: 90, vocabularyCount: 20, questionCount: 10, difficulty: "Hard", status: "available" },
];
