import type { Amount } from './types.js';
import { isCurrencyCode } from './currencies.js';

export const isAmount = (value: unknown): value is Amount =>
  !!value &&
  typeof value === 'object' &&
  'value' in value &&
  'currency' in value &&
  isCurrencyCode(value.currency) &&
  typeof value.value === 'number';
