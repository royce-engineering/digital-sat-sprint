import { choice, createExpansionQuestion } from "../readingExpansionPack1/factory";

export const finalParallelStructureQuestions = [
  createExpansionQuestion({
    id: "repl5-parallel-01",
    passage: "The procedure requires cleaning the lens, calibrating the sensor, and _____.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      choice("a record of the baseline reading", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
      choice("recording the baseline reading", "The series uses three parallel gerund phrases."),
      choice("the baseline reading must be recorded", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
      choice("to record the baseline reading", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
    ],
    answer: 1,
    difficulty: "Medium",
    skill: "Parallel Structure",
    domain: "Standard English Conventions",
    passageType: "Science",
    module: 1,
    estimatedSeconds: 65,
    tags: ["final-coverage-restoration", "reading-expansion-pack-12"],
    walkthrough: [
      "Identify the sentence's grammatical structure or logical relationship.",
      "The series uses three parallel gerund phrases.",
      "Choose the option that is precise, clear, and conventionally correct.",
    ],
  }),
  createExpansionQuestion({
    id: "repl5-parallel-02",
    passage: "The proposal seeks not only to simplify the form but also _____.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      choice("to shorten the review period", "The correlative structure requires parallel infinitive phrases."),
      choice("shortening the review period", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
      choice("the review period would be shorter", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
      choice("a shorter review period", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
    ],
    answer: 0,
    difficulty: "Hard",
    skill: "Parallel Structure",
    domain: "Standard English Conventions",
    passageType: "Government",
    module: 2,
    estimatedSeconds: 65,
    tags: ["final-coverage-restoration", "reading-expansion-pack-12"],
    walkthrough: [
      "Identify the sentence's grammatical structure or logical relationship.",
      "The correlative structure requires parallel infinitive phrases.",
      "Choose the option that is precise, clear, and conventionally correct.",
    ],
  }),
];