import type { CurrencyCode } from './types.js';
import { data } from './data.js';

export const getByCode = (code: CurrencyCode) => data.find(({ code: currentCode }) => currentCode === code);
export const getByNumber = (number: string) => data.find(({ number: currentNumber }) => currentNumber === number);
