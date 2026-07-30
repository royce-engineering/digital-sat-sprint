"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SatDay } from "@/content/sat/types";
import {
  buildTutorResponse,
  type TutorMessage,
  type TutorMode,
} from "@/lib/tutor";

type AITutorProps = {
  lessons: SatDay[];
  initialDay?: number;
  initialWord?: string;
};

const modes: Array<{
  value: TutorMode;
  label: string;
  description: string;
}> = [
  { value: "definition", label: "Explain", description: "Definition and usage" },
  { value: "example", label: "Example", description: "Contextual sentence" },
  { value: "synonyms", label: "Synonyms", description: "Related vocabulary" },
  { value: "sat-strategy", label: "SAT Strategy", description: "Question approach" },
  { value: "compare", label: "Compare", description: "Meaning distinctions" },
  { value: "quiz-me", label: "Quiz Me", description: "Quick practice" },
];

function renderMessage(content: string) {
  return content.split("\n").map((line, index) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);

    return (
      <p key={`${line}-${index}`}>
        {parts.map((part, partIndex) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={`${part}-${partIndex}`}>{part.slice(2, -2)}</strong>
          ) : (
            <span key={`${part}-${partIndex}`}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

export default function AITutor({
  lessons,
  initialDay = lessons[0]?.day ?? 1,
  initialWord = "",
}: AITutorProps) {
  const initialLesson =
    lessons.find((lesson) => lesson.day === initialDay) ?? lessons[0];

  const [selectedDay, setSelectedDay] = useState(initialLesson?.day ?? 1);
  const [selectedWord, setSelectedWord] = useState(
    initialWord || initialLesson?.words[0]?.word || "",
  );
  const [mode, setMode] = useState<TutorMode>("definition");
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<TutorMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Choose a vocabulary word and ask for an explanation, example, comparison, SAT strategy, or practice question.",
    },
  ]);

  const selectedLesson =
    lessons.find((lesson) => lesson.day === selectedDay) ?? lessons[0];

  const selectedWordData = useMemo(
    () =>
      selectedLesson?.words.find((word) => word.word === selectedWord) ??
      selectedLesson?.words[0],
    [selectedLesson, selectedWord],
  );

  function changeDay(day: number) {
    const lesson = lessons.find((item) => item.day === day);
    if (!lesson) return;

    setSelectedDay(day);
    setSelectedWord(lesson.words[0]?.word ?? "");
  }

  function sendMessage(customPrompt?: string) {
    const finalPrompt =
      customPrompt?.trim() ||
      prompt.trim() ||
      `${modes.find((item) => item.value === mode)?.label ?? "Explain"} ${selectedWord}`;

    if (!finalPrompt) return;

    const response = buildTutorResponse(
      lessons,
      finalPrompt,
      selectedWord,
      mode,
    );

    setMessages((current) => [
      ...current,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: finalPrompt,
      },
      {
        id: `assistant-${Date.now() + 1}`,
        role: "assistant",
        content: response.answer,
      },
    ]);

    setPrompt("");
  }

  function clearConversation() {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Conversation cleared. Select a word and choose how you want to study it.",
      },
    ]);
  }

  return (
    <section className="aiTutorWorkspace">
      <aside className="aiTutorSidebar">
        <div className="aiTutorControlGroup">
          <label htmlFor="tutor-day">Lesson</label>
          <select
            id="tutor-day"
            value={selectedDay}
            onChange={(event) => changeDay(Number(event.target.value))}
          >
            {lessons.map((lesson) => (
              <option value={lesson.day} key={lesson.day}>
                Day {lesson.day}: {lesson.title}
              </option>
            ))}
          </select>
        </div>

        <div className="aiTutorControlGroup">
          <label htmlFor="tutor-word">Vocabulary word</label>
          <select
            id="tutor-word"
            value={selectedWordData?.word ?? ""}
            onChange={(event) => setSelectedWord(event.target.value)}
          >
            {selectedLesson?.words.map((word) => (
              <option value={word.word} key={word.word}>
                {word.word}
              </option>
            ))}
          </select>
        </div>

        {selectedWordData ? (
          <article className="aiTutorWordPreview">
            <span>{selectedWordData.partOfSpeech}</span>
            <h2>{selectedWordData.word}</h2>
            <p>{selectedWordData.definition}</p>
            <Link
              href={`/sat/day/${selectedLesson.day}#word-${
                selectedLesson.words.findIndex(
                  (word) => word.word === selectedWordData.word,
                ) + 1
              }`}
            >
              Open lesson card →
            </Link>
          </article>
        ) : null}

        <div className="aiTutorModeGrid">
          {modes.map((item) => (
            <button
              className={`aiTutorModeButton ${
                mode === item.value ? "aiTutorModeButtonActive" : ""
              }`}
              type="button"
              key={item.value}
              onClick={() => {
                setMode(item.value);
                sendMessage(`${item.label}: ${selectedWordData?.word ?? selectedWord}`);
              }}
            >
              <strong>{item.label}</strong>
              <span>{item.description}</span>
            </button>
          ))}
        </div>

        <button className="button" type="button" onClick={clearConversation}>
          Clear conversation
        </button>
      </aside>

      <div className="aiTutorConversationPanel">
        <div className="aiTutorConversationHeader">
          <div>
            <span className="statusPill">Local tutor mode</span>
            <h2>Vocabulary Tutor</h2>
            <p>
              Uses course content and rule-based explanations. No API key is
              required.
            </p>
          </div>
          <span className="aiTutorStatusDot" title="Tutor available" />
        </div>

        <div className="aiTutorMessages" aria-live="polite">
          {messages.map((message) => (
            <article
              className={`aiTutorMessage ${
                message.role === "user"
                  ? "aiTutorMessageUser"
                  : "aiTutorMessageAssistant"
              }`}
              key={message.id}
            >
              <div className="aiTutorAvatar">
                {message.role === "user" ? "You" : "AI"}
              </div>
              <div className="aiTutorBubble">
                {renderMessage(message.content)}
              </div>
            </article>
          ))}
        </div>

        <div className="aiTutorSuggestions">
          <button
            type="button"
            onClick={() =>
              sendMessage(`Explain ${selectedWordData?.word ?? selectedWord} simply`)
            }
          >
            Explain simply
          </button>
          <button
            type="button"
            onClick={() =>
              sendMessage(`Give another example for ${selectedWordData?.word ?? selectedWord}`)
            }
          >
            Another example
          </button>
          <button
            type="button"
            onClick={() =>
              sendMessage(`Quiz me on ${selectedWordData?.word ?? selectedWord}`)
            }
          >
            Quiz me
          </button>
        </div>

        <form
          className="aiTutorComposer"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={`Ask about ${selectedWordData?.word ?? "a vocabulary word"}...`}
            rows={3}
          />
          <div className="aiTutorComposerFooter">
            <span>
              Local course-aware response · API integration ready
            </span>
            <button className="button buttonPrimary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
