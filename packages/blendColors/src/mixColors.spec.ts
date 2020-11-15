import { each } from 'lodash';
import { mixColors } from './mixColors';

const mockedInvalidInputs = {
  undefined: undefined,
  null: null,
  zero: 0,
  number: 1234,
  emptyString: '',
  object: {},
  array: [],
};

const mockedValidInputs = {
  a: '30'
};

describe('Given isColorValid function', () => {
  describe('When provided with a valid, truthy string, hex input', () => {
    each(mockedValidInputs, input => {
      it(`Then it should return true for ${input}`, () => {
        expect(mixColors('ffffff','0086e6',input)).toBe(true);
      });
    })
  });

  xdescribe('When provided with invalid or falsy input', () => {
    each(mockedInvalidInputs, input => {
      it(`Then it should return false for ${input}`, () => {
        expect(mixColors('000000','0099cb',input as any)).toBe(false);
      });
    })
  });

});
