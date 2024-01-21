import { data, getByCode, getByNumber, getSymbolByCode, currencyCodes, isCurrencyCode, toMajorUnit, toMinorUnit } from '../src/index.js';

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

    it('should expose a get codes', () => {
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

  describe('getCodes', () => {
    it('should return the codes', () => {
      expect(currencyCodes).toHaveLength(177);
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
});
