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
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold">Adaptive Reading Module 2</h1>

      <p className="mt-2 text-gray-600">
        Selected {questions.length} questions
      </p>

      <div className="mt-8 space-y-6">
        {questions.map((question, index) => (
          <section key={question.id} className="rounded-lg border p-5">
            <div className="mb-2 text-sm text-gray-500">
              Question {index + 1}
            </div>

            <div className="text-sm">
              <strong>ID:</strong> {question.id}
            </div>

            <div className="text-sm">
              <strong>Domain:</strong>{" "}
              {question.blueprint?.domain ?? question.domain}
            </div>

            <div className="text-sm">
              <strong>Skill:</strong>{" "}
              {question.blueprint?.skill ?? question.skill}
            </div>

            <div className="text-sm">
              <strong>Difficulty:</strong>{" "}
              {question.blueprint?.difficulty ?? question.difficulty}
            </div>

            <p className="mt-4 whitespace-pre-line">{question.passage}</p>

            <p className="mt-4 font-medium">{question.prompt}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
