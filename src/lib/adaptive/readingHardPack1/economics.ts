import { createReadingQuestion } from "./factory";

const passage = `
Some cities have attempted to reduce traffic congestion by charging drivers a fee to enter crowded central districts during peak hours. Critics argue that such fees merely shift traffic to nearby neighborhoods. Yet studies of several cities found that total vehicle trips declined after congestion pricing was introduced, while public-transit use increased. The researchers caution that pricing alone may not produce these results everywhere: cities with limited transit capacity may need to expand service before drivers can realistically change how they travel.
`.trim();

export const economicsHardQuestions = [
  createReadingQuestion({
    id: "rw-hard-econ-001-q1",
    passage,
    prompt: "Which conclusion is best supported by the passage?",
    choices: [
      {
        text: "Congestion pricing can reduce total vehicle travel when practical alternatives are available.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Congestion pricing always moves traffic into nearby neighborhoods.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Public transit becomes unnecessary after congestion pricing begins.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Every city should introduce identical congestion fees.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Inference",
    domain: "Information and Ideas",
    passageType: "Social Science",
    estimatedTime: 75,
    tags: ["economics", "transportation", "inference", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-econ-001-q2",
    passage,
    prompt: "Which finding would most directly strengthen the researchers' explanation?",
    choices: [
      {
        text: "Trip reductions were largest in cities that added frequent transit service before introducing the fee.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Some drivers disliked paying the fee.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Fuel prices varied during the study period.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Downtown businesses used different advertising strategies.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Social Science",
    estimatedTime: 90,
    tags: ["economics", "transportation", "evidence", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-econ-001-q3",
    passage,
    prompt: "As used in the passage, the word “realistically” most nearly means",
    choices: [
      {
        text: "in a way that is practically possible",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "with complete accuracy",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "without financial cost",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "according to historical tradition",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Words in Context",
    domain: "Craft and Structure",
    passageType: "Social Science",
    estimatedTime: 75,
    tags: ["economics", "words-in-context", "transportation", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

];
