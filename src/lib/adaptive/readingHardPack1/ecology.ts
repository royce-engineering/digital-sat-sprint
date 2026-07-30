import { createReadingQuestion } from "./factory";

const passage = `
Recent studies of temperate forests have shown that mature trees do not merely compete with one another for sunlight and nutrients. Through underground fungal networks, trees may transfer water, carbon compounds, and chemical signals to neighboring trees. Researchers caution, however, that these exchanges do not necessarily indicate purposeful cooperation. Instead, the transfers may arise because fungal networks improve their own chances of survival by maintaining multiple healthy host trees. Thus, outcomes that resemble cooperation need not result from cooperative intent.
`.trim();

export const ecologyHardQuestions = [
  createReadingQuestion({
    id: "rw-hard-eco-001-q1",
    passage,
    prompt: "Which choice best states the central idea of the passage?",
    choices: [
      {
        text: "Trees intentionally cooperate to ensure the survival of entire forests.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Fungal networks mainly transfer nutrients to the youngest trees.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Resource transfers among trees may resemble cooperation without demonstrating cooperative intent.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Competition among mature trees has little effect on forest ecosystems.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 2,
    skill: "Central Ideas and Details",
    domain: "Information and Ideas",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["ecology", "fungal-networks", "central-idea", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-eco-001-q2",
    passage,
    prompt: "Which finding would most directly support the explanation offered in the passage?",
    choices: [
      {
        text: "Fungal networks connected to several healthy trees survive longer than networks connected to one tree.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Some trees grow faster in direct sunlight than beneath a forest canopy.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Forests with many tree species often contain many fungal species.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Fungal material remains in soil after a tree dies.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Science",
    estimatedTime: 90,
    tags: ["ecology", "fungal-networks", "evidence", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-eco-001-q3",
    passage,
    prompt: "The final sentence primarily serves to",
    choices: [
      {
        text: "reject the claim that trees can exchange resources.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "qualify how the observed exchanges should be interpreted.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "introduce a new method for studying fungal networks.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "argue that competition no longer occurs in forests.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 1,
    skill: "Text Structure and Purpose",
    domain: "Craft and Structure",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["ecology", "function", "qualification", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

];
