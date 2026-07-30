import type { ExamQuestion, ReadingDomain } from "./types";

const difficulty = (i: number): "Easy" | "Medium" | "Hard" =>
  i % 3 === 0 ? "Easy" : i % 3 === 1 ? "Medium" : "Hard";
const choice = (text: string, correct: boolean) => ({
  text,
  rationale: correct
    ? "This choice best fits the sentence's logic and meaning."
    : "This choice does not precisely fit the sentence's logic, grammar, or context.",
});

const vocabularyEntries = [
  ["ambiguous", "open to more than one interpretation"],
  ["bolster", "to strengthen or support"],
  ["concise", "brief but complete"],
  ["corroborate", "to confirm with evidence"],
  ["diminish", "to make or become smaller"],
  ["empirical", "based on observation or experiment"],
  ["infer", "to reach a conclusion from evidence"],
  ["mitigate", "to make less severe"],
  ["nuance", "a subtle distinction"],
  ["plausible", "seemingly reasonable or probable"],
  ["refute", "to prove a claim false"],
  ["substantiate", "to support with evidence"],
  ["tentative", "not fully certain or decided"],
  ["validate", "to confirm as sound or accurate"],
  ["viable", "capable of working successfully"],
  ["concede", "to acknowledge a point as true"],
  ["elicit", "to draw out a response"],
  ["implicit", "suggested but not directly stated"],
  ["prevalent", "widespread or common"],
  ["scrutinize", "to examine closely"],
] as const;

export const vocabularyExamBank: ExamQuestion[] = Array.from(
  { length: 120 },
  (_, i) => {
    const [word, definition] = vocabularyEntries[i % vocabularyEntries.length];
    const distractorWords = [1, 2, 3].map(
      (offset) =>
        vocabularyEntries[(i + offset * 5) % vocabularyEntries.length][0],
    );
    const raw = [word, ...distractorWords];
    const shift = i % 4;
    const options = raw.map((_, index) => raw[(index + shift) % raw.length]);
    const answer = options.indexOf(word);
    return {
      id: `vocab-${i}`,
      examId: `rw-vocab-${i}`,
      section: "Reading & Writing",
      courseId: "vocabulary-in-context",
      courseTitle: "Vocabulary · Words in Context",
      difficulty: difficulty(i),
      skill: "Words in Context",
      passage: `The researchers needed a word meaning “${definition}” to describe the claim.`,
      prompt: "Which choice most logically and precisely completes the text?",
      choices: options.map((text, index) => choice(text, index === answer)),
      answer,
    };
  },
);

const readingSkills = [
  "Main Idea",
  "Inference",
  "Textual Evidence",
  "Author's Purpose",
  "Organization",
  "Cross-Text Connections",
];

