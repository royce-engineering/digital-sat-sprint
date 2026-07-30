import type { SatDay, VocabularyWord } from "@/content/sat/types";

export type TutorMode =
  | "definition"
  | "example"
  | "synonyms"
  | "sat-strategy"
  | "compare"
  | "quiz-me";

export type TutorMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type TutorResponse = {
  answer: string;
  followUps: string[];
};

function findWord(lessons: SatDay[], query: string): {
  lesson: SatDay;
  word: VocabularyWord;
  index: number;
} | null {
  const normalized = query.trim().toLowerCase();

  for (const lesson of lessons) {
    const index = lesson.words.findIndex(
      (word) => word.word.toLowerCase() === normalized,
    );

    if (index >= 0) {
      return {
        lesson,
        word: lesson.words[index],
        index,
      };
    }
  }

  return null;
}

function findMentionedWord(lessons: SatDay[], prompt: string) {
  const normalized = prompt.toLowerCase();

  for (const lesson of lessons) {
    for (let index = 0; index < lesson.words.length; index += 1) {
      const word = lesson.words[index];

      if (normalized.includes(word.word.toLowerCase())) {
        return { lesson, word, index };
      }
    }
  }

  return null;
}

function definitionResponse(word: VocabularyWord) {
  return [
    `**${word.word}** means ${word.definition}.`,
    "",
    `It is used as a **${word.partOfSpeech}**.`,
    "",
    `Example: “${word.example}”`,
    "",
    word.satTip ? `SAT tip: ${word.satTip}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function exampleResponse(word: VocabularyWord) {
  const synonymText = word.synonyms.length
    ? `A useful near-synonym is **${word.synonyms[0]}**.`
    : "";

  return [
    `Here is the course example for **${word.word}**:`,
    "",
    `“${word.example}”`,
    "",
    `The sentence shows the word in context rather than defining it directly.`,
    synonymText,
  ]
    .filter(Boolean)
    .join("\n");
}

function synonymsResponse(word: VocabularyWord) {
  const synonyms = word.synonyms.length
    ? word.synonyms.map((item) => `**${item}**`).join(", ")
    : "No synonyms are listed in this lesson.";

  return [
    `Synonyms for **${word.word}**: ${synonyms}.`,
    "",
    `Be careful: synonyms are rarely perfect replacements. Check tone, grammar, and context before substituting them.`,
  ].join("\n");
}

function strategyResponse(word: VocabularyWord) {
  return [
    `For an SAT question involving **${word.word}**, use this process:`,
    "",
    `1. Read the full sentence before looking at the choices.`,
    `2. Identify whether the blank needs a positive, negative, or neutral meaning.`,
    `3. Use transition words and nearby evidence.`,
    `4. Replace the word with a simple phrase: “${word.definition}.”`,
    `5. Eliminate choices that match the topic but not the logic.`,
    "",
    word.satTip ? `Course tip: ${word.satTip}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function compareResponse(word: VocabularyWord) {
  const comparison = word.synonyms[0];

  if (!comparison) {
    return `The course does not list a direct comparison word for **${word.word}** yet. Focus on its definition: ${word.definition}.`;
  }

  return [
    `**${word.word}** and **${comparison}** are related, but they may differ in tone or usage.`,
    "",
    `Use **${word.word}** when the context matches: ${word.definition}.`,
    `Use **${comparison}** only when it preserves the sentence’s exact tone and grammatical role.`,
    "",
    `A strong SAT strategy is to test both words in the original sentence rather than assuming they are interchangeable.`,
  ].join("\n");
}

function quizResponse(word: VocabularyWord) {
  const alternatives = word.synonyms.slice(0, 2).join(", ");

  return [
    `Try this without looking back:`,
    "",
    `Which meaning best matches **${word.word}**?`,
    "",
    `A. ${word.definition}`,
    `B. The opposite of its usual meaning`,
    `C. A completely unrelated concrete object`,
    `D. A grammatical label rather than a meaning`,
    "",
    `Reply with A, B, C, or D.`,
    alternatives ? `Hint available: related words include ${alternatives}.` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildTutorResponse(
  lessons: SatDay[],
  prompt: string,
  selectedWord: string,
  mode: TutorMode,
): TutorResponse {
  const selected = selectedWord ? findWord(lessons, selectedWord) : null;
  const mentioned = findMentionedWord(lessons, prompt);
  const context = selected ?? mentioned;

  if (!context) {
    return {
      answer: [
        `I could not identify a course word in that question.`,
        "",
        `Choose a word from the selector or include the exact vocabulary word in your message.`,
        "",
        `You can ask for a definition, example, synonyms, comparison, SAT strategy, or a practice question.`,
      ].join("\n"),
      followUps: [
        "Explain a word from Day 1",
        "Give me an SAT strategy",
        "Quiz me on a vocabulary word",
      ],
    };
  }

  const { lesson, word, index } = context;

  let answer = "";

  switch (mode) {
    case "example":
      answer = exampleResponse(word);
      break;
    case "synonyms":
      answer = synonymsResponse(word);
      break;
    case "sat-strategy":
      answer = strategyResponse(word);
      break;
    case "compare":
      answer = compareResponse(word);
      break;
    case "quiz-me":
      answer = quizResponse(word);
      break;
    case "definition":
    default:
      answer = definitionResponse(word);
  }

  return {
    answer: [
      answer,
      "",
      `Course location: Day ${lesson.day}, word ${index + 1} — ${lesson.title}.`,
    ].join("\n"),
    followUps: [
      `Use ${word.word} in another sentence`,
      `Compare ${word.word} with ${word.synonyms[0] ?? "a related word"}`,
      `Quiz me on ${word.word}`,
    ],
  };
}
