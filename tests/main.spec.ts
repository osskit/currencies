import { data, getByCode, getByNumber, getCodes, isCurrencyCode } from '../src/index.js';

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
      expect(typeof getCodes).toBe('function');
    });

    it('should expose is currency code', () => {
      expect(typeof isCurrencyCode).toBe('function');
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
        }
      `);
    });
  });

  describe('getCodes', () => {
    it('should return the codes', () => {
      expect(getCodes()).toHaveLength(179);
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
});
