import { data } from './data.js';
import type { CurrencyCode } from './types.js';

export const getByCode = (code: string) => data.find(({ code: currentCode }) => currentCode === code);
export const getByNumber = (number: string) => data.find(({ number: currentNumber }) => currentNumber === number);
export const getCodes = () => data.map(({ code }) => code);
export const isCurrencyCode = (code: unknown): code is CurrencyCode =>
  typeof code === 'string' && getCodes().includes(code as CurrencyCode);
export const getSymbolByCode = (code: string) => getByCode(code)?.symbol;
