import { data } from './data.js';
import type { CurrencyCode } from './types.js';

const currencyValues = Object.values(data);
export const currencyCodes = Object.keys(data) as CurrencyCode[];
export const currencyCodesSet = new Set(currencyCodes);
export const isCurrencyCode = (code: unknown): code is CurrencyCode =>
  typeof code === 'string' && currencyCodesSet.has(code as CurrencyCode);
export const getByCode = <Code extends string>(code: Code) => (isCurrencyCode(code) ? data[code] : undefined);
export const getByNumber = (number: string) => currencyValues.find(({ number: currentNumber }) => currentNumber === number);
export const getSymbolByCode = (code: string) => getByCode(code)?.symbol;
