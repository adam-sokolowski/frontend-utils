import { isNumber } from 'lodash';
import { isColorValid } from './isColorValid';

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
    var hex = Math.round(rgb).toString(16);
    if (hex.length == 1)
        hex = '0' + hex;
    return hex;
};

export function mixColors(
  base: string,
  color: string,
  percentage: string | number): string | number {

  const percent = normalizePercentage(percentage) / 100;

  if(!isColorValid(base) || !isColorValid(color) || !isNumber(percent)) {
    return color;
  }

  const baseRGB = toRGB(base);
  const colorRGB = toRGB(color);

  const rbg = [ 
    (1 - percent) * baseRGB[0] + percent * colorRGB[0], 
    (1 - percent) * baseRGB[1] + percent * colorRGB[1], 
    (1 - percent) * baseRGB[2] + percent * colorRGB[2]
  ];

  return '#' + toHEX(rbg[0]) + toHEX(rbg[1]) + toHEX(rbg[2]);
}
