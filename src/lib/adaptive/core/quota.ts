/**
 * Generic quota helpers shared by Reading and Math selectors.
 */

export type QuotaMap<Key extends string = string> =
  Partial<Record<Key, number>>;

export interface QuotaAvailability<
  Key extends string = string,
> {
  key: Key;
  requested: number;
  available: number;
  shortage: number;
  ready: boolean;
}

export function quotaTotal<Key extends string>(
  quotas: QuotaMap<Key>,
): number {
  return (Object.keys(quotas) as Key[]).reduce(
    (sum, key) => sum + (quotas[key] ?? 0),
    0,
  );
}

export function diagnoseQuotas<Key extends string>(
  quotas: QuotaMap<Key>,
  availability: Partial<Record<Key, number>>,
): QuotaAvailability<Key>[] {
  return (Object.keys(quotas) as Key[]).map((key) => {
    const requested = quotas[key] ?? 0;
    const available = availability[key] ?? 0;

    return {
      key,
      requested,
      available,
      shortage: Math.max(0, requested - available),
      ready: available >= requested,
    };
  });
}

export function quotasAreSatisfiable<Key extends string>(
  quotas: QuotaMap<Key>,
  availability: Partial<Record<Key, number>>,
): boolean {
  return diagnoseQuotas(quotas, availability).every(
    (item) => item.ready,
  );
}

export function countBy<T, Key extends string>(
  values: readonly T[],
  keyFor: (value: T) => Key,
): Record<Key, number> {
  const counts = {} as Record<Key, number>;

  for (const value of values) {
    const key = keyFor(value);
    counts[key] = (counts[key] ?? 0) + 1;
  }

  return counts;
}
