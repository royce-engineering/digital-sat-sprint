import type {
  ExamDifficulty,
  ExamQuestion,
} from "./types";

const GEOMETRY =
  "Geometry and Trigonometry" as const;
const ALGEBRA =
  "Algebra" as const;

function choice(
  text: string,
  correct: boolean,
  explanation: string,
) {
  return {
    text,
    rationale: correct
      ? explanation
      : "This choice results from an incorrect setup, geometric relationship, or calculation.",
  };
}

function baseQuestion(
  id: string,
  domain:
    | typeof GEOMETRY
    | typeof ALGEBRA,
  difficulty: ExamDifficulty,
  skill: string,
  questionType:
    | "multiple-choice"
    | "student-response"
    | "graph",
): Omit<
  ExamQuestion,
  | "passage"
  | "prompt"
  | "choices"
  | "answer"
> {
  return {
    id,
    examId: id,
    section: "Math",
    courseId: "math-expansion-phase1-2",
    courseTitle:
      `Math Expansion · ${skill}`,
    difficulty,
    skill,
    mathDomain: domain,
    questionType,
    calculatorRecommended:
      questionType === "graph" ||
      difficulty === "Hard",
    estimatedTime:
      questionType ===
      "student-response"
        ? 95
        : 90,
    tags: [
      "math-expansion",
      domain,
      skill,
      difficulty,
      questionType,
    ],
  };
}

function multipleChoice(
  id: string,
  domain:
    | typeof GEOMETRY
    | typeof ALGEBRA,
  difficulty: ExamDifficulty,
  skill: string,
  passage: string,
  prompt: string,
  options: string[],
  correctText: string,
  walkthrough: string[],
  graphData?: ExamQuestion["graphData"],
): ExamQuestion {
  const answer =
    options.indexOf(correctText);

  if (
    options.length !== 4 ||
    answer < 0 ||
    new Set(options).size !== 4
  ) {
    throw new Error(
      `Invalid choices for ${id}.`,
    );
  }

  return {
    ...baseQuestion(
      id,
      domain,
      difficulty,
      skill,
      graphData
        ? "graph"
        : "multiple-choice",
    ),
    passage,
    prompt,
    choices: options.map(
      (text, index) =>
        choice(
          text,
          index === answer,
          walkthrough[
            walkthrough.length - 1
          ],
        ),
    ),
    answer,
    walkthrough,
    graphData,
  };
}

function studentResponse(
  id: string,
  difficulty: ExamDifficulty,
  skill: string,
  passage: string,
  prompt: string,
  numericAnswer: string,
  walkthrough: string[],
): ExamQuestion {
  return {
    ...baseQuestion(
      id,
      GEOMETRY,
      difficulty,
      skill,
      "student-response",
    ),
    passage,
    prompt,
    choices: [],
    answer: -1,
    numericAnswer,
    walkthrough,
  };
}

const areaAndVolume:
  ExamQuestion[] = [
  studentResponse(
    "math-geo-exp2-area-e1",
    "Easy",
    "Area and Volume",
    "A rectangular prism has length 5, width 4, and height 3.",
    "What is the volume of the prism?",
    "60",
    [
      "Use V = lwh.",
      "V = 5 × 4 × 3.",
      "V = 60.",
    ],
  ),
  studentResponse(
    "math-geo-exp2-area-e2",
    "Easy",
    "Area and Volume",
    "A triangle has base 12 and height 7.",
    "What is the area of the triangle?",
    "42",
    [
      "Use A = (1/2)bh.",
      "A = (1/2)(12)(7).",
      "A = 42.",
    ],
  ),
  studentResponse(
    "math-geo-exp2-area-m1",
    "Medium",
    "Area and Volume",
    "A cylinder has radius 3 and height 8. Its volume is kπ cubic units.",
    "What is the value of k?",
    "72",
    [
      "Use V = πr²h.",
      "V = π(3²)(8).",
      "V = 72π, so k = 72.",
    ],
  ),
  studentResponse(
    "math-geo-exp2-area-m2",
    "Medium",
    "Area and Volume",
    "A rectangular garden has area 96 square feet. Its length is 4 feet greater than its width. The width is 8 feet.",
    "What is the perimeter of the garden?",
    "40",
    [
      "The length is 8 + 4 = 12.",
      "Check: 8 × 12 = 96.",
      "The perimeter is 2(8 + 12) = 40.",
    ],
  ),
  studentResponse(
    "math-geo-exp2-area-h1",
    "Hard",
    "Area and Volume",
    "A cone has radius 6 and height 9. Its volume is kπ cubic units.",
    "What is the value of k?",
    "108",
    [
      "Use V = (1/3)πr²h.",
      "V = (1/3)π(6²)(9).",
      "V = 108π, so k = 108.",
    ],
  ),
  studentResponse(
    "math-geo-exp2-area-h2",
    "Hard",
    "Area and Volume",
    "A cube has surface area 150 square units.",
    "What is the volume of the cube?",
    "125",
    [
      "For side length s, surface area is 6s².",
      "6s² = 150, so s² = 25 and s = 5.",
      "The volume is s³ = 125.",
    ],
  ),
];

