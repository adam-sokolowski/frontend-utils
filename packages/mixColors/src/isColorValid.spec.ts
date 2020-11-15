import { each } from 'lodash';
import { isColorValid } from './isColorValid';

const mockedInvalidInputs = {
  undefined: undefined,
  null: null,
  zero: 0,
  number: 1234,
  emptyString: '',
  object: {},
  array: [],
  a: 'f',
  b: '0000',
};

const mockedValidInputs = {
  a: 'ffffff',
  b: '#ffffff',
  c: '000000',
  d: '#000000',
  e: '060',
  f: '#060',
};

describe('Given isColorValid function', () => {
  describe('When provided with a valid, truthy string, hex input', () => {
    each(mockedValidInputs, input => {
      it(`Then it should return true for ${input}`, () => {
        expect(isColorValid(input)).toBe(true);
      });
    })
  });

  describe('When provided with invalid or falsy input', () => {
    each(mockedInvalidInputs, input => {
      it(`Then it should return false for ${input}`, () => {
        expect(isColorValid(input as any)).toBe(false);
      });
    })
  });

});