const readingSkillDomain: Record<string, ReadingDomain> = {
  "Main Idea": "Information and Ideas",
  Inference: "Information and Ideas",
  "Textual Evidence": "Information and Ideas",
  "Author's Purpose": "Craft and Structure",
  Organization: "Craft and Structure",
  "Cross-Text Connections": "Craft and Structure",
};
export const legacySupplementalReadingBank: ExamQuestion[] = Array.from(
  { length: 72 },
  (_, i) => {
    const skill = readingSkills[i % readingSkills.length];
    const correct = i % 4;
    const passages = [
      "Researchers compared two urban gardens. The garden using native plants required less irrigation while supporting more pollinators. The researchers cautioned that local climate still affects the result.",
      "A historian argues that a newly found diary does not overturn the accepted account of the expedition, but it does reveal that several minor decisions were made earlier than scholars had assumed.",
      "The novelist repeatedly shifts from broad descriptions of the city to precise details of a single doorway, creating a contrast between public scale and private memory.",
      "Study A found a relationship between sleep and recall, whereas Study B found that the relationship weakened after researchers controlled for stress.",
    ];
    const options = [
      "It states the passage's supported central claim.",
      "It makes a broader claim than the evidence permits.",
      "It focuses on a detail while missing the passage's purpose.",
      "It contradicts an explicit qualification in the passage.",
    ];
    const rotated = options.map((_, j) => options[(j - correct + 4) % 4]);
    return {
      id: `reading-extra-${i}`,
      examId: `rw-reading-extra-${i}`,
      section: "Reading & Writing",
      courseId: `reading-expansion-${skill.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      courseTitle: `Reading Expansion · ${skill}`,
      difficulty: difficulty(i),
      domain: readingSkillDomain[skill],
      skill,
      passage: passages[i % passages.length],
      prompt: `Which choice best answers this ${skill.toLowerCase()} question?`,
      choices: rotated.map((x, j) => choice(x, j === correct)),
      answer: correct,
    };
  },
);

const grammarSkills = [
  "Sentence Boundaries",
  "Punctuation",
  "Verb Agreement",
  "Pronouns",
  "Modifiers",
  "Parallel Structure",
  "Transitions",
  "Concision",
];

const grammarSkillDomain: Record<string, ReadingDomain> = {
  "Sentence Boundaries": "Standard English Conventions",
  Punctuation: "Standard English Conventions",
  "Verb Agreement": "Standard English Conventions",
  Pronouns: "Standard English Conventions",
  Modifiers: "Standard English Conventions",
  "Parallel Structure": "Standard English Conventions",
  Transitions: "Expression of Ideas",
  Concision: "Expression of Ideas",
};
export const supplementalGrammarBank: ExamQuestion[] = Array.from(
  { length: 96 },
  (_, i) => {
    const skill = grammarSkills[i % grammarSkills.length];
    const correct = i % 4;
    const stems = [
      "The museum expanded its evening hours ____ attendance increased during the summer.",
      "The collection of early photographs ____ stored in a climate-controlled room.",
      "After reviewing the measurements, ____ the engineer revised the design.",
      "The proposal was practical, affordable, and ____ .",
    ];
    const sets = [
      ["and", "attendance", "because attendance", "which attendance"],
      ["is", "are", "have been", "were"],
      [
        "the unexpected error became clear to the engineer",
        "the engineer noticed an unexpected error",
        "an unexpected error was noticed",
        "there was an error",
      ],
      [
        "easy to implement",
        "implementation was easy",
        "it could be implemented",
        "with ease",
      ],
    ];
    const base = sets[i % sets.length];
    const ordered = base.map((_, j) => base[(j - correct + 4) % 4]);
    return {
      id: `grammar-extra-${i}`,
      examId: `rw-grammar-extra-${i}`,
      section: "Reading & Writing",
      courseId: `grammar-expansion-${skill.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      courseTitle: `Grammar Expansion · ${skill}`,
      difficulty: difficulty(i),
      domain: grammarSkillDomain[skill],
      skill,
      passage: stems[i % stems.length],
      prompt:
        "Which choice completes the text so that it conforms to Standard English conventions?",
      choices: ordered.map((x, j) => choice(x, j === correct)),
      answer: correct,
    };
  },
);

const mathSkills = [
  "Linear Equations",
  "Systems of Equations",
  "Linear Inequalities",
  "Functions",
  "Equivalent Expressions",
  "Quadratics",
  "Polynomials",
  "Nonlinear Systems",
  "Ratios and Percentages",
  "Data and Statistics",
  "Probability",
  "Two-Variable Data",
  "Lines, Angles, and Triangles",
  "Circles",
  "Area and Volume",
  "Trigonometry",
] as const;

type MathSkill = (typeof mathSkills)[number];

type GeneratedMath = {
  passage: string;
  prompt: string;
  answerText: string;
  distractors: string[];
  explanation: string;
};

const levelForVariant = (variant: number): "Easy" | "Medium" | "Hard" =>
  variant < 8 ? "Easy" : variant < 20 ? "Medium" : "Hard";

const formatNumber = (value: number): string =>
  Number.isInteger(value)
    ? String(value)
    : String(Math.round(value * 100) / 100);

function uniqueChoices(
  answerText: string,
  distractors: string[],
  seed: number,
) {
  const fallback = ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12"];
  const values = [answerText, ...distractors, ...fallback]
    .filter((value, index, all) => all.indexOf(value) === index)
    .slice(0, 4);
  while (values.length < 4) values.push(String(20 + values.length));
  const shift = seed % 4;
  const ordered = values.map((_, index) => values[(index + shift) % 4]);
  return { ordered, answer: ordered.indexOf(answerText) };
}

function makeMathQuestion(
  skill: MathSkill,
  variant: number,
  generated: GeneratedMath,
): ExamQuestion {
  const { ordered, answer } = uniqueChoices(
    generated.answerText,
    generated.distractors,
    variant,
  );
  const slug = skill.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    id: `math-${slug}-${variant}`,
    examId: `math-${slug}-${variant}`,
    section: "Math",
    courseId: `math-${slug}`,
    courseTitle: `Math · ${skill}`,
    difficulty: levelForVariant(variant),
    skill,
    passage: generated.passage,
    prompt: generated.prompt,
    choices: ordered.map((text, index) => ({
      text,
      rationale:
        index === answer
          ? generated.explanation
          : "This choice results from an incorrect setup, operation, or interpretation of the given information.",
    })),
    answer,
  };
}

