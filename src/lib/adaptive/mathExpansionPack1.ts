import type {
  ExamDifficulty,
  ExamQuestion,
} from "./types";

const DOMAIN =
  "Geometry and Trigonometry" as const;

function baseQuestion(
  id: string,
  difficulty: ExamDifficulty,
  skill: string,
  questionType:
    | "multiple-choice"
    | "student-response",
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
    courseId: "math-expansion-geometry-1",
    courseTitle:
      `Math Expansion · ${skill}`,
    difficulty,
    skill,
    mathDomain: DOMAIN,
    questionType,
    calculatorRecommended:
      difficulty === "Hard",
    estimatedTime:
      questionType ===
      "student-response"
        ? 95
        : 90,
    tags: [
      "math-expansion",
      "geometry",
      skill,
      difficulty,
      questionType,
    ],
  };
}

function choice(
  text: string,
  correct: boolean,
  explanation: string,
) {
  return {
    text,
    rationale: correct
      ? explanation
      : "This choice results from an incorrect geometric relationship or calculation.",
  };
}

function multipleChoice(
  id: string,
  difficulty: ExamDifficulty,
  skill: string,
  passage: string,
  prompt: string,
  options: string[],
  correctText: string,
  walkthrough: string[],
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

  const explanation =
    walkthrough[
      walkthrough.length - 1
    ];

  return {
    ...baseQuestion(
      id,
      difficulty,
      skill,
      "multiple-choice",
    ),
    passage,
    prompt,
    choices: options.map(
      (text, index) =>
        choice(
          text,
          index === answer,
          explanation,
        ),
    ),
    answer,
    walkthrough,
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

const circleQuestions:
  ExamQuestion[] = [
  studentResponse(
    "math-geo-exp1-circles-e1",
    "Easy",
    "Circles",
    "A circle has diameter 10. Its area is kπ square units.",
    "What is the value of k?",
    "25",
    [
      "The radius is half the diameter: r = 5.",
      "Use A = πr².",
      "A = π(5²) = 25π, so k = 25.",
    ],
  ),
  studentResponse(
    "math-geo-exp1-circles-e2",
    "Easy",
    "Circles",
    "The circumference of a circle is 18π units.",
    "What is the diameter of the circle?",
    "18",
    [
      "Use C = πd.",
      "18π = πd.",
      "Divide by π to get d = 18.",
    ],
  ),
  studentResponse(
    "math-geo-exp1-circles-m1",
    "Medium",
    "Circles",
    "The circumference of a circle is 14π units. Its area is kπ square units.",
    "What is the value of k?",
    "49",
    [
      "Use C = 2πr.",
      "14π = 2πr, so r = 7.",
      "A = πr² = π(7²) = 49π, so k = 49.",
    ],
  ),
  studentResponse(
    "math-geo-exp1-circles-m2",
    "Medium",
    "Circles",
    "A circle has area 64π square units.",
    "What is the circumference of the circle divided by π?",
    "16",
    [
      "Use A = πr².",
      "64π = πr², so r = 8.",
      "C = 2πr = 16π, so C ÷ π = 16.",
    ],
  ),
  studentResponse(
    "math-geo-exp1-circles-h1",
    "Hard",
    "Circles",
    "A sector of a circle has central angle 120° and radius 9. Its area is kπ square units.",
    "What is the value of k?",
    "27",
    [
      "A 120° sector is 120/360 = 1/3 of the circle.",
      "The whole circle has area π(9²) = 81π.",
      "The sector area is (1/3)(81π) = 27π, so k = 27.",
    ],
  ),
  studentResponse(
    "math-geo-exp1-circles-h2",
    "Hard",
    "Circles",
    "A circle with center O has radius 10. A chord is 16 units long. The perpendicular distance from O to the chord is d.",
    "What is the value of d?",
    "6",
    [
      "A radius perpendicular to a chord bisects the chord.",
      "Half the chord is 8, forming a right triangle with hypotenuse 10.",
      "d² + 8² = 10², so d² = 36 and d = 6.",
    ],
  ),
];

const triangleQuestions:
  ExamQuestion[] = [
  multipleChoice(
    "math-geo-exp1-triangles-e1",
    "Easy",
    "Triangles",
    "Two angles of a triangle measure 48° and 67°.",
    "What is the measure of the third angle?",
    ["55°", "65°", "75°", "115°"],
    "65°",
    [
      "The interior angles of a triangle sum to 180°.",
      "180° - 48° - 67° = 65°.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-triangles-e2",
    "Easy",
    "Triangles",
    "Triangle ABC is similar to triangle DEF. Side AB corresponds to side DE. AB = 6 and DE = 15.",
    "What is the scale factor from triangle ABC to triangle DEF?",
    ["2/5", "3/2", "5/2", "9"],
    "5/2",
    [
      "Use corresponding sides to find the scale factor.",
      "DE ÷ AB = 15 ÷ 6 = 5/2.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-triangles-m1",
    "Medium",
    "Triangles",
    "An exterior angle of a triangle measures 132°. One of the two remote interior angles measures 57°.",
    "What is the measure of the other remote interior angle?",
    ["65°", "75°", "85°", "189°"],
    "75°",
    [
      "An exterior angle equals the sum of the two remote interior angles.",
      "132° - 57° = 75°.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-triangles-m2",
    "Medium",
    "Triangles",
    "A triangle has base 14 and area 63 square units.",
    "What is the height corresponding to that base?",
    ["4.5", "7", "9", "18"],
    "9",
    [
      "Use A = (1/2)bh.",
      "63 = (1/2)(14)h = 7h.",
      "h = 9.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-triangles-h1",
    "Hard",
    "Triangles",
    "Triangles ABC and DEF are similar. In triangle ABC, two corresponding sides have lengths 8 and 12. In triangle DEF, the side corresponding to 8 has length 14.",
    "What is the length of the side in triangle DEF corresponding to 12?",
    ["18", "20", "21", "26"],
    "21",
    [
      "The scale factor is 14/8 = 7/4.",
      "Multiply the corresponding side 12 by 7/4.",
      "12(7/4) = 21.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-triangles-h2",
    "Hard",
    "Triangles",
    "An isosceles triangle has two equal sides of length 13 and a base of length 10.",
    "What is the area of the triangle?",
    ["50", "60", "65", "120"],
    "60",
    [
      "The altitude bisects the base into two segments of length 5.",
      "Using the Pythagorean theorem, the height is √(13² - 5²) = √144 = 12.",
      "Area = (1/2)(10)(12) = 60.",
    ],
  ),
];

const trigonometryQuestions:
  ExamQuestion[] = [
  multipleChoice(
    "math-geo-exp1-trig-e1",
    "Easy",
    "Right Triangle Trigonometry",
    "In a right triangle, relative to angle θ, the opposite side has length 6 and the adjacent side has length 8.",
    "What is tan θ?",
    ["3/5", "3/4", "4/3", "5/4"],
    "3/4",
    [
      "Tangent is opposite divided by adjacent.",
      "tan θ = 6/8 = 3/4.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-trig-e2",
    "Easy",
    "Right Triangle Trigonometry",
    "A right triangle has a 30° angle and hypotenuse 12.",
    "What is the length of the side opposite the 30° angle?",
    ["4", "6", "6√3", "12√3"],
    "6",
    [
      "In a 30°-60°-90° triangle, the side opposite 30° is half the hypotenuse.",
      "12 ÷ 2 = 6.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-trig-m1",
    "Medium",
    "Right Triangle Trigonometry",
    "A 10-foot ladder rests against a vertical wall. The ladder makes a 60° angle with the ground.",
    "How high up the wall does the ladder reach?",
    ["5", "5√3", "10√3", "20"],
    "5√3",
    [
      "The height is opposite the 60° angle and the ladder is the hypotenuse.",
      "sin 60° = height/10.",
      "height = 10(√3/2) = 5√3.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-trig-m2",
    "Medium",
    "Right Triangle Trigonometry",
    "A right isosceles triangle has legs of length 7.",
    "What is the length of the hypotenuse?",
    ["7", "7√2", "14", "14√2"],
    "7√2",
    [
      "A right isosceles triangle is a 45°-45°-90° triangle.",
      "Its hypotenuse equals a leg times √2.",
      "The hypotenuse is 7√2.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-trig-h1",
    "Hard",
    "Right Triangle Trigonometry",
    "From a point on level ground, the angle of elevation to the top of a vertical tower is 30°. The point is 40√3 feet from the base of the tower.",
    "What is the height of the tower?",
    ["20", "40", "60", "120"],
    "40",
    [
      "Use tan 30° = height/(40√3).",
      "1/√3 = height/(40√3).",
      "The height is 40 feet.",
    ],
  ),
  multipleChoice(
    "math-geo-exp1-trig-h2",
    "Hard",
    "Right Triangle Trigonometry",
    "In a right triangle, cos θ = 12/13 and θ is acute.",
    "What is sin θ?",
    ["5/13", "12/13", "13/12", "√313/13"],
    "5/13",
    [
      "A cosine ratio of 12/13 gives adjacent side 12 and hypotenuse 13.",
      "The opposite side is √(13² - 12²) = 5.",
      "Therefore sin θ = opposite/hypotenuse = 5/13.",
    ],
  ),
];

export const mathExpansionPack1:
  ExamQuestion[] = [
  ...circleQuestions,
  ...triangleQuestions,
  ...trigonometryQuestions,
];

export const mathExpansionPack1Stats = {
  total:
    mathExpansionPack1.length,
  circles:
    circleQuestions.length,
  triangles:
    triangleQuestions.length,
  rightTriangleTrigonometry:
    trigonometryQuestions.length,
  easy:
    mathExpansionPack1.filter(
      (question) =>
        question.difficulty ===
        "Easy",
    ).length,
  medium:
    mathExpansionPack1.filter(
      (question) =>
        question.difficulty ===
        "Medium",
    ).length,
  hard:
    mathExpansionPack1.filter(
      (question) =>
        question.difficulty ===
        "Hard",
    ).length,
  multipleChoice:
    mathExpansionPack1.filter(
      (question) =>
        question.questionType ===
        "multiple-choice",
    ).length,
  studentResponse:
    mathExpansionPack1.filter(
      (question) =>
        question.questionType ===
        "student-response",
    ).length,
};
