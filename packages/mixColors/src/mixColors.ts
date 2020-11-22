import {
  isColorValid,
  isPercentageValid,
  normalizeColor,
  normalizePercentage,
  toHEX,
  toRGB
} from './utils/utils';

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

export function shade(
  color: string,
  percentage: string | number): string | undefined {
    return mixColors('000', color, percentage);
  }

export function tint(
  color: string,
  percentage: string | number): string | undefined {
    return mixColors('fff', color, percentage);
  }