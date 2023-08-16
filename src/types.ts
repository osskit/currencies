import type { data } from './data.js';

export type Currency = (typeof data)[number];
export type CurrencyCode = Currency['code'];
export interface Amount {
  value: number;
  currency: CurrencyCode;
}
