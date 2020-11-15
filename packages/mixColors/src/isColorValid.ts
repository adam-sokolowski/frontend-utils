import { isString, startsWith, toLower } from 'lodash';

const colorRegex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

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
