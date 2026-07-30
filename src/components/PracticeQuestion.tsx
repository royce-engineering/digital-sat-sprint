import type { PracticeQuestion as Question } from "@/content/sat/types";

type PracticeQuestionProps = {
  question: Question;
};

export default function PracticeQuestion({
  question,
}: PracticeQuestionProps) {
  return (
    <article className="questionCard">
      <div className="questionHeading">
        <span className="questionNumber">{question.id}</span>
        <h3>{question.prompt}</h3>
      </div>

      <ol className="choices">
        {question.choices.map((choice, index) => (
          <li className="choice" key={choice}>
            <span className="choiceLetter">
              {String.fromCharCode(65 + index)}
            </span>
            <span>{choice}</span>
          </li>
        ))}
      </ol>

      <details className="answer">
        <summary>Reveal answer and explanation</summary>
        <div className="answerBody">
          <p>
            <strong>Correct answer:</strong> {question.answer}
          </p>
          <p>{question.explanation}</p>
        </div>
      </details>
    </article>
  );
}
