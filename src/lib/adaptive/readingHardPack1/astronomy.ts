import { createReadingQuestion } from "./factory";

const passage = `
Astronomers often identify planets orbiting distant stars by observing slight decreases in a star's brightness. Such decreases can occur when a planet passes in front of its host star. However, dark starspots rotating across a star's surface can produce similar signals. To distinguish the two possibilities, astronomers compare the timing, duration, and regularity of repeated observations. A true planetary transit is expected to recur consistently, whereas changes caused by stellar activity are generally less predictable.
`.trim();

export const astronomyHardQuestions = [
  createReadingQuestion({
    id: "rw-hard-astro-001-q1",
    passage,
    prompt: "Which choice best states the central idea of the passage?",
    choices: [
      {
        text: "Astronomers distinguish planetary transits from stellar activity by examining repeated patterns.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "Starspots permanently reduce the brightness of every star.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Planetary transits are the only method used to discover planets.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "Stellar activity occurs more often than planetary transits.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Central Ideas and Details",
    domain: "Information and Ideas",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["astronomy", "exoplanets", "central-idea", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-astro-001-q2",
    passage,
    prompt: "Which finding would most strongly suggest that a brightness decrease is caused by a planet?",
    choices: [
      {
        text: "The decrease repeats at nearly identical intervals over several years.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "The brightness changes by different amounts each month.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "The star rotates slowly.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "The decrease is larger than that of nearby stars.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Inference",
    domain: "Information and Ideas",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["astronomy", "exoplanets", "inference", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

  createReadingQuestion({
    id: "rw-hard-astro-001-q3",
    passage,
    prompt: "The discussion of starspots primarily serves to",
    choices: [
      {
        text: "introduce an alternative explanation that astronomers must rule out.",
        rationale: "Correct. This choice is directly supported by the passage.",
      },
      {
        text: "describe how planets alter the surfaces of stars.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "show that brightness measurements are useless.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
      {
        text: "prove that most stars contain planets.",
        rationale: "Incorrect. This choice is not supported by the passage or is too broad.",
      },
    ],
    answer: 0,
    skill: "Text Structure and Purpose",
    domain: "Craft and Structure",
    passageType: "Science",
    estimatedTime: 75,
    tags: ["astronomy", "starspots", "function", "hard-2"],
    walkthrough: [
      "Identify the exact claim or function tested by the question.",
      "Eliminate choices that are unsupported, overly broad, or irrelevant.",
      "Select the choice most directly supported by the passage.",
    ],
  }),

];
