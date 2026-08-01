"use client";

import { useEffect, useRef, useState } from "react";
import {
  acquireSessionLease,
  createSessionOwnerId,
  readSessionLease,
  refreshSessionLease,
  releaseSessionLease,
  type AdaptiveSessionKind,
  type SessionLease,
} from "@/lib/adaptive/runtime/sessionLease";

export interface UseSessionLeaseResult {
  ready: boolean;
  acquired: boolean;
  ownerId: string;
  blockingLease: SessionLease | null;
  retry: () => void;
  takeOver: () => void;
}

export function useSessionLease(
  kind: AdaptiveSessionKind,
): UseSessionLeaseResult {
  const [ownerId] = useState(() => createSessionOwnerId());
  const [ready, setReady] = useState(false);
  const [acquired, setAcquired] = useState(false);
  const [blockingLease, setBlockingLease] = useState<SessionLease | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const result = acquireSessionLease(kind, ownerId);

    setAcquired(result.acquired);
    setBlockingLease(result.acquired ? null : result.lease);
    setReady(true);

    if (!result.acquired) return;

    const heartbeat = window.setInterval(() => {
      const refreshed = refreshSessionLease(kind, ownerId);

      if (!refreshed) {
        setAcquired(false);
        setBlockingLease(readSessionLease(kind));
      }
    }, 5_000);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== `digital-sat-session-lease-v1:${kind}`) {
        return;
      }

      const current = readSessionLease(kind);

      if (current && current.ownerId !== ownerId) {
        setAcquired(false);
        setBlockingLease(current);
      }
    };

    window.addEventListener("storage", onStorage);

    return () => {
      window.clearInterval(heartbeat);
      window.removeEventListener("storage", onStorage);
      releaseSessionLease(kind, ownerId);
    };
  }, [kind, ownerId, attempt]);

  const retry = () => setAttempt((value) => value + 1);

  const takeOver = () => {
    window.localStorage.removeItem(`digital-sat-session-lease-v1:${kind}`);
    retry();
  };

  return {
    ready,
    acquired,
    ownerId,
    blockingLease,
    retry,
    takeOver,
  };
}
