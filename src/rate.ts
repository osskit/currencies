import type { Amount } from './types.js';
import { toMajorUnit } from './conversion.js';

const JS_BUFFER_MULTIPLIER = 10_000;

export const calculateRate = (from: Amount, to: Amount) => {
  const fromInMajor = toMajorUnit(from);
  const toInMajor = toMajorUnit(to);

  return (JS_BUFFER_MULTIPLIER * toInMajor) / (JS_BUFFER_MULTIPLIER * fromInMajor);
};
