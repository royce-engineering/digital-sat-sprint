import { selectReadingModule } from "@/lib/adaptive/selectModule";

export default function AdaptivePreviewPage() {
  const module1Questions = selectReadingModule({
    module: 1,
    seed: 12345,
  });
  const questions = selectReadingModule({
    module: 2,
    seed: 67890,
    exclude: module1Questions.map((question) => question.id),
  });

  return (
    <main className="mx-auto max-w-4xl space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Adaptive Reading Module 2 Preview
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Selected {questions.length} questions.
        </p>
      </div>

      {questions.map((question, questionIndex) => (
        <section
          key={question.examId}
          className="rounded-xl border p-6 shadow-sm"
        >
          <div className="mb-4 text-sm text-gray-500">
            Question {questionIndex + 1}
            {" · "}
            {question.examId}
            {" · "}
            {question.blueprint?.domain ?? question.domain}
            {" · "}
            {question.blueprint?.skill ?? question.skill}
            {" · "}
            {question.blueprint?.difficulty ?? question.difficulty}
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
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
