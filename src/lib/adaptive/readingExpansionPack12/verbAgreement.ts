import { choice, createExpansionQuestion } from "../readingExpansionPack1/factory";

export const finalVerbAgreementQuestions = [
  createExpansionQuestion({
    id: "repl5-agreement-01",
    passage: "The pattern of fluctuations in the two data sets _____ difficult to explain.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      choice("were", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
      choice("is", "The singular head noun \u201cpattern\u201d controls the verb."),
      choice("are", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
      choice("have been", "This choice is less precise, grammatically incorrect, ambiguous, or does not preserve the intended relationship."),
    ],
    answer: 1,
    difficulty: "Hard",
    skill: "Verb Agreement",
    domain: "Standard English Conventions",
    passageType: "Science",
    module: 2,
    estimatedSeconds: 65,
    tags: ["final-coverage-restoration", "reading-expansion-pack-12"],
    walkthrough: [
      "Identify the sentence's grammatical structure or logical relationship.",
      "The singular head noun \u201cpattern\u201d controls the verb.",
      "Choose the option that is precise, clear, and conventionally correct.",
    ],
  }),
];