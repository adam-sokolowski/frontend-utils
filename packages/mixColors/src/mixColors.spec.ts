import each from 'lodash/each';
import { mixColors, shade, tint } from './mixColors';

const mockedInvalidInputs = {
  undefined: undefined,
  null: null,
  zero: 0,
  emptyString: '',
  object: {},
  array: [],
};

const lightColors = [
  {main: '#0086e6', light: '#4caaed', lighter: '#99cff5', lightest: '#cce7fa'},
  {main: '#20205b', light: '#62628c', lighter: '#a6a6bd', lightest: '#d2d2de'},
  {main: '#336080', light: '#708fa6', lighter: '#adbfcc', lightest: '#d6dfe6'},
  {main: '#5bb058', light: '#8cc78a', lighter: '#bddfbc', lightest: '#deefde'},
  {main: '#fada3c', light: '#fbe576', lighter: '#fdf0b1', lightest: '#fef8d8'},
  {main: '#f58c22', light: '#f8ae64', lighter: '#fbd1a7', lightest: '#fde8d3'},
  {main: '#e5576a', light: '#ed8996', lighter: '#f5bcc3', lightest: '#fadde1'},
  {main: '#0f0', light: '#4cff4c', lighter: '#99ff99', lightest: '#ccffcc'},
];

const lightVariants = {
  light: 29.7,
  lighter: 60,
  lightest: 80,
};

const darkColors = [
  {main: '#0086e6', dark: '#006dbc', darker: '#005593', darkest: '#003d69'},
  {main: '#20205b', dark: '#1a1a4a', darker: '#14143a', darkest: '#0f0f2a'},
  {main: '#336080', dark: '#2a4e69', darker: '#203d52', darkest: '#172c3a'},
  {main: '#5bb058', dark: '#4a9048', darker: '#3a7038', darkest: '#2a5028'},
  {main: '#fada3c', dark: '#ccb231', darker: '#9f8b26', darkest: '#72641b'},
  {main: '#f58c22', dark: '#c8721c', darker: '#9c5916', darkest: '#704010'},
  {main: '#e5576a', dark: '#bb4757', darker: '#923744', darkest: '#692830'},
  {main: '060', dark: '#005300', darker: '#004100', darkest: '#002f00'},
];

const darkVariants = {
  dark: 18.3,
  darker: 36.3,
  darkest: 54.3,
};

describe('Given mixColors function', () => {
  describe('When provided with a valid, truthy string, hex input', () => {
    each(lightColors, (color) => {
      each(lightVariants, (variant, variantName) => {
        it(`Then it should return ${variant}% tinted variant of ${color.main}`, () => {
          expect(mixColors('ffffff',color.main, variant)).toBe((color as any)[variantName]);
          expect(tint(color.main, variant)).toBe((color as any)[variantName]);
        });
      });
    })

    each(darkColors, (color) => {
      each(darkVariants, (variant, variantName) => {
        it(`Then it should return ${variant}% shaded variant of ${color.main}`, () => {
          expect(mixColors('000000',color.main, variant)).toBe((color as any)[variantName]);
          expect(shade(color.main, variant)).toBe((color as any)[variantName]);
        });
      });
    })
  });

  describe('When provided with invalid or falsy input', () => {
    each(mockedInvalidInputs, input => {
      it(`Then it should return false for ${input}`, () => {
        expect(mixColors('000000','0099cb', input as any)).toBeUndefined();
        expect(mixColors('000000',input as any, 10)).toBeUndefined();
        expect(mixColors(input as any, '0099cb', 10)).toBeUndefined();
      });
    })
  });
});
