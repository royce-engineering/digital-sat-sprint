import { readingWritingBank } from "@/lib/adaptive/questionBank";

import { diagnoseReadingBlueprint } from "@/lib/adaptive/blueprintEngine";

import {
  readingModule1Blueprint,
  readingModule2HardBlueprint,
} from "@/lib/adaptive/readingModuleBlueprint";

export default function BlueprintDiagnosticPage() {
  const module1Diagnostics = diagnoseReadingBlueprint(
    readingWritingBank,
    readingModule1Blueprint,
    1,
  );

  const module2Diagnostics = diagnoseReadingBlueprint(
    readingWritingBank,
    readingModule2HardBlueprint,
    2,
  );

  return (
    <main className="mx-auto max-w-5xl space-y-10 p-8">
      <section>
        <h1 className="text-3xl font-bold">Reading Blueprint Diagnostic</h1>

        <p className="mt-2 text-sm text-gray-600">
          Shows how many eligible questions are available for each blueprint
          slot.
        </p>
      </section>

      <DiagnosticTable title="Module 1" rows={module1Diagnostics} />

      <DiagnosticTable title="Module 2 Hard" rows={module2Diagnostics} />
    </main>
  );
}

interface DiagnosticRow {
  slotIndex: number;
  requested: number;
  available: number;
  domain: string;
  skills?: string[];
  difficulty?: string;
}

function DiagnosticTable({
  title,
  rows,
}: {
  title: string;
  rows: DiagnosticRow[];
}) {
  const requestedTotal = rows.reduce((sum, row) => sum + row.requested, 0);

  const possibleTotal = rows.reduce(
    (sum, row) => sum + Math.min(row.requested, row.available),
    0,
  );

  return (
    <section className="rounded-xl border p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-2 text-sm text-gray-600">
        Can build {possibleTotal} of {requestedTotal} requested questions.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-3">Slot</th>
              <th className="p-3">Domain</th>
              <th className="p-3">Skills</th>
              <th className="p-3">Difficulty</th>
              <th className="p-3">Requested</th>
              <th className="p-3">Available</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => {
              const enough = row.available >= row.requested;

              return (
                <tr key={row.slotIndex} className="border-b">
                  <td className="p-3">{row.slotIndex + 1}</td>

                  <td className="p-3">{row.domain}</td>

                  <td className="p-3">{row.skills?.join(", ") ?? "Any"}</td>

                  <td className="p-3">{row.difficulty ?? "Any"}</td>

                  <td className="p-3">{row.requested}</td>

                  <td className="p-3">{row.available}</td>

                  <td
                    className={
                      enough
                        ? "p-3 font-semibold text-green-700"
                        : "p-3 font-semibold text-red-700"
                    }
                  >
                    {enough ? "Ready" : "Shortage"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
