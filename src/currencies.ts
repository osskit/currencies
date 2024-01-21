import { data } from './data.js';
import type { Currency, CurrencyCode } from './types.js';

const currencyValues = Object.values(data);
export const currencyCodes = Object.keys(data) as CurrencyCode[];
export const currencyCodesSet = new Set(currencyCodes);
export const isCurrencyCode = (code: unknown): code is CurrencyCode =>
  typeof code === 'string' && currencyCodesSet.has(code as CurrencyCode);
export const getByCode = <Code extends string, R = Code extends CurrencyCode ? (typeof data)[Code] : Currency | undefined>(
  code: Code,
): R => {
  if (!isCurrencyCode(code)) {
    return undefined as R;
  }

  return data[code] as unknown as R;
};
export const getByNumber = (number: string) => currencyValues.find(({ number: currentNumber }) => currentNumber === number);
export const getSymbolByCode = (code: string) => getByCode(code)?.symbol;
