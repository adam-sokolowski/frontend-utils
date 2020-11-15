import { toLower, isString, stubString } from 'lodash';

export function isColorValid(color: string): boolean {
  if(!color || !isString(color) || color.length < 6) {
    return false;
  }

  const hexValue = color.substr(1, 6) || stubString();
  const hexNumber = hexValue.toString(16);

  const isValid = hexNumber === toLower(hexValue);

  return isValid;
}
