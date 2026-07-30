import { readingWritingBank } from "@/lib/adaptive/questionBank";
import { readingHardPack1 } from "@/lib/adaptive/readingHardPack1";
import { validateReadingQuestionBank } from "@/lib/adaptive/readingHardPack1/validator";

const validationIssues = validateReadingQuestionBank(readingHardPack1);

export default function DevQuestionsPage() {
  const hardPackQuestions = readingWritingBank.filter((question) =>
    question.tags?.includes("reading-hard-pack-1"),
  );

  return (
    <main className="mx-auto max-w-4xl space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Reading Hard Pack I</h1>

        <p className="mt-2 text-sm text-gray-600">
          Found {hardPackQuestions.length} questions.
        </p>
      </div>
      <section className="mb-8 rounded border p-4">
        <h2 className="text-xl font-semibold">Validation</h2>

        {validationIssues.length === 0 ? (
          <p className="mt-2 text-green-700">
            All questions passed validation.
          </p>
        ) : (
          <ul className="mt-2 space-y-1 text-red-700">
            {validationIssues.map((issue, index) => (
              <li key={`${issue.questionId}-${index}`}>
                {issue.questionId}: {issue.message}
              </li>
            ))}
          </ul>
        )}
      </section>

      {hardPackQuestions.map((question) => (
        <section
          key={question.examId}
          className="rounded-xl border p-6 shadow-sm"
        >
          <div className="mb-4 text-sm text-gray-500">
            {question.examId} · {question.domain} · {question.skill}
          </div>

          <p className="mb-6 whitespace-pre-line leading-7">
            {question.passage}
          </p>

          <h2 className="mb-4 font-semibold">{question.prompt}</h2>

          <div className="space-y-3">
            {question.choices.map((choice, index) => (
              <div
                key={`${question.examId}-${index}`}
                className="rounded-lg border p-3"
              >
                <strong>{String.fromCharCode(65 + index)}.</strong>{" "}
                {choice.text}
                {index === question.answer && (
                  <span className="ml-2 font-semibold text-green-700">
                    Correct
                  </span>
                )}
                <p className="mt-2 text-sm text-gray-600">{choice.rationale}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
