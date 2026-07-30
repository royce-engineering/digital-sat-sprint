import { createReadingQuestion } from "./factory";

const passage = `
In the early nineteenth century, many historical societies collected letters, diaries, and official papers from prominent political leaders. These societies often described their work as preserving the nation's memory. More recently, historians have noted that such collections can also narrow that memory: documents produced by laborers, women, Indigenous communities, and immigrants were less likely to be preserved. Modern archives therefore do more than add missing documents; they also reconsider the assumptions that once determined whose experiences counted as historically significant.
`.trim();

export const historyHardQuestions = [
  createReadingQuestion({
    id: "rw-hard-hist-001-q1",
    passage,
    prompt: "Which choice best states the main idea of the passage?",
    choices: [
      {
        text: "Modern archives seek both to recover overlooked records and to question older standards of historical significance.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Early historical societies preserved every type of document equally.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Official papers are never useful to historians.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Prominent political leaders produced fewer documents than ordinary citizens.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Central Ideas and Details",
    domain: "Information and Ideas",
    passageType: "History",
    estimatedTime: 75,
    tags: ["history", "archives", "central-idea", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-hist-001-q2",
    passage,
    prompt: "Which statement would the author most likely agree with?",
    choices: [
      {
        text: "An archive's contents reflect choices about whose experiences are worth preserving.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Historical collections are neutral records unaffected by social values.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Only government documents should be used to study national history.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Modern archives should discard documents written by political leaders.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Inference",
    domain: "Information and Ideas",
    passageType: "History",
    estimatedTime: 75,
    tags: ["history", "archives", "inference", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-hist-001-q3",
    passage,
    prompt: "The phrase “narrow that memory” primarily emphasizes that early collections",
    choices: [
      {
        text: "preserved a limited range of perspectives.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "contained documents that were physically small.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "focused exclusively on recent events.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "were too disorganized for historians to use.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Words in Context",
    domain: "Craft and Structure",
    passageType: "History",
    estimatedTime: 75,
    tags: ["history", "archives", "words-in-context", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

];