const angles:
  ExamQuestion[] = [
  multipleChoice(
    "math-geo-exp2-angles-e1",
    GEOMETRY,
    "Easy",
    "Angles and Parallel Lines",
    "Two parallel lines are cut by a transversal. One acute angle measures 58°.",
    "What is the measure of every obtuse angle formed?",
    ["32°", "58°", "116°", "122°"],
    "122°",
    [
      "An acute angle and an adjacent obtuse angle are supplementary.",
      "180° - 58° = 122°.",
    ],
  ),
  multipleChoice(
    "math-geo-exp2-angles-h1",
    GEOMETRY,
    "Hard",
    "Angles and Parallel Lines",
    "Two parallel lines are cut by a transversal. Same-side interior angles are labeled (3x + 12)° and (5x - 8)°.",
    "What is the value of x?",
    ["16", "20", "22", "25"],
    "22",
    [
      "Same-side interior angles are supplementary.",
      "(3x + 12) + (5x - 8) = 180.",
      "8x + 4 = 180, so x = 22.",
    ],
  ),
  multipleChoice(
    "math-geo-exp2-angles-h2",
    GEOMETRY,
    "Hard",
    "Angles and Parallel Lines",
    "Two parallel lines are cut by a transversal. Alternate interior angles are labeled (7x - 9)° and (4x + 24)°.",
    "What is the measure of either angle?",
    ["33°", "68°", "77°", "145°"],
    "68°",
    [
      "Alternate interior angles are congruent.",
      "7x - 9 = 4x + 24, so 3x = 33 and x = 11.",
      "The angle measure is 7(11) - 9 = 68°.",
    ],
  ),
];

const coordinateGeometry:
  ExamQuestion[] = [
  multipleChoice(
    "math-geo-exp2-coordinate-e1",
    GEOMETRY,
    "Easy",
    "Coordinate Geometry",
    "The endpoints of a segment are (2, 4) and (8, 10).",
    "What is the midpoint of the segment?",
    ["(3, 3)", "(5, 7)", "(6, 7)", "(10, 14)"],
    "(5, 7)",
    [
      "Average the x-coordinates and the y-coordinates.",
      "((2 + 8)/2, (4 + 10)/2) = (5, 7).",
    ],
  ),
  multipleChoice(
    "math-geo-exp2-coordinate-e2",
    GEOMETRY,
    "Easy",
    "Coordinate Geometry",
    "The points (1, 3) and (1, 11) are endpoints of a vertical segment.",
    "What is the length of the segment?",
    ["8", "10", "12", "14"],
    "8",
    [
      "The x-coordinates are equal, so subtract the y-coordinates.",
      "11 - 3 = 8.",
    ],
  ),
  multipleChoice(
    "math-geo-exp2-coordinate-h1",
    GEOMETRY,
    "Hard",
    "Coordinate Geometry",
    "A circle has center (3, -2) and passes through the point (9, 6).",
    "What is the radius of the circle?",
    ["8", "10", "12", "14"],
    "10",
    [
      "Use the distance formula from the center to the point.",
      "r = √[(9 - 3)² + (6 - (-2))²].",
      "r = √(6² + 8²) = √100 = 10.",
    ],
  ),
];

