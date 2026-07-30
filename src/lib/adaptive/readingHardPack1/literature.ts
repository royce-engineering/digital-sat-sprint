import { createReadingQuestion } from "./factory";

const passage = `
Mara had rehearsed what she would say when she returned the borrowed violin, but the speech dissolved as soon as Mr. Vale opened the case. He did not inspect the polished wood for scratches. Instead, he tightened the bow, played a single clear note, and smiled. Mara realized that his silence was not indifference. The note was a question, and the answer he wanted was not an apology but proof that she had learned to listen more carefully than before.
`.trim();

export const literatureHardQuestions = [
  createReadingQuestion({
    id: "rw-hard-lit-001-q1",
    passage,
    prompt: "Which choice best describes what Mara comes to understand?",
    choices: [
      {
        text: "Mr. Vale is more concerned with what she learned than with receiving a formal apology.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Mr. Vale has not noticed that the violin was borrowed.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "The violin has been damaged beyond repair.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Mr. Vale expects her to purchase a new bow.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Inference",
    domain: "Information and Ideas",
    passageType: "Literature",
    estimatedTime: 75,
    tags: ["literature", "character", "inference", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-lit-001-q2",
    passage,
    prompt: "The sentence “The note was a question” primarily suggests that the note",
    choices: [
      {
        text: "implicitly asks Mara to demonstrate how her understanding has changed.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "reveals that the violin is badly out of tune.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "causes Mara to forget why she returned.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "shows that Mr. Vale is unwilling to speak to her.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Text Structure and Purpose",
    domain: "Craft and Structure",
    passageType: "Literature",
    estimatedTime: 75,
    tags: ["literature", "figurative-language", "function", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-lit-001-q3",
    passage,
    prompt: "As used in the passage, “dissolved” most nearly means",
    choices: [
      {
        text: "vanished from Mara's mind",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "was spoken very quietly",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "became more detailed",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "was written down",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Words in Context",
    domain: "Craft and Structure",
    passageType: "Literature",
    estimatedTime: 75,
    tags: ["literature", "words-in-context", "character", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

];
