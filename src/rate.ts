import type { Amount, CurrencyCode } from './types.js';
import { toMajorUnit, toMinorUnit } from './conversion.js';

const JS_BUFFER_MULTIPLIER = 10_000;

export const calculateRate = (from: Amount, to: Amount) => {
  const fromInMajor = toMajorUnit(from);
  const toInMajor = toMajorUnit(to);

  return Math.abs((JS_BUFFER_MULTIPLIER * toInMajor) / (JS_BUFFER_MULTIPLIER * fromInMajor));
};

export const applyRate = (amount: Amount, targetCurrency: CurrencyCode, rate: number): Amount => {
  const amountInMajor = toMajorUnit(amount);
  const convertedAmountInMajor = amountInMajor * rate;
  const convertedAmountInMinor = toMinorUnit(convertedAmountInMajor, targetCurrency);

  return { value: convertedAmountInMinor, currency: targetCurrency };
};
