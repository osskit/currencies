import { expectType } from 'tsd';
import { describe, it, expect } from 'vitest';
import type { Currency, CurrencyCode } from '../src/index.js';
import {
  isAmount,
  data,
  getByCode,
  getByNumber,
  getSymbolByCode,
  currencyCodes,
  isCurrencyCode,
  toMajorUnit,
  toMinorUnit,
  calculateRate,
} from '../src/index.js';

describe('currencies', () => {
  describe('exports', () => {
    it('should expose the data', () => {
      expect(typeof data).toBe('object');
    });

    it('should expose a get currency by code', () => {
      expect(typeof getByCode).toBe('function');
    });

    it('should expose a get currency by number', () => {
      expect(typeof getByNumber).toBe('function');
    });

    it('should expose currency codes', () => {
      expect(typeof currencyCodes).toBe('object');
    });

    it('should expose is currency code', () => {
      expect(typeof isCurrencyCode).toBe('function');
    });

    it('should expose to major unit', () => {
      expect(typeof toMajorUnit).toBe('function');
    });

    it('should expose to minor unit', () => {
      expect(typeof toMinorUnit).toBe('function');
    });

    it('should expose get symbol by code', () => {
      expect(typeof getSymbolByCode).toBe('function');
    });
  });

  describe('getByCode', () => {
    it('should return the currency', () => {
      expect(getByCode('EUR')).toMatchInlineSnapshot(`
        {
          "code": "EUR",
          "countries": [
            "Åland Islands",
            "Andorra",
            "Austria",
            "Belgium",
            "Croatia",
            "Cyprus",
            "Estonia",
            "European Union",
            "Finland",
            "France",
            "French Guiana",
            "French Southern Territories (The)",
            "Germany",
            "Greece",
            "Guadeloupe",
            "Holy See (The)",
            "Ireland",
            "Italy",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Martinique",
            "Mayotte",
            "Monaco",
            "Montenegro",
            "Netherlands (The)",
            "Portugal",
            "Réunion",
            "Saint Barthélemy",
            "Saint Martin (French Part)",
            "Saint Pierre and Miquelon",
            "San Marino",
            "Slovakia",
            "Slovenia",
            "Spain",
          ],
          "currency": "Euro",
          "digits": 2,
          "number": "978",
          "symbol": "€",
        }
      `);
    });

    it('should return typed response', () => {
      const value = getByCode('USD');

      expect(value.digits).toBe(2);

      expectType<{
        code: 'USD';
        countries: readonly [
          'American Samoa',
          'Bonaire, Sint Eustatius and Saba',
          'British Indian Ocean Territory (The)',
          'Ecuador',
          'El Salvador',
          'Guam',
          'Haiti',
          'Marshall Islands (The)',
          'Micronesia (Federated States Of)',
          'Northern Mariana Islands (The)',
          'Palau',
          'Panama',
          'Puerto Rico',
          'Timor-Leste',
          'Turks and Caicos Islands (The)',
          'United States Minor Outlying Islands (The)',
          'United States of America (The)',
          'Virgin Islands (British)',
          'Virgin Islands (U.S.)',
        ];
        currency: 'US Dollar';
        digits: 2;
        number: '840';
        symbol: '$';
      }>(value);
    });

    it('should return type for string', () => {
      const currency = getByCode('EURO');
      expect(currency).toBeUndefined();

      expectType<Currency | undefined>(currency);
    });

    it('should return type for currency code', () => {
      const bla = 'EUR' as CurrencyCode;

      const currency = getByCode(bla);

      expect(currency).toBeDefined();

      expectType<Currency>(currency);
    });
  });

  describe('getByNumber', () => {
    it('should return the currency', () => {
      expect(getByNumber('978')).toMatchInlineSnapshot(`
        {
          "code": "EUR",
          "countries": [
            "Åland Islands",
            "Andorra",
            "Austria",
            "Belgium",
            "Croatia",
            "Cyprus",
            "Estonia",
            "European Union",
            "Finland",
            "France",
            "French Guiana",
            "French Southern Territories (The)",
            "Germany",
            "Greece",
            "Guadeloupe",
            "Holy See (The)",
            "Ireland",
            "Italy",
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Martinique",
            "Mayotte",
            "Monaco",
            "Montenegro",
            "Netherlands (The)",
            "Portugal",
            "Réunion",
            "Saint Barthélemy",
            "Saint Martin (French Part)",
            "Saint Pierre and Miquelon",
            "San Marino",
            "Slovakia",
            "Slovenia",
            "Spain",
          ],
          "currency": "Euro",
          "digits": 2,
          "number": "978",
          "symbol": "€",
        }
      `);
    });
  });

  describe('currency codes', () => {
    it('should return the codes', () => {
      expect(currencyCodes).toHaveLength(179);
    });
  });

  describe('isCurrencyCode', () => {
    it('should return true for valid currency code', () => {
      expect(isCurrencyCode('EUR')).toBe(true);
    });

    it('should return false for invalid currency code', () => {
      expect(isCurrencyCode('EURO')).toBe(false);
    });
  });

  describe('toMajorUnit', () => {
    it('should return major unit for valid currency code', () => {
      expect(toMajorUnit({ value: 100_000, currency: 'USD' })).toBe(1000);
      expect(toMajorUnit({ value: 100_000, currency: 'JPY' })).toBe(100_000);
      expect(toMajorUnit({ value: 100_013, currency: 'USD' })).toBe(1000.13);
    });
  });

  describe('toMinorUnit', () => {
    it('should return minor unit for valid currency code', () => {
      expect(toMinorUnit({ value: 1000, currency: 'USD' })).toBe(100_000);
      expect(toMinorUnit({ value: 1000, currency: 'JPY' })).toBe(1000);
      expect(toMinorUnit({ value: 1000.13, currency: 'USD' })).toBe(100_013);
    });
  });

  describe('getSymbolByCode', () => {
    it('should return symbol for valid currency code', () => {
      expect(getSymbolByCode('USD')).toBe('$');
      expect(getSymbolByCode('JPY')).toBe('¥');
      expect(getSymbolByCode('EUR')).toBe('€');
    });
  });

  describe('isAmount', () => {
    it('should return true for valid amount', () => {
      expect(isAmount({ value: 1000, currency: 'USD' })).toBe(true);
      expect(isAmount({ value: 1000, currency: 'JPY' })).toBe(true);
    });

    it('should return false for invalid amount', () => {
      expect(isAmount({ value: 1000, currency: 'EURO' })).toBe(false);
      expect(isAmount({ value: 1000 })).toBe(false);
      expect(isAmount({ currency: 'USD' })).toBe(false);
    });
  });

  describe('calculateRate', () => {
    it.each(['USD', 'EUR', 'JPY', 'GBP'] satisfies CurrencyCode[])('returns 1 for same currency - %s', (currency) => {
      expect(calculateRate({ value: 1000, currency }, { value: 1000, currency })).toBe(1);
    });

    it('handles currencies without minor units', () => {
      expect(calculateRate({ value: 1000, currency: 'JPY' }, { value: 1000, currency: 'USD' })).toBe(0.01);
      expect(calculateRate({ value: 1000, currency: 'USD' }, { value: 1000, currency: 'JPY' })).toBe(100);
    });

    it('handles currencies with minor units', () => {
      expect(calculateRate({ value: 1000, currency: 'USD' }, { value: 800, currency: 'EUR' })).toBe(0.8);
      expect(calculateRate({ value: 1000, currency: 'USD' }, { value: 1000, currency: 'GBP' })).toBe(1);
    });

    it('handles floating point correctly', () => {
      expect(calculateRate({ value: 214_500, currency: 'EUR' }, { value: 231_660, currency: 'USD' })).toBe(1.08);
    });
  });
});
