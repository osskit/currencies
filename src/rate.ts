import type { Amount } from './types.js';
import { toMajorUnit } from './conversion.js';

export const calculateRate = (from: Amount, to: Amount) => {
  const fromInMajor = toMajorUnit(from);
  const toInMajor = toMajorUnit(to);

  return toInMajor / fromInMajor;
};
