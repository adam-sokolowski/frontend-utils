import isNumber from 'lodash/isNumber';
import isString  from 'lodash/isString';
import startsWith  from 'lodash/startsWith';
import toLower  from 'lodash/toLower';

const colorRegex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

export const toRGB = (hex: string): any[] => [
  parseInt(hex[0] + hex[1], 16),
  parseInt(hex[2] + hex[3], 16),
  parseInt(hex[4] + hex[5], 16)
];

export const toHEX = (rgb: number): string => {
  const hex = Math.round(rgb).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const normalizePercentage = (percentage: number | string) : number => 
  isNumber(percentage)
    ? percentage
    : parseFloat(percentage.replace(/,/g, '.'));

export  const isPercentageValid = (percentage: string | number): boolean => !!percentage && (isString(percentage) || isNumber(percentage));

/**
 * Normalizes hex color notation
 * @param color hex color - three or 6 characters optionally prepended by #
 * @returns string
 */
export function normalizeColor(color: string): string {
  const hexValue = startsWith(color, '#') ? color.replace('#', '') : color;

  return hexValue.length === 3
    ? `${hexValue[0]}${hexValue[0]}${hexValue[1]}${hexValue[1]}${hexValue[2]}${hexValue[2]}`
    : hexValue;
}

/**
 * Validates string against color hex format
 * @param color string
 * @returns boolean
 */
export function isColorValid(color: string): boolean {
  if(!color || !isString(color) || !colorRegex.test(color)) {
    return false;
  }

  const hexColor = normalizeColor(color);  
  const hexNumber = (hexColor as any).toString(16);

  const isValid = hexNumber === toLower(hexColor);

  return isValid;
}
