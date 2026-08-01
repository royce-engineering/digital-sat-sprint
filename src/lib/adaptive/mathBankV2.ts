import type { ExamQuestion, MathDomain, MathQuestionType } from "./types";

type Difficulty = "Easy" | "Medium" | "Hard";
const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];
const choice = (text: string, correct: boolean, explanation: string) => ({
  text,
  rationale: correct ? explanation : "This option comes from an incorrect setup or interpretation.",
});
const fmt = (n: number) => Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);

function baseQuestion(i: number, type: MathQuestionType, domain: MathDomain, skill: string): Omit<ExamQuestion, "passage" | "prompt" | "choices" | "answer"> {
  return {
    id: `math-v2-${type}-${i}`,
    examId: `math-v2-${type}-${i}`,
    section: "Math",
    courseId: `math-v2-${type}`,
    courseTitle: `Math Engine 2.0 · ${skill}`,
    difficulty: difficulties[i % 3],
    skill,
    mathDomain: domain,
    questionType: type,
    calculatorRecommended: type === "graph" || i % 3 === 2,
    estimatedTime: type === "student-response" ? 85 : 95,
    tags: [type, domain, skill],
  };
}

const studentResponse: ExamQuestion[] = Array.from({ length: 40 }, (_, i) => {
  const mode = i % 4;
  if (mode === 0) {
    const x = 3 + (i % 9), a = 2 + (i % 5), b = 4 + (i % 7), c = a * x + b;
    return { ...baseQuestion(i, "student-response", "Algebra", "Linear Equations"), passage: `${a}x + ${b} = ${c}`, prompt: "Enter the value of x.", choices: [], answer: -1, numericAnswer: String(x), walkthrough: [`Subtract ${b}.`, `Divide by ${a}.`, `x = ${x}.`] };
  }
  if (mode === 1) {
    const n = 3 + (i % 8), d = 4 + (i % 5), value = n / d;
    return { ...baseQuestion(i, "student-response", "Problem Solving and Data Analysis", "Ratios"), passage: `A recipe uses ${n} cups of water for ${d} batches.`, prompt: "How many cups of water are used per batch? Enter a fraction or decimal.", choices: [], answer: -1, numericAnswer: `${n}/${d}`, walkthrough: [`Divide ${n} by ${d}.`, `${n}/${d} = ${fmt(value)}.`] };
  }
  if (mode === 2) {
    const r = 2 + (i % 7), area = r * r;
    return { ...baseQuestion(i, "student-response", "Geometry and Trigonometry", "Circles"), passage: `A circle has radius ${r}. Its area is kπ square units.`, prompt: "What is the value of k?", choices: [], answer: -1, numericAnswer: String(area), walkthrough: [`Use A = πr².`, `k = ${r}² = ${area}.`] };
  }
  const root = 2 + (i % 6), c = root * root;
  return { ...baseQuestion(i, "student-response", "Advanced Math", "Quadratic Equations"), passage: `x² = ${c}, and x is positive.`, prompt: "Enter the value of x.", choices: [], answer: -1, numericAnswer: String(root), walkthrough: [`Take the positive square root of ${c}.`, `x = ${root}.`] };
});

const tableQuestions: ExamQuestion[] = Array.from({ length: 30 }, (_, i) => {
  const slope = 2 + (i % 5), intercept = 3 + (i % 6), x = [0, 2, 4, 6], ys = x.map(v => slope * v + intercept), target = 8, result = slope * target + intercept;
  const answerText = String(result), distractors = [String(result - slope), String(result + intercept), String(slope + target)];
  const values = [answerText, ...distractors]; const shift = i % 4; const ordered = values.map((_, j) => values[(j + shift) % 4]); const answer = ordered.indexOf(answerText);
  return {
    ...baseQuestion(i, "table", i % 2 ? "Algebra" : "Problem Solving and Data Analysis", i % 2 ? "Linear Functions" : "Data Modeling"),
    passage: "The table shows a linear relationship between x and y.",
    prompt: `Based on the table, what is the value of y when x = ${target}?`,
    tableData: { headers: ["x", "y"], rows: x.map((v, j) => [String(v), String(ys[j])]), caption: "Values of a linear relationship" },
    choices: ordered.map((t, j) => choice(t, j === answer, `The slope is ${slope} and the y-intercept is ${intercept}, so y = ${slope}(${target}) + ${intercept} = ${result}.`)),
    answer,
  };
});

