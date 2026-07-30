import { createReadingQuestion } from "./factory";

const passage = `
In a study of drought tolerance in wild grass, researchers identified a gene associated with a waxy coating on leaves. Plants carrying one variant generally lost water more slowly than plants carrying another variant. Yet in shaded, humid conditions, plants with the supposedly drought-tolerant variant grew more slowly and produced fewer seeds. The researchers therefore argue that the variant is not universally beneficial: a trait that improves survival during drought may impose a reproductive cost when water loss is not a serious threat.
`.trim();

export const geneticsHardQuestions = [
  createReadingQuestion({
    id: "rw-hard-gen-001-q1",
    passage,
    prompt: "Which choice best states the main idea of the passage?",
    choices: [
      {
        text: "The effect of a drought-related gene variant depends on environmental conditions.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "The gene variant always increases seed production.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Researchers could not determine whether the variant affected water loss.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Humid environments cause all wild grasses to grow slowly.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Central Ideas and Details",
    domain: "Information and Ideas",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["genetics", "tradeoff", "environment", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-gen-001-q2",
    passage,
    prompt: "Which finding would most directly strengthen the researchers' conclusion?",
    choices: [
      {
        text: "Plants with the variant survive drought longer but produce fewer seeds in moist soil.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "The waxy coating is visible only under magnification.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Several unrelated grasses grow in dry regions.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Seed production varies among plants with the same variant.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Science",
    estimatedTime: 90,
    tags: ["genetics", "evidence", "tradeoff", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-gen-001-q3",
    passage,
    prompt: "The final sentence primarily serves to",
    choices: [
      {
        text: "generalize the study's results into a conditional principle.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "question whether the gene exists.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "describe how the waxy coating is formed.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "argue that reproduction is less important than survival.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Text Structure and Purpose",
    domain: "Craft and Structure",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["genetics", "function", "interpretation", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

];
