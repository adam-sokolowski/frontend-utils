import keys from 'lodash/keys';
import isEmpty from 'lodash/isEmpty';

/**
 * Concatenates object's key:value pairs into a query params string
 * @param { record } collection Object to convert
 * @returns { string } Query param string
 *
 * @example
 * const obj = {
 *  from: 1,
 *  to: 2,
 *  user: 'test-user'
 * }
 *
 * const queryString = buildQueryString(obj);  // result ?from=1&to=2&user=test-user
 */
export function buildQueryString(collection: Record<string, string | number>): string {
  if (isEmpty(collection)) {
    return '';
  }

  const query = keys(collection)
    .map(key => `${key}=${(collection)[key]}`)
    .join('&');

  return `?${query}`;
}

