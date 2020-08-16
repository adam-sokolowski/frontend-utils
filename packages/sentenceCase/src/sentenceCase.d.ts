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
export declare function sentenceCase(value: string): string;
