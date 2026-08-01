"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MATH_SESSION_STORAGE_KEY,
  type MathSessionState,
} from "@/lib/adaptive/session/mathSession";
import {
  READING_SESSION_STORAGE_KEY,
  type ReadingSessionState,
} from "@/lib/adaptive/session/readingSession";

type SectionStatus = {
  label: "Not started" | "In progress" | "Completed";
  detail: string;
  action: "Start" | "Continue" | "View results";
};

function readStoredSession<T extends { phase: string }>(
  storageKey: string,
): T | null {
  if (typeof window === "undefined") return null;

  const raw = window.sessionStorage.getItem(storageKey);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function getReadingStatus(session: ReadingSessionState | null): SectionStatus {
  if (!session || session.phase === "intro") {
    return {
      label: "Not started",
      detail: "Two adaptive Reading & Writing modules",
      action: "Start",
    };
  }

  if (session.phase === "results") {
    return {
      label: "Completed",
      detail: "Results are available in the saved session",
      action: "View results",
    };
  }

  const moduleNumber = session.phase.startsWith("module-1") ? 1 : 2;

  return {
    label: "In progress",
    detail: `Resume Module ${moduleNumber}`,
    action: "Continue",
  };
}

function getMathStatus(session: MathSessionState | null): SectionStatus {
  if (!session || session.phase === "intro") {
    return {
      label: "Not started",
      detail: "Two adaptive Math modules",
      action: "Start",
    };
  }

  if (session.phase === "results") {
    return {
      label: "Completed",
      detail: "Results are available in the saved session",
      action: "View results",
    };
  }

  const moduleNumber = session.phase.startsWith("module-1") ? 1 : 2;

  return {
    label: "In progress",
    detail: `Resume Module ${moduleNumber}`,
    action: "Continue",
  };
}

export default function SatTestCenterPage() {
  const [readingSession, setReadingSession] =
    useState<ReadingSessionState | null>(null);
  const [mathSession, setMathSession] = useState<MathSessionState | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setReadingSession(
      readStoredSession<ReadingSessionState>(READING_SESSION_STORAGE_KEY),
    );
    setMathSession(
      readStoredSession<MathSessionState>(MATH_SESSION_STORAGE_KEY),
    );
    setHydrated(true);
  }, []);

  const readingStatus = getReadingStatus(readingSession);
  const mathStatus = getMathStatus(mathSession);

  const completedSections =
    Number(readingStatus.label === "Completed") +
    Number(mathStatus.label === "Completed");

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-5 sm:p-8">
      <section className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="border-b bg-slate-950 px-7 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Digital SAT
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Adaptive Test Center
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Complete Reading & Writing and Math as separate adaptive sections.
            Your active sessions are restored automatically after a refresh.
          </p>
        </div>

        <div className="grid gap-4 p-7 sm:grid-cols-3 sm:p-10">
          <SummaryCard
            label="Sections completed"
            value={hydrated ? `${completedSections}/2` : "—"}
          />
          <SummaryCard label="Reading modules" value="2" />
          <SummaryCard label="Math modules" value="2" />

          {completedSections === 2 && (
            <Link
              href="/test/sat/results"
              className="inline-flex rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white"
            >
              View combined SAT report
            </Link>
          )}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SectionCard
          eyebrow="Section 1"
          title="Reading & Writing"
          description="Practice information and ideas, craft and structure, expression of ideas, and Standard English conventions."
          href="/test/adaptive"
          status={hydrated ? readingStatus : null}
          facts={["Adaptive Module 2", "Question review", "Domain results"]}
        />

        <SectionCard
          eyebrow="Section 2"
          title="Math"
          description="Practice Algebra, Advanced Math, Problem Solving and Data Analysis, and Geometry and Trigonometry."
          href="/test/adaptive-math"
          status={hydrated ? mathStatus : null}
          facts={[
            "35 minutes per module",
            "Student response",
            "Domain results",
          ]}
        />
      </section>

      <section className="rounded-2xl border bg-white p-7 shadow-sm">
        <h2 className="text-xl font-bold">Current MVP flow</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-5">
          {[
            "Test Center",
            "Reading",
            "Reading Results",
            "Math",
            "Math Results",
          ].map((step, index) => (
            <div
              key={step}
              className="relative rounded-xl border bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step {index + 1}
              </p>
              <p className="mt-1 font-semibold">{step}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-slate-600">
          A combined full-test controller and final 400–1600 report should be
          added only after both section pages pass their end-to-end test
          checklists.
        </p>
      </section>
    </main>
  );
}

function SectionCard({
  eyebrow,
  title,
  description,
  href,
  status,
  facts,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  status: SectionStatus | null;
  facts: string[];
}) {
  const statusClasses =
    status?.label === "Completed"
      ? "bg-green-50 text-green-800"
      : status?.label === "In progress"
        ? "bg-amber-50 text-amber-800"
        : "bg-slate-100 text-slate-700";

  return (
    <article className="flex min-h-[360px] flex-col rounded-3xl border bg-white p-7 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold">{title}</h2>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses}`}
        >
          {status?.label ?? "Loading"}
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-600">{description}</p>

      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {facts.map((fact) => (
          <li key={fact} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700"
            >
              ✓
            </span>
            {fact}
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t pt-6">
        <p className="mb-4 text-sm text-slate-500">
          {status?.detail ?? "Checking saved session…"}
        </p>

        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          {status?.action ?? "Open section"}
        </Link>
      </div>
    </article>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}
