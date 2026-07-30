export type ReadingDomain =
  | "Information and Ideas"
  | "Craft and Structure"
  | "Expression of Ideas"
  | "Standard English Conventions";

export type ExamSection = "Reading & Writing" | "Math";
export type ExamDifficulty = "Easy" | "Medium" | "Hard";
export type Difficulty = ExamDifficulty;
export type ReadingPassageType =
  | "Science"
  | "History"
  | "Literature"
  | "Social Science"
  | "Science Data"
  | "Social Science Data"
  | "Economics Data"
  | "Experimental Data"
  | "Historical Data"
  | "Paired Science Texts"
  | "Paired Humanities Texts"
  | "Paired History Texts"
  | "Paired Social Science Texts"
  | "Paired Economics Texts"
  | "Experimental Design"
  | "Academic"
  | "Government"
  | "Economics"
  | "Humanities"
  | "Government"
  | "Literature"
  | "Science"
  | "Social Science";
export type ReadingModule = 1 | 2;

export type MathDomain =
  | "Algebra"
  | "Advanced Math"
  | "Problem Solving and Data Analysis"
  | "Geometry and Trigonometry";
export type MathQuestionType =
  | "multiple-choice"
  | "student-response"
  | "table"
  | "graph"
  | "modeling";

export interface CourseChoice {
  text: string;
  rationale: string;
}

export interface CourseQuestion {
  id: string;
  passage: string;
  prompt: string;
  choices: CourseChoice[];
  answer: number;
  difficulty: Difficulty;
  skill: string;
  walkthrough?: string[];
}

export interface ReadingBlueprintMetadata {
  module: ReadingModule;
  domain: ReadingDomain;
  skill: string;
  passageType: ReadingPassageType;
  difficulty: Difficulty;
  estimatedSeconds: number;
}

export interface MathTableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface MathGraphData {
  kind: "line" | "parabola" | "scatter" | "exponential";
  points: Array<[number, number]>;
  xLabel?: string;
  yLabel?: string;
}

export interface ExamQuestion extends CourseQuestion {
  examId: string;
  section: ExamSection;
  courseId: string;
  courseTitle: string;
  domain?: ReadingDomain;
  passageType?: ReadingPassageType;
  mathDomain?: MathDomain;
  questionType?: MathQuestionType;
  numericAnswer?: string;
  tableData?: MathTableData;
  graphData?: MathGraphData;
  calculatorRecommended?: boolean;
  estimatedTime?: number;
  tags?: string[];
  blueprint?: ReadingBlueprintMetadata;
}
