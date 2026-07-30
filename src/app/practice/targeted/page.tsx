"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { isEquivalentAnswer } from "@/lib/adaptive/answerEvaluator";
import {
  buildMistakeRecords,
  targetedQuestions,
  updateProgress,
  type ProgressMap,
} from "@/lib/mistakes/mistakeEngine";
import { useAdaptiveExamStore } from "@/store/adaptiveExamStore";

const KEY = "digital-sat-sprint-mistake-progress";

export default function TargetedPracticePage() {
  return (
    <Suspense
      fallback={
        <main className="pageShell">
          <div className="container pageContent examStart">
            <h1>Loading targeted practice…</h1>
          </div>
        </main>
      }
    >
      <TargetedPracticeContent />
    </Suspense>
  );
}

function TargetedPracticeContent() {
  const params = useSearchParams();
  const skill = params.get("skill") || undefined;
  const focus = params.get("focus");
  const attempts = useAdaptiveExamStore((state) => state.attempts);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [typed, setTyped] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      setProgress(JSON.parse(localStorage.getItem(KEY) || "{}"));
    } catch {
      // Ignore invalid persisted progress.
    }
  }, []);

  const records = useMemo(() => buildMistakeRecords(attempts, progress), [attempts, progress]);
  let questions = useMemo(() => targetedQuestions(records, skill, undefined, 10), [records, skill]);

  if (focus) {
    const focusIndex = questions.findIndex((question) => question.examId === focus);
    if (focusIndex > 0) {
      questions = [
        questions[focusIndex],
        ...questions.slice(0, focusIndex),
        ...questions.slice(focusIndex + 1),
      ];
    }
  }

  const question = questions[index];

  if (!question) {
    return (
      <main className="pageShell">
        <div className="container pageContent examStart">
          <h1>No targeted questions found.</h1>
          <Link className="button buttonPrimary" href="/mistakes">
            Open mistake notebook
          </Link>
        </div>
      </main>
    );
  }

  const correct = question.questionType === "student-response"
    ? isEquivalentAnswer(typed, question.numericAnswer ?? "")
    : selected === question.answer;

  const submit = () => {
    setSubmitted(true);
    const next = updateProgress(progress, question.examId, correct);
    setProgress(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const next = () => {
    setIndex((current) => Math.min(current + 1, questions.length - 1));
    setSelected(-1);
    setTyped("");
    setSubmitted(false);
  };

  return (
    <main className="pageShell">
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Targeted practice</p>
          <h1>{skill || "Mistake recovery"}</h1>
          <p>
            Question {index + 1} of {questions.length} · {question.section} · {question.difficulty}
          </p>
        </div>
      </section>

      <div className="container pageContent">
        <article className="courseQuestionCard">
          {question.passage && <p className="coursePassage">{question.passage}</p>}
          <h2>{question.prompt}</h2>

          {question.tableData && (
            <table className="mathTable">
              <thead>
                <tr>
                  {question.tableData.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {question.tableData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {question.questionType === "student-response" ? (
            <input
              className="studentResponseInput"
              value={typed}
              onChange={(event) => setTyped(event.target.value)}
              placeholder="Enter your answer"
              disabled={submitted}
            />
          ) : (
            <div className="courseChoiceList">
              {question.choices?.map((choice, choiceIndex) => (
                <button
                  type="button"
                  className={`courseChoice ${selected === choiceIndex ? "selectedChoice" : ""} ${submitted && choiceIndex === question.answer ? "correctChoice" : ""} ${submitted && selected === choiceIndex && choiceIndex !== question.answer ? "incorrectChoice" : ""}`}
                  key={choiceIndex}
                  onClick={() => !submitted && setSelected(choiceIndex)}
                >
                  <strong>{String.fromCharCode(65 + choiceIndex)}.</strong> {choice.text}
                </button>
              ))}
            </div>
          )}

          {submitted && (
            <div className={correct ? "practiceFeedback correct" : "practiceFeedback incorrect"}>
              <h3>
                {correct
                  ? "Correct — mastery progress increased."
                  : "Not yet — this question remains in review."}
              </h3>
              <p>
                {question.walkthrough?.join(" ") ||
                  question.choices?.[question.answer]?.rationale ||
                  "Review the underlying skill and solve the problem again without relying on the previous answer."}
              </p>
            </div>
          )}
        </article>

        <div className="examControls">
          <Link className="button buttonGhost" href="/mistakes">
            Back to notebook
          </Link>

          {!submitted ? (
            <button
              className="button buttonPrimary"
              onClick={submit}
              disabled={question.questionType === "student-response" ? !typed.trim() : selected < 0}
            >
              Check answer
            </button>
          ) : index < questions.length - 1 ? (
            <button className="button buttonPrimary" onClick={next}>
              Next question
            </button>
          ) : (
            <Link className="button buttonPrimary" href="/analytics">
              View analytics
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
