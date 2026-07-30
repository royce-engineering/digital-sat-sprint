"use client";

import { useMemo, useState } from "react";
import type { PracticeQuestion } from "@/content/sat/types";
import { saveQuizResult } from "@/lib/progress";

type InteractiveQuizProps = {
  questions: PracticeQuestion[];
  title: string;
  day: number;
};

type AnswerState = Record<number, string>;

export default function InteractiveQuiz({
  questions,
  title,
  day,
}: InteractiveQuizProps) {
  const [answers, setAnswers] = useState<AnswerState>({});
  const [submitted, setSubmitted] = useState(false);
  const [showOnlyMissed, setShowOnlyMissed] = useState(false);

  const score = useMemo(
    () =>
      questions.reduce((total, question) => {
        return total + (answers[question.id] === question.answer ? 1 : 0);
      }, 0),
    [answers, questions],
  );

  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === questions.length;
  const percentage = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;

  const visibleQuestions = showOnlyMissed && submitted
    ? questions.filter(
        (question) => answers[question.id] !== question.answer,
      )
    : questions;

  function chooseAnswer(questionId: number, choice: string) {
    if (submitted) return;

    setAnswers((current) => ({
      ...current,
      [questionId]: choice,
    }));
  }

  function submitQuiz() {
    if (!complete) return;

    saveQuizResult({
      day,
      score,
      total: questions.length,
      percentage,
      completedAt: new Date().toISOString(),
    });

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
    setShowOnlyMissed(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="interactiveQuiz">
      <div className="quizSummaryCard">
        <div>
          <p className="sectionKicker">Interactive practice</p>
          <h2>{title}</h2>
          <p>
            Choose one answer for each question. Submit the complete set to
            receive your score and explanations.
          </p>
        </div>

        <div className="quizSummaryStats">
          <div>
            <span>Answered</span>
            <strong>{answeredCount} / {questions.length}</strong>
          </div>
          <div>
            <span>Score</span>
            <strong>{submitted ? `${score} / ${questions.length}` : "—"}</strong>
          </div>
          <div>
            <span>Accuracy</span>
            <strong>{submitted ? `${percentage}%` : "—"}</strong>
          </div>
        </div>

        <div className="quizProgressTrack" aria-hidden="true">
          <span
            style={{
              width: `${Math.round(
                (answeredCount / questions.length) * 100,
              )}%`,
            }}
          />
        </div>

        {submitted ? (
          <div className={`quizResultBanner ${
            percentage >= 80
              ? "quizResultStrong"
              : percentage >= 60
                ? "quizResultMedium"
                : "quizResultReview"
          }`}>
            <strong>
              {percentage >= 80
                ? "Strong performance"
                : percentage >= 60
                  ? "Good start"
                  : "Review recommended"}
            </strong>
            <span>
              You answered {score} of {questions.length} questions correctly.
            </span>
          </div>
        ) : null}

        <div className="quizToolbar">
          {!submitted ? (
            <button
              className="button buttonPrimary"
              type="button"
              disabled={!complete}
              onClick={submitQuiz}
            >
              {complete
                ? "Submit quiz"
                : `Answer ${questions.length - answeredCount} more`}
            </button>
          ) : (
            <>
              <button
                className="button buttonPrimary"
                type="button"
                onClick={() => setShowOnlyMissed((current) => !current)}
              >
                {showOnlyMissed ? "Show all questions" : "Review missed questions"}
              </button>
              <button className="button" type="button" onClick={resetQuiz}>
                Retake quiz
              </button>
            </>
          )}
        </div>
      </div>

      <div className="interactiveQuestionList">
        {visibleQuestions.map((question, questionIndex) => {
          const selectedAnswer = answers[question.id];
          const correct = selectedAnswer === question.answer;

          return (
            <article className="interactiveQuestionCard" key={question.id}>
              <div className="interactiveQuestionHeading">
                <span className="questionNumber">{question.id}</span>
                <div>
                  <span className="questionProgressLabel">
                    Question {questionIndex + 1} of {visibleQuestions.length}
                  </span>
                  <h3>{question.prompt}</h3>
                </div>
              </div>

              <div
                className="interactiveChoices"
                role="radiogroup"
                aria-label={`Question ${question.id}`}
              >
                {question.choices.map((choice, index) => {
                  const isSelected = selectedAnswer === choice;
                  const isCorrectChoice =
                    submitted && choice === question.answer;
                  const isWrongChoice =
                    submitted && isSelected && choice !== question.answer;

                  const stateClass = isCorrectChoice
                    ? "interactiveChoiceCorrect"
                    : isWrongChoice
                      ? "interactiveChoiceWrong"
                      : isSelected
                        ? "interactiveChoiceSelected"
                        : "";

                  return (
                    <button
                      className={`interactiveChoice ${stateClass}`}
                      type="button"
                      key={choice}
                      role="radio"
                      aria-checked={isSelected}
                      disabled={submitted}
                      onClick={() => chooseAnswer(question.id, choice)}
                    >
                      <span className="choiceLetter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="interactiveChoiceText">{choice}</span>
                      {isCorrectChoice ? (
                        <span className="choiceStateIcon">✓</span>
                      ) : null}
                      {isWrongChoice ? (
                        <span className="choiceStateIcon">×</span>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {submitted ? (
                <div
                  className={`interactiveFeedback ${
                    correct
                      ? "interactiveFeedbackCorrect"
                      : "interactiveFeedbackWrong"
                  }`}
                >
                  <div className="feedbackHeading">
                    <strong>{correct ? "Correct" : "Needs review"}</strong>
                    {!correct ? (
                      <span>
                        Correct answer: <b>{question.answer}</b>
                      </span>
                    ) : null}
                  </div>
                  <p>{question.explanation}</p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {submitted && visibleQuestions.length === 0 ? (
        <div className="allCorrectPanel">
          <span>✓</span>
          <div>
            <h3>No missed questions</h3>
            <p>You answered every question correctly.</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
