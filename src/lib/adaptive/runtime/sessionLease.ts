export type AdaptiveSessionKind =
  | "reading"
  | "math"
  | "full-test";

export interface SessionLease {
  version: 1;
  kind: AdaptiveSessionKind;
  ownerId: string;
  acquiredAt: number;
  heartbeatAt: number;
}

export interface SessionLeaseResult {
  acquired: boolean;
  lease: SessionLease;
  previous?: SessionLease;
}

const LEASE_PREFIX = "digital-sat-session-lease-v1";
export const DEFAULT_SESSION_LEASE_TTL_MS = 15_000;

export function sessionLeaseKey(
  kind: AdaptiveSessionKind,
): string {
  return `${LEASE_PREFIX}:${kind}`;
}

export function createSessionOwnerId(): string {
  if (
    typeof crypto !== "undefined" &&
    "randomUUID" in crypto
  ) {
    return crypto.randomUUID();
  }

  return `tab-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export function parseSessionLease(
  raw: string | null,
): SessionLease | null {
  if (!raw) return null;

  try {
    const value = JSON.parse(raw) as Partial<SessionLease>;

    if (
      value.version !== 1 ||
      (value.kind !== "reading" &&
        value.kind !== "math" &&
        value.kind !== "full-test") ||
      typeof value.ownerId !== "string" ||
      !Number.isFinite(value.acquiredAt) ||
      !Number.isFinite(value.heartbeatAt)
    ) {
      return null;
    }

    return value as SessionLease;
  } catch {
    return null;
  }
}

export function sessionLeaseIsExpired(
  lease: SessionLease,
  now = Date.now(),
  ttlMs = DEFAULT_SESSION_LEASE_TTL_MS,
): boolean {
  return now - lease.heartbeatAt > ttlMs;
}

export function canAcquireSessionLease(
  existing: SessionLease | null,
  ownerId: string,
  now = Date.now(),
  ttlMs = DEFAULT_SESSION_LEASE_TTL_MS,
): boolean {
  return (
    !existing ||
    existing.ownerId === ownerId ||
    sessionLeaseIsExpired(existing, now, ttlMs)
  );
}

export function buildSessionLease(
  kind: AdaptiveSessionKind,
  ownerId: string,
  now = Date.now(),
  acquiredAt = now,
): SessionLease {
  return {
    version: 1,
    kind,
    ownerId,
    acquiredAt,
    heartbeatAt: now,
  };
}

export function readSessionLease(
  kind: AdaptiveSessionKind,
): SessionLease | null {
  if (typeof window === "undefined") return null;

  return parseSessionLease(
    window.localStorage.getItem(
      sessionLeaseKey(kind),
    ),
  );
}

export function acquireSessionLease(
  kind: AdaptiveSessionKind,
  ownerId: string,
  now = Date.now(),
  ttlMs = DEFAULT_SESSION_LEASE_TTL_MS,
): SessionLeaseResult {
  if (typeof window === "undefined") {
    return {
      acquired: true,
      lease: buildSessionLease(
        kind,
        ownerId,
        now,
      ),
    };
  }

  const previous = readSessionLease(kind);

  if (
    !canAcquireSessionLease(
      previous,
      ownerId,
      now,
      ttlMs,
    )
  ) {
    const blockingLease = previous!;

    return {
      acquired: false,
      lease: blockingLease,
      previous: blockingLease,
    };
  }

  const lease = buildSessionLease(
    kind,
    ownerId,
    now,
    previous?.ownerId === ownerId
      ? previous.acquiredAt
      : now,
  );

  window.localStorage.setItem(
    sessionLeaseKey(kind),
    JSON.stringify(lease),
  );

  return {
    acquired: true,
    lease,
    previous: previous ?? undefined,
  };
}

export function refreshSessionLease(
  kind: AdaptiveSessionKind,
  ownerId: string,
  now = Date.now(),
): boolean {
  if (typeof window === "undefined") return true;

  const existing = readSessionLease(kind);

  if (!existing || existing.ownerId !== ownerId) {
    return false;
  }

  const refreshed = {
    ...existing,
    heartbeatAt: now,
  };

  window.localStorage.setItem(
    sessionLeaseKey(kind),
    JSON.stringify(refreshed),
  );

  return true;
}

export function releaseSessionLease(
  kind: AdaptiveSessionKind,
  ownerId: string,
): void {
  if (typeof window === "undefined") return;

  const existing = readSessionLease(kind);

  if (existing?.ownerId === ownerId) {
    window.localStorage.removeItem(
      sessionLeaseKey(kind),
    );
  }
}
