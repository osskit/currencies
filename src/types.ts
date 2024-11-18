import type { data } from './data.js';

export type CurrencyCode = keyof typeof data;
export type Currency = (typeof data)[CurrencyCode];

export interface Amount {
  value: number;
  currency: CurrencyCode;
}
