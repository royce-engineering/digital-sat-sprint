import { readingWritingBank } from "./questionBank";
import type { ExamQuestion } from "./types";

export function isVocabularyQuestion(question: ExamQuestion): boolean {
  const value = `${question.skill} ${question.courseId} ${question.courseTitle}`.toLowerCase();
  return value.includes("words in context") || value.includes("words-in-context") || value.includes("vocabulary");
}

export function getVocabularyQuestions(): ExamQuestion[] {
  return readingWritingBank.filter(isVocabularyQuestion);
}
