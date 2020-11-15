import { isColorValid, normalizeColor } from './isColorValid';
import { isNumber, isString } from 'lodash';

const normalizePercentage = (percentage: number | string) : number => 
  isNumber(percentage)
    ? percentage
    : parseFloat(percentage.replace(/,/g, '.'));


const toRGB = (hex: string) => [
  parseInt(hex[0] + hex[1], 16),
  parseInt(hex[2] + hex[3], 16),
  parseInt(hex[4] + hex[5], 16)
];

const toHEX = (rgb: number) => {
  const hex = Math.round(rgb).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const isPercentageValid = (percentage: string | number): boolean => !!percentage && (isString(percentage) || isNumber(percentage));

/**
 * Function for mixing hex colors
 * Sass mix for javascript
 * @param base hex color
 * @param color hex color
 * @param percentage amount of main colof in the mix
 * @returns string hex color
 */
export function mixColors(
  base: string,
  color: string,
  percentage: string | number): string | undefined {

  if(!isColorValid(base) || !isColorValid(color) || (!isPercentageValid(percentage))) {
    return;
  }

  const percent = normalizePercentage(percentage) / 100;

  const baseRGB = toRGB(normalizeColor(base));
  const colorRGB = toRGB(normalizeColor(color));

  const rbg = [ 
    percent * baseRGB[0] + (1 - percent) * colorRGB[0], 
    percent * baseRGB[1] + (1 - percent) * colorRGB[1], 
    percent * baseRGB[2] + (1 - percent) * colorRGB[2]
  ];

  return '#' + toHEX(rbg[0]) + toHEX(rbg[1]) + toHEX(rbg[2]);
}
