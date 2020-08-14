import { example } from './';

describe('Given an example function', () => {
  describe('When provided with a value', () => {
    it('Then it returns the same value', () => {
      expect(example('a')).toBe('a');
    });
  });
});