const graphQuestions:
  ExamQuestion[] = [
  multipleChoice(
    "math-alg-exp2-graph-m1",
    ALGEBRA,
    "Medium",
    "Slope and Graphs",
    "The graph shows a line through the points (-2, -3), (0, 1), and (2, 5).",
    "What is the slope of the line?",
    ["-2", "1/2", "2", "4"],
    "2",
    [
      "Use two points, such as (0, 1) and (2, 5).",
      "Slope = (5 - 1)/(2 - 0) = 4/2 = 2.",
    ],
    {
      kind: "line",
      points: [
        [-2, -3],
        [0, 1],
        [2, 5],
      ],
      xLabel: "x",
      yLabel: "y",
    },
  ),
  multipleChoice(
    "math-alg-exp2-graph-m2",
    ALGEBRA,
    "Medium",
    "Slope and Graphs",
    "The graph shows a line through the points (-3, 7), (0, 1), and (2, -3).",
    "What is the slope of the line?",
    ["-3", "-2", "2", "6"],
    "-2",
    [
      "Use the points (0, 1) and (2, -3).",
      "Slope = (-3 - 1)/(2 - 0) = -4/2 = -2.",
    ],
    {
      kind: "line",
      points: [
        [-3, 7],
        [0, 1],
        [2, -3],
      ],
      xLabel: "x",
      yLabel: "y",
    },
  ),
  multipleChoice(
    "math-alg-exp2-graph-m3",
    ALGEBRA,
    "Medium",
    "Slope and Graphs",
    "The graph shows a line through the points (-4, -1), (0, 2), and (4, 5).",
    "What is the slope of the line?",
    ["-4/3", "3/4", "4/3", "3"],
    "3/4",
    [
      "Use the points (-4, -1) and (0, 2).",
      "Slope = (2 - (-1))/(0 - (-4)) = 3/4.",
    ],
    {
      kind: "line",
      points: [
        [-4, -1],
        [0, 2],
        [4, 5],
      ],
      xLabel: "x",
      yLabel: "y",
    },
  ),
  multipleChoice(
    "math-alg-exp2-graph-m4",
    ALGEBRA,
    "Medium",
    "Slope and Graphs",
    "The graph shows a line through the points (-2, 6), (1, 0), and (3, -4).",
    "What is the slope of the line?",
    ["-3", "-2", "2", "3"],
    "-2",
    [
      "Use the points (1, 0) and (3, -4).",
      "Slope = (-4 - 0)/(3 - 1) = -4/2 = -2.",
    ],
    {
      kind: "line",
      points: [
        [-2, 6],
        [1, 0],
        [3, -4],
      ],
      xLabel: "x",
      yLabel: "y",
    },
  ),
  multipleChoice(
    "math-alg-exp2-graph-h1",
    ALGEBRA,
    "Hard",
    "Slope and Graphs",
    "The graph shows a line through the points (-6, 5), (-2, 2), and (2, -1).",
    "What is the slope of the line?",
    ["-4/3", "-3/4", "3/4", "4/3"],
    "-3/4",
    [
      "Use the points (-6, 5) and (-2, 2).",
      "Slope = (2 - 5)/(-2 - (-6)) = -3/4.",
    ],
    {
      kind: "line",
      points: [
        [-6, 5],
        [-2, 2],
        [2, -1],
      ],
      xLabel: "x",
      yLabel: "y",
    },
  ),
  multipleChoice(
    "math-alg-exp2-graph-h2",
    ALGEBRA,
    "Hard",
    "Slope and Graphs",
    "The graph shows a line through the points (-5, -7), (-1, 1), and (3, 9).",
    "What is the slope of the line?",
    ["-2", "1/2", "2", "4"],
    "2",
    [
      "Use the points (-5, -7) and (-1, 1).",
      "Slope = (1 - (-7))/(-1 - (-5)) = 8/4 = 2.",
    ],
    {
      kind: "line",
      points: [
        [-5, -7],
        [-1, 1],
        [3, 9],
      ],
      xLabel: "x",
      yLabel: "y",
    },
  ),
];

export const mathExpansionPack2:
  ExamQuestion[] = [
  ...areaAndVolume,
  ...angles,
  ...coordinateGeometry,
  ...graphQuestions,
];

export const mathExpansionPack2Stats = {
  total:
    mathExpansionPack2.length,
  areaAndVolume:
    areaAndVolume.length,
  anglesAndParallelLines:
    angles.length,
  coordinateGeometry:
    coordinateGeometry.length,
  slopeAndGraphs:
    graphQuestions.length,
  easy:
    mathExpansionPack2.filter(
      (question) =>
        question.difficulty ===
        "Easy",
    ).length,
  medium:
    mathExpansionPack2.filter(
      (question) =>
        question.difficulty ===
        "Medium",
    ).length,
  hard:
    mathExpansionPack2.filter(
      (question) =>
        question.difficulty ===
        "Hard",
    ).length,
};