const modelingQuestions: ExamQuestion[] = Array.from({ length: 30 }, (_, i) => {
  const fixed = 3 + (i % 8), rate = 2 + (i % 5) * 0.5, units = 8 + (i % 9), total = fixed + rate * units;
  const answerText = fmt(total), distractors = [fmt(rate * units), fmt(fixed * units + rate), fmt(total + rate)];
  const values = [answerText, ...distractors]; const shift = (i + 1) % 4; const ordered = values.map((_, j) => values[(j + shift) % 4]); const answer = ordered.indexOf(answerText);
  return {
    ...baseQuestion(i, "modeling", i % 3 === 0 ? "Algebra" : "Problem Solving and Data Analysis", "Linear Modeling"),
    passage: `A bike rental company charges a fixed fee of $${fixed} plus $${fmt(rate)} per hour.`,
    prompt: `What is the total cost, in dollars, to rent a bike for ${units} hours?`,
    choices: ordered.map((t, j) => choice(t, j === answer, `Use C = ${fixed} + ${fmt(rate)}h. For h = ${units}, C = $${answerText}.`)),
    answer,
  };
});

const graphQuestions: ExamQuestion[] = Array.from({ length: 20 }, (_, i) => {
  const slope = i % 2 === 0 ? 2 + (i % 4) : -(2 + (i % 3)), intercept = 1 + (i % 5);
  const points: Array<[number, number]> = [-2, -1, 0, 1, 2].map(x => [x, slope * x + intercept]);
  const answerText = String(slope), distractors = [String(intercept), String(-slope), String(slope + 1)];
  const values = [answerText, ...distractors]; const shift = (i + 2) % 4; const ordered = values.map((_, j) => values[(j + shift) % 4]); const answer = ordered.indexOf(answerText);
  return {
    ...baseQuestion(i, "graph", "Algebra", "Slope and Graphs"),
    passage: "The plotted points lie on a straight line.",
    prompt: "What is the slope of the line?",
    graphData: { kind: "line", points, xLabel: "x", yLabel: "y" },
    choices: ordered.map((t, j) => choice(t, j === answer, `Using any two points, change in y divided by change in x is ${slope}.`)),
    answer,
  };
});


