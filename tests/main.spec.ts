import { data, getByCode, getByNumber } from '../src/index.js';

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
  });
});
