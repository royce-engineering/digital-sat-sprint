"use client";

import Link from "next/link";
import { SessionLeaseGuard } from "@/components/adaptive/SessionLeaseGuard";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearMathSession,
  loadMathSession,
  type MathSessionState,
} from "@/lib/adaptive/session/mathSession";
import {
  clearReadingSession,
  loadReadingSession,
  type ReadingSessionState,
} from "@/lib/adaptive/session/readingSession";
import {
  beginFullTestBreak,
  beginFullTestMath,
  clearFullTestState,
  completeFullTest,
  createFullTestAttempt,
  createFullTestState,
  fullTestBreakRemaining,
  isMathSessionComplete,
  isReadingSessionComplete,
  loadFullTestState,
  reconcileFullTestState,
  saveFullTestState,
  type FullTestPhase,
  type FullTestState,
} from "@/lib/adaptive/runtime/fullTestRuntime";

function formatTime(seconds: number) {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;

  return `${minutes}:${remainder
    .toString()
    .padStart(2, "0")}`;
}

function FullSatControllerPageContent() {
  const [state, setState] =
    useState<FullTestState | null>(null);
  const [readingSession, setReadingSession] =
    useState<ReadingSessionState | null>(null);
  const [mathSession, setMathSession] =
    useState<MathSessionState | null>(null);
  const [now, setNow] = useState(Date.now());

  const refreshSessions = () => {
    setReadingSession(loadReadingSession());
    setMathSession(loadMathSession());
  };

  useEffect(() => {
    setState(loadFullTestState());
    refreshSessions();
  }, []);

  useEffect(() => {
    if (state) saveFullTestState(state);
  }, [state]);

  useEffect(() => {
    const onFocus = () => refreshSessions();
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        refreshSessions();
      }
    };

    window.addEventListener("focus", onFocus);
    document.addEventListener(
      "visibilitychange",
      onVisibility,
    );

    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener(
        "visibilitychange",
        onVisibility,
      );
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setNow(Date.now()),
      1000,
    );

    return () => window.clearInterval(timer);
  }, []);

  const readingComplete =
    isReadingSessionComplete(readingSession);
  const mathComplete =
    isMathSessionComplete(mathSession);

  useEffect(() => {
    if (!state) return;

    const reconciled = reconcileFullTestState(
      state,
      {
        readingComplete,
        mathComplete,
      },
    );

    if (
      JSON.stringify(reconciled) !==
      JSON.stringify(state)
    ) {
      setState(reconciled);
    }
  }, [state, readingComplete, mathComplete]);

  const breakRemaining = useMemo(
    () =>
      state
        ? fullTestBreakRemaining(state, now)
        : 0,
    [state, now],
  );

  if (!state) {
    return (
      <main className="mx-auto max-w-5xl p-8">
        Loading full SAT test…
      </main>
    );
  }

  const transition = (
    updater: (current: FullTestState) => FullTestState,
  ) => {
    setState((current) =>
      current ? updater(current) : current,
    );
  };

  const startFreshAttempt = () => {
    clearReadingSession();
    clearMathSession();
    setReadingSession(null);
    setMathSession(null);
    setState(createFullTestAttempt());
  };

  const resumeDetectedProgress = () => {
    const next = createFullTestAttempt();

    setState(
      reconcileFullTestState(next, {
        readingComplete,
        mathComplete,
      }),
    );
  };

  const resetControllerOnly = () => {
    clearFullTestState();
    setState(createFullTestState());
  };

  if (state.phase === "intro") {
    const hasSectionProgress =
      Boolean(readingSession) || Boolean(mathSession);

    return (
      <Shell>
        <section className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Full-length adaptive practice
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Digital SAT Practice Test
          </h1>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Complete Reading & Writing first, take a
            10-minute break, and then complete Math.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StageCard
              number="1"
              title="Reading & Writing"
              detail="Two adaptive modules"
            />
            <StageCard
              number="2"
              title="Break"
              detail="10-minute countdown"
            />
            <StageCard
              number="3"
              title="Math"
              detail="Two adaptive modules"
            />
          </div>

          {hasSectionProgress && (
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
              Existing section progress was detected.
              Choose whether to resume it or clear both
              section sessions and begin a fresh full test.
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {hasSectionProgress && (
              <button
                type="button"
                onClick={resumeDetectedProgress}
                className="rounded-xl border px-6 py-3 font-semibold hover:bg-slate-50"
              >
                Resume detected progress
              </button>
            )}

            <button
              type="button"
              onClick={startFreshAttempt}
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              {hasSectionProgress
                ? "Start fresh full test"
                : "Begin full test"}
            </button>
          </div>
        </section>
      </Shell>
    );
  }

  if (state.phase === "reading") {
    return (
      <Shell>
        <ProgressHeader active={1} />

        <StageSection
          eyebrow="Section 1"
          title="Reading & Writing"
          complete={readingComplete}
          completeText="Reading & Writing is complete. Continue to the scheduled break."
          pendingText="Open Reading & Writing. When you return, this controller will refresh the session automatically."
          openHref="/test/adaptive"
          openLabel="Open Reading & Writing"
          continueLabel="Begin break"
          onContinue={() =>
            transition((current) =>
              beginFullTestBreak(current),
            )
          }
        />
      </Shell>
    );
  }

  if (state.phase === "break") {
    const finished = breakRemaining === 0;

    return (
      <Shell>
        <ProgressHeader active={2} />

        <section className="rounded-3xl border bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Scheduled break
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            {finished
              ? "Break complete"
              : "Take a break"}
          </h1>
          <p className="mt-6 font-mono text-6xl font-bold">
            {formatTime(breakRemaining)}
          </p>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-600">
            The countdown is derived from its saved start
            timestamp, so refreshes do not reset it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              disabled={!finished}
              onClick={() =>
                transition((current) =>
                  beginFullTestMath(current),
                )
              }
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Begin Math
            </button>

            {!finished && (
              <button
                type="button"
                onClick={() =>
                  transition((current) =>
                    beginFullTestMath(current),
                  )
                }
                className="rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                End break early
              </button>
            )}
          </div>
        </section>
      </Shell>
    );
  }

  if (state.phase === "math") {
    return (
      <Shell>
        <ProgressHeader active={3} />

        <StageSection
          eyebrow="Section 2"
          title="Math"
          complete={mathComplete}
          completeText="Math is complete. Your combined report is ready."
          pendingText="Open Math. When you return, this controller will refresh the session automatically."
          openHref="/test/adaptive-math"
          openLabel="Open Math"
          continueLabel="Finish full test"
          onContinue={() =>
            transition((current) =>
              completeFullTest(current),
            )
          }
        />
      </Shell>
    );
  }

  return (
    <Shell>
      <ProgressHeader active={4} />

      <section className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
          Full test complete
        </p>
        <h1 className="mt-2 text-4xl font-bold">
          Your combined report is ready
        </h1>
        <p className="mt-5 max-w-2xl leading-7 text-slate-600">
          The results page uses deterministic history IDs,
          so reopening or refreshing it will not create a
          duplicate attempt.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/test/sat/results"
            className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            View combined SAT report
          </Link>
          <Link
            href="/test/dashboard"
            className="rounded-xl border px-6 py-3 font-semibold hover:bg-slate-50"
          >
            Open analytics
          </Link>
          <button
            type="button"
            onClick={resetControllerOnly}
            className="rounded-xl border px-6 py-3 font-semibold hover:bg-slate-50"
          >
            Return to full-test intro
          </button>
        </div>
      </section>
    </Shell>
  );
}

export default function FullSatControllerPage() {
  return (
    <SessionLeaseGuard kind="full-test">
      <FullSatControllerPageContent />
    </SessionLeaseGuard>
  );
}

function StageSection({
  eyebrow,
  title,
  complete,
  completeText,
  pendingText,
  openHref,
  openLabel,
  continueLabel,
  onContinue,
}: {
  eyebrow: string;
  title: string;
  complete: boolean;
  completeText: string;
  pendingText: string;
  openHref: string;
  openLabel: string;
  continueLabel: string;
  onContinue: () => void;
}) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold">
        {title}
      </h1>

      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
        {complete ? completeText : pendingText}
      </p>

      {complete ? (
        <button
          type="button"
          onClick={onContinue}
          className="mt-7 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
        >
          {continueLabel}
        </button>
      ) : (
        <Link
          href={openHref}
          className="mt-7 inline-flex rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          {openLabel}
        </Link>
      )}
    </section>
  );
}

function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl space-y-7 p-5 sm:p-8">
      {children}
    </main>
  );
}

function ProgressHeader({
  active,
}: {
  active: number;
}) {
  const steps = [
    "Reading",
    "Break",
    "Math",
    "Complete",
  ];

  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="grid gap-3 sm:grid-cols-4">
        {steps.map((step, index) => {
          const position = index + 1;
          const completed = position < active;
          const current = position === active;

          return (
            <div
              key={step}
              className={`rounded-xl border p-4 ${
                current
                  ? "border-blue-600 bg-blue-50"
                  : completed
                    ? "border-green-300 bg-green-50"
                    : "bg-slate-50"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {completed
                  ? "Complete"
                  : `Step ${position}`}
              </p>
              <p className="mt-1 font-bold">{step}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StageCard({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
        {number}
      </span>
      <p className="mt-4 font-bold">{title}</p>
      <p className="mt-1 text-sm text-slate-500">
        {detail}
      </p>
    </div>
  );
}