const advancedMathQuestions: ExamQuestion[] = Array.from(
  { length: 24 },
  (_, i) => {
    const questionIndex = 1000 + i;
    const mode = i % 4;

    if (mode === 0) {
      const root1 = 2 + (i % 5);
      const root2 = 6 + (i % 7);
      const sum = root1 + root2;
      const product = root1 * root2;
      const correct = String(sum);
      const distractors = [
        String(product),
        String(root2 - root1),
        String(sum + 1),
      ];
      const values = [correct, ...distractors];
      const shift = i % 4;
      const ordered = values.map(
        (_, index) => values[(index + shift) % 4],
      );
      const answer = ordered.indexOf(correct);

      return {
        ...baseQuestion(
          questionIndex,
          "multiple-choice",
          "Advanced Math",
          "Quadratic Equations",
        ),
        passage: `The equation x² - ${sum}x + ${product} = 0 has two positive solutions.`,
        prompt: "What is the sum of the two solutions?",
        choices: ordered.map((text, index) =>
          choice(
            text,
            index === answer,
            `By Vieta's formulas, the sum of the solutions is ${sum}.`,
          ),
        ),
        answer,
        walkthrough: [
          "For x² - sx + p = 0, the sum of the solutions is s.",
          `Here, s = ${sum}.`,
        ],
      };
    }

    if (mode === 1) {
      const base = 2 + (i % 4);
      const exponent = 3 + (i % 3);
      const value = base ** exponent;
      const correct = String(value);
      const distractors = [
        String(base * exponent),
        String(base ** (exponent - 1)),
        String(value + base),
      ];
      const values = [correct, ...distractors];
      const shift = (i + 1) % 4;
      const ordered = values.map(
        (_, index) => values[(index + shift) % 4],
      );
      const answer = ordered.indexOf(correct);

      return {
        ...baseQuestion(
          questionIndex,
          "multiple-choice",
          "Advanced Math",
          "Exponential Functions",
        ),
        passage: `The function f(x) = ${base}^x.`,
        prompt: `What is the value of f(${exponent})?`,
        choices: ordered.map((text, index) =>
          choice(
            text,
            index === answer,
            `Substitute x = ${exponent}: f(${exponent}) = ${base}^${exponent} = ${value}.`,
          ),
        ),
        answer,
        walkthrough: [
          `Substitute ${exponent} for x.`,
          `Evaluate ${base}^${exponent} = ${value}.`,
        ],
      };
    }

    if (mode === 2) {
      const a = 2 + (i % 4);
      const b = 3 + (i % 5);
      const correct = `${a}x + ${b}`;
      const distractors = [
        `${a}x - ${b}`,
        `${b}x + ${a}`,
        `${a + b}x`,
      ];
      const values = [correct, ...distractors];
      const shift = (i + 2) % 4;
      const ordered = values.map(
        (_, index) => values[(index + shift) % 4],
      );
      const answer = ordered.indexOf(correct);

      return {
        ...baseQuestion(
          questionIndex,
          "multiple-choice",
          "Advanced Math",
          "Polynomial Operations",
        ),
        passage: `(x + 1)(${a}x + ${b}) = ${a}x² + ${a + b}x + ${b}`,
        prompt:
          "Which expression is the quotient when the polynomial is divided by x + 1?",
        choices: ordered.map((text, index) =>
          choice(
            text,
            index === answer,
            `The displayed factorization shows that the quotient is ${correct}.`,
          ),
        ),
        answer,
        walkthrough: [
          "Use the given factorization.",
          `Cancel the factor x + 1 to obtain ${correct}.`,
        ],
      };
    }

    const solution = 3 + (i % 6);
    const coefficient = 2 + (i % 5);
    const constant = coefficient * solution - 1;
    const correct = String(solution);
    const distractors = [
      String(solution + 1),
      String(solution - 1),
      String(constant),
    ];
    const values = [correct, ...distractors];
    const shift = (i + 3) % 4;
    const ordered = values.map(
      (_, index) => values[(index + shift) % 4],
    );
    const answer = ordered.indexOf(correct);

    return {
      ...baseQuestion(
        questionIndex,
        "multiple-choice",
        "Advanced Math",
        "Radical Equations",
      ),
      passage: `√(${coefficient}x + 1) = √${coefficient * solution + 1}`,
      prompt: "What is the value of x?",
      choices: ordered.map((text, index) =>
        choice(
          text,
          index === answer,
          `Square both sides and solve ${coefficient}x + 1 = ${coefficient * solution + 1}, giving x = ${solution}.`,
        ),
      ),
      answer,
      walkthrough: [
        "Square both sides.",
        `Solve ${coefficient}x + 1 = ${coefficient * solution + 1}.`,
        `x = ${solution}.`,
      ],
    };
  },
);

export const mathBankV2: ExamQuestion[] = [
  ...studentResponse,
  ...tableQuestions,
  ...modelingQuestions,
  ...graphQuestions,
  ...advancedMathQuestions,
];

export const mathBankV2Stats = {
  total: mathBankV2.length,
  studentResponse: studentResponse.length,
  table: tableQuestions.length,
  modeling: modelingQuestions.length,
  graph: graphQuestions.length,
  advancedMath: advancedMathQuestions.length,
};
