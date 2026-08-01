/**
 * Shared deterministic random utilities for adaptive selection.
 */

export type RandomSource = () => number;

/**
 * Deterministic 32-bit hash for stable ordering and seed derivation.
 */
export function stableHash(seed: number, text: string): number {
  let value = (2166136261 ^ (seed >>> 0)) >>> 0;

  for (let index = 0; index < text.length; index += 1) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }

  value ^= value >>> 16;
  value = Math.imul(value, 0x7feb352d);
  value ^= value >>> 15;
  value = Math.imul(value, 0x846ca68b);
  value ^= value >>> 16;

  return value >>> 0;
}

/**
 * Creates the deterministic generator historically used by the Reading
 * blueprint engine.
 *
 * Keeping the exact initial state and update sequence preserves Reading
 * question selection and ordering during the shared-core migration.
 */
export function createSeededRandom(seed: number): RandomSource {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;

    let value = state;

    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^=
      value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns a shuffled copy. The input array is never mutated.
 */
export function shuffleWithRandom<T>(
  values: readonly T[],
  random: RandomSource,
): T[] {
  const copy = [...values];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));

    [copy[index], copy[swapIndex]] = [
      copy[swapIndex],
      copy[index],
    ];
  }

  return copy;
}

/**
 * Convenience deterministic shuffle.
 */
export function shuffleWithSeed<T>(
  values: readonly T[],
  seed: number,
): T[] {
  return shuffleWithRandom(values, createSeededRandom(seed));
}

/**
 * Derives a stable child seed for a module, slot, domain, or retry.
 */
export function deriveSeed(
  parentSeed: number,
  label: string,
  index = 0,
): number {
  return stableHash(parentSeed + index * 1009, label);
}

/**
 * Deterministic ordering helper with an explicit lexical tie-breaker.
 */
export function compareByStableHash(
  seed: number,
  leftId: string,
  rightId: string,
): number {
  const difference =
    stableHash(seed, leftId) - stableHash(seed, rightId);

  if (difference !== 0) return difference;

  return leftId.localeCompare(rightId);
}
