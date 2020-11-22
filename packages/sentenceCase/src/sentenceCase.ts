import camelCase from 'lodash/camelCase';
import isNaN from 'lodash/isNaN';
import isString from 'lodash/isString';
import parseInt from 'lodash/parseInt';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import upperFirst from 'lodash/upperFirst';

/**
 * Transforms a string into a `Sentence case` - capitalizes first letter of the string.
 * @param value string
 * @returns string
 *
 * @example
 * 'myString' => 'My string'
 * 'my_string' => 'My string'
 * 'MY_STRING' => 'My string'
 * 'my string' => 'My string'
 * 'My string' => 'My string'
 * 'My String' => 'My string'
 */
export function sentenceCase(value: string): string {
  if(isString(value) && !isNaN(parseInt(value))) {
    return value;
  }
  
  if (!value || !isString(value)) {
    return '';
  }

  const normalized = toLower(
    startCase(
      camelCase(value)
    )
  );

  return upperFirst(normalized);
}
