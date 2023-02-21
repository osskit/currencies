import { data, currencyCodeSchema, currencySchema } from '../src/index.js';

describe('currencies', () => {
  describe('exports', () => {
    it('should expose the data', () => {
      expect(typeof data).toBe('object');
    });

    it('should expose a currency code schema', () => {
      expect(typeof currencyCodeSchema).toBe('object');
    });

    it('should expose a currency schema', () => {
      expect(typeof currencySchema).toBe('object');
    });
  });
});
