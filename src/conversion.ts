import { getByCode } from './currencies.js';
import type { Amount } from './types.js';

export const toMinorUnit = ({ value, currency }: Amount) => {
  const currencyRecord = getByCode(currency);

  if (!currencyRecord) {
    throw new Error(`invalid currency ${currency}`);
  }

  return Math.round(currencyRecord.digits === 0 ? value : value * 10 ** currencyRecord.digits);
};

export const toMajorUnit = ({ value, currency }: Amount) => {
  const currencyRecord = getByCode(currency);

  if (!currencyRecord) {
    throw new Error(`invalid currency ${currency}`);
  }

  return currencyRecord.digits === 0 ? value : value / 10 ** currencyRecord.digits;
};
