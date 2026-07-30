export type CourseDifficulty = "Easy" | "Medium" | "Hard";

export interface CourseChoice { text: string; rationale: string; }
export interface CourseQuestion { id: string; passage: string; prompt: string; choices: CourseChoice[]; answer: number; difficulty: CourseDifficulty; skill: string; walkthrough?: string[]; }
export interface WorkedExample extends CourseQuestion { walkthrough: string[]; }
export interface CourseFlashcard { front: string; back: string; }
export interface CourseSection { title: string; body: string; bullets?: string[]; }
export interface Course {
  id: string; title: string; subtitle: string; description: string; estimatedMinutes: number; difficulty: CourseDifficulty; domain?: string;
  objectives: string[]; concepts: CourseSection[]; strategy: CourseSection[]; traps: CourseSection[]; coachTips: string[];
  workedExamples: WorkedExample[]; questions: CourseQuestion[]; flashcards: CourseFlashcard[]; nextCourseId?: string | null;
}
