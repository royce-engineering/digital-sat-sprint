"use client";

import type { ReactNode } from "react";
import {
  useSessionLease,
} from "./useSessionLease";
import type {
  AdaptiveSessionKind,
} from "@/lib/adaptive/runtime/sessionLease";

export function SessionLeaseGuard({
  kind,
  children,
}: {
  kind: AdaptiveSessionKind;
  children: ReactNode;
}) {
  const lease = useSessionLease(kind);

  if (!lease.ready) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        Checking active session…
      </main>
    );
  }

  if (!lease.acquired) {
    return (
      <main className="mx-auto max-w-3xl p-5 sm:p-8">
        <section className="rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            Session already open
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            This test is active in another tab
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            To protect answers, timer state, and module
            transitions, only one tab may actively edit this
            section at a time.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={lease.retry}
              className="rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50"
            >
              Retry
            </button>
            <button
              type="button"
              onClick={lease.takeOver}
              className="rounded-xl bg-amber-700 px-5 py-3 font-semibold text-white hover:bg-amber-800"
            >
              Take over in this tab
            </button>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Take over only when the other tab is closed or no
            longer in use.
          </p>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}
