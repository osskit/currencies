import type { Static } from '@sinclair/typebox';
import { Type } from '@sinclair/typebox';
import { data } from './data.js';

export const currencyCodeSchema = Type.Union(
  data.map((c) => Type.Literal(c.code)),
  { $id: 'CurrencyCode' },
);

export const currencyCodeRef = Type.Ref(currencyCodeSchema);
export type CurrencyCode = Static<typeof currencyCodeRef>;

export const currencySchema = Type.Object(
  {
    code: currencyCodeRef,
    number: Type.String(),
    digits: Type.Number(),
    currency: Type.String(),
    countries: Type.Array(Type.String()),
  },
  { $id: 'Currency' },
);

export const currencyRef = Type.Ref(currencySchema);
export type Currency = Static<typeof currencyRef>;
