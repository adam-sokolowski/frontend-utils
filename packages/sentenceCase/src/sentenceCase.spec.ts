import { each } from 'lodash';
import { sentenceCase } from './sentenceCase';

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
  camel: 'myString',
  pascal: 'MyString',
  snake: 'my_string',
  upper: 'MY STRING',
  lower: 'my string',
  sentence: 'My string',
  title: 'My String',
};

describe('Given sentenceCase function', () => {
  describe('When provided with a valid, truthy string input', () => {
    each(mockedValidInputs, input => {
      it(`Then it should return 'Sentence cased' version for ${input}`, () => {
        expect(sentenceCase(input)).toBe('My string');
      });
    })
  });

  describe('When provided with invalid or falsy input', () => {
    each(mockedInvalidInputs, input => {
      it(`Then it should return an empty string for ${input}`, () => {
        expect(sentenceCase(input as any)).toBe('');
      });
    })
  });

  describe('When provided with a string number as an input', () => {
      it(`Then it should return an input value intact`, () => {
        expect(sentenceCase('123.45')).toBe('123.45');
        expect(sentenceCase('123,45')).toBe('123,45');
        expect(sentenceCase('123 45')).toBe('123 45');
      });
    })
  
});