function generateMath(skill: MathSkill, v: number): GeneratedMath {
  const hard = v >= 20;
  const medium = v >= 8;
  const n = v + 2;
  switch (skill) {
    case "Linear Equations": {
      const x = 2 + (v % 9),
        a = 2 + (v % 5),
        b = 3 + ((v * 2) % 8);
      const c = a * x + b;
      return {
        passage: hard
          ? `${a}(x + ${b}) = ${a * (x + b)}`
          : `${a}x + ${b} = ${c}`,
        prompt: "What is the value of x?",
        answerText: String(x),
        distractors: [String(x + 1), String(x - 1), String(c - b)],
        explanation: hard
          ? `Divide both sides by ${a}, then subtract ${b}; x = ${x}.`
          : `Subtract ${b} and divide by ${a}; x = ${x}.`,
      };
    }
    case "Systems of Equations": {
      const x = 1 + (v % 7),
        y = 2 + ((v * 2) % 6),
        s = x + y,
        d = x - y;
      return {
        passage: medium
          ? `x + y = ${s}\n2x + y = ${2 * x + y}`
          : `x + y = ${s}\nx - y = ${d}`,
        prompt: "What is the value of x?",
        answerText: String(x),
        distractors: [String(y), String(s), String(Math.abs(d))],
        explanation: medium
          ? `Subtract the first equation from the second to obtain x = ${x}.`
          : `Add the equations to get 2x = ${2 * x}, so x = ${x}.`,
      };
    }
    case "Linear Inequalities": {
      const boundary = 3 + (v % 10),
        a = 2 + (v % 4),
        b = 1 + (v % 7),
        c = a * boundary + b;
      const symbol = hard ? "<" : ">";
      return {
        passage: `${a}x + ${b} ${symbol} ${c}`,
        prompt: "Which inequality describes all possible values of x?",
        answerText: `x ${symbol} ${boundary}`,
        distractors: [
          `x ${symbol} ${boundary + 1}`,
          `x ${symbol === ">" ? "<" : ">"} ${boundary}`,
          `x ${symbol} ${c - b}`,
        ],
        explanation: `Subtract ${b} and divide by positive ${a}; the inequality sign stays the same.`,
      };
    }
    case "Functions": {
      const a = 2 + (v % 5),
        b = 1 + (v % 8),
        input = 2 + (v % 6),
        output = a * input + b;
      return {
        passage: hard
          ? `f(x) = ${a}x + ${b}. The graph of g is the graph of f shifted up 3 units.`
          : `f(x) = ${a}x + ${b}`,
        prompt: hard ? `What is g(${input})?` : `What is f(${input})?`,
        answerText: String(hard ? output + 3 : output),
        distractors: [
          String(output),
          String(a + input + b),
          String(output - 3),
        ],
        explanation: hard
          ? `First evaluate f(${input}) = ${output}, then add 3 for the upward shift.`
          : `Substitute ${input} for x: ${a}(${input}) + ${b} = ${output}.`,
      };
    }
    case "Equivalent Expressions": {
      const a = 2 + (v % 5),
        b = 2 + ((v * 3) % 7),
        c = 1 + (v % 4);
      const answer = `${a + c}x + ${a * b}`;
      return {
        passage: `${a}(x + ${b}) + ${c}x`,
        prompt: "Which expression is equivalent to the given expression?",
        answerText: answer,
        distractors: [
          `${a + c}x + ${b}`,
          `${a * c}x + ${a * b}`,
          `${a + c + a * b}x`,
        ],
        explanation: `Distribute ${a}, then combine like terms: ${a}x + ${a * b} + ${c}x = ${answer}.`,
      };
    }
    case "Quadratics": {
      const r1 = 1 + (v % 6),
        r2 = 2 + ((v * 2) % 7),
        sum = r1 + r2,
        product = r1 * r2;
      return {
        passage: `x² - ${sum}x + ${product} = 0`,
        prompt: hard
          ? "What is the sum of the solutions?"
          : "Which value is a solution?",
        answerText: hard ? String(sum) : String(r1),
        distractors: hard
          ? [String(product), String(-sum), String(r2)]
          : [String(-r1), String(sum), String(product)],
        explanation: hard
          ? `For x² − ${sum}x + ${product} = 0, the sum of the roots is ${sum}.`
          : `The quadratic factors as (x − ${r1})(x − ${r2}), so ${r1} is a solution.`,
      };
    }
    case "Polynomials": {
      const a = 1 + (v % 5),
        b = 2 + (v % 6),
        x = 2 + (v % 3),
        value = a * x * x + b * x - 3;
      return {
        passage: `p(x) = ${a}x² + ${b}x - 3`,
        prompt: `What is p(${x})?`,
        answerText: String(value),
        distractors: [
          String(value + 3),
          String(a * x + b * x - 3),
          String(a * x * x + b - 3),
        ],
        explanation: `Substitute ${x}: ${a}(${x})² + ${b}(${x}) − 3 = ${value}.`,
      };
    }
    case "Nonlinear Systems": {
      const x = 1 + (v % 5),
        y = x * x;
      return {
        passage: `y = x²\ny = ${x + 1}x - ${x}`,
        prompt: "Which x-value satisfies both equations?",
        answerText: String(x),
        distractors: [String(-x), String(y), String(x + 1)],
        explanation: `Substituting x = ${x} gives y = ${y} in both equations.`,
      };
    }
    case "Ratios and Percentages": {
      const percent = [10, 20, 25, 30, 40, 50][v % 6],
        base = 40 + 20 * (v % 6),
        amount = (base * percent) / 100;
      return {
        passage: `A quantity of ${base} is increased by ${percent}%.`,
        prompt: hard
          ? "What is the new quantity?"
          : `What is ${percent}% of ${base}?`,
        answerText: formatNumber(hard ? base + amount : amount),
        distractors: [
          formatNumber(amount),
          formatNumber(base - amount),
          formatNumber(base + percent),
        ],
        explanation: hard
          ? `The increase is ${amount}, so the new quantity is ${base + amount}.`
          : `${percent}% of ${base} is ${amount}.`,
      };
    }
    case "Data and Statistics": {
      const values = [
        4 + (v % 4),
        6 + (v % 4),
        8 + (v % 4),
        10 + (v % 4),
        12 + (v % 4),
      ];
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      return {
        passage: `The data set is ${values.join(", ")}.`,
        prompt: hard
          ? "What is the median of the data set?"
          : "What is the mean of the data set?",
        answerText: formatNumber(hard ? values[2] : mean),
        distractors: [
          String(values[0]),
          String(values[4]),
          formatNumber(mean + 1),
        ],
        explanation: hard
          ? `The ordered middle value is ${values[2]}.`
          : `The sum divided by 5 is ${mean}.`,
      };
    }
    case "Probability": {
      const red = 2 + (v % 6),
        blue = 3 + ((v * 2) % 7),
        total = red + blue;
      return {
        passage: `A bag contains ${red} red marbles and ${blue} blue marbles. One marble is selected at random.`,
        prompt: "What is the probability of selecting a red marble?",
        answerText: `${red}/${total}`,
        distractors: [`${blue}/${total}`, `${red}/${blue}`, `1/${total}`],
        explanation: `There are ${red} favorable outcomes out of ${total} total outcomes.`,
      };
    }
    case "Two-Variable Data": {
      const slope = 2 + (v % 5),
        intercept = 1 + (v % 6),
        x = 3 + (v % 4),
        y = slope * x + intercept;
      return {
        passage: `A line of best fit is y = ${slope}x + ${intercept}.`,
        prompt: `What value of y is predicted when x = ${x}?`,
        answerText: String(y),
        distractors: [
          String(slope + x + intercept),
          String(slope * x),
          String(y + slope),
        ],
        explanation: `Substitute x = ${x}: y = ${slope}(${x}) + ${intercept} = ${y}.`,
      };
    }
    case "Lines, Angles, and Triangles": {
      const a = 35 + (v % 8) * 5,
        b = 45 + (v % 5) * 5,
        third = 180 - a - b;
      return {
        passage: `Two interior angles of a triangle measure ${a}° and ${b}°.`,
        prompt: "What is the measure of the third angle?",
        answerText: `${third}°`,
        distractors: [`${a + b}°`, `${180 - a}°`, `${Math.abs(a - b)}°`],
        explanation: `Triangle angles sum to 180°, so the third angle is 180 − ${a} − ${b} = ${third}°.`,
      };
    }
    case "Circles": {
      const r = 2 + (v % 8);
      return {
        passage: `A circle has radius ${r}.`,
        prompt: hard
          ? "What is the area of the circle?"
          : "What is the circumference of the circle?",
        answerText: hard ? `${r * r}π` : `${2 * r}π`,
        distractors: hard
          ? [`${2 * r}π`, `${r}π`, `${2 * r * r}π`]
          : [`${r}π`, `${r * r}π`, `${2 * r * r}π`],
        explanation: hard
          ? `Area = πr² = ${r * r}π.`
          : `Circumference = 2πr = ${2 * r}π.`,
      };
    }
    case "Area and Volume": {
      const l = 3 + (v % 6),
        w = 2 + (v % 5),
        h = 2 + (v % 4),
        answer = hard ? l * w * h : l * w;
      return {
        passage: hard
          ? `A rectangular prism has length ${l}, width ${w}, and height ${h}.`
          : `A rectangle has length ${l} and width ${w}.`,
        prompt: hard ? "What is the volume?" : "What is the area?",
        answerText: String(answer),
        distractors: [
          String(l + w + h),
          String(2 * (l + w)),
          String(answer + h),
        ],
        explanation: hard
          ? `Volume = lwh = ${l} × ${w} × ${h} = ${answer}.`
          : `Area = lw = ${l} × ${w} = ${answer}.`,
      };
    }
    case "Trigonometry": {
      const triples = [
        [3, 4, 5],
        [5, 12, 13],
        [8, 15, 17],
        [7, 24, 25],
      ] as const;
      const [opposite, adjacent, hypotenuse] = triples[v % triples.length];
      return {
        passage: `In a right triangle, relative to angle θ, the opposite side is ${opposite}, the adjacent side is ${adjacent}, and the hypotenuse is ${hypotenuse}.`,
        prompt: hard ? "What is cos θ?" : "What is sin θ?",
        answerText: hard
          ? `${adjacent}/${hypotenuse}`
          : `${opposite}/${hypotenuse}`,
        distractors: hard
          ? [
              `${opposite}/${hypotenuse}`,
              `${hypotenuse}/${adjacent}`,
              `${opposite}/${adjacent}`,
            ]
          : [
              `${adjacent}/${hypotenuse}`,
              `${hypotenuse}/${opposite}`,
              `${opposite}/${adjacent}`,
            ],
        explanation: hard
          ? `cos θ = adjacent/hypotenuse = ${adjacent}/${hypotenuse}.`
          : `sin θ = opposite/hypotenuse = ${opposite}/${hypotenuse}.`,
      };
    }
  }
}

export const supplementalMathBank: ExamQuestion[] = mathSkills.flatMap(
  (skill) =>
    Array.from({ length: 30 }, (_, variant) =>
      makeMathQuestion(skill, variant, generateMath(skill, variant)),
    ),
);
