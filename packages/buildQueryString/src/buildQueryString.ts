import { isEmpty, keys } from 'lodash';

/**
 * Concatenates params to generate a string usable in a URL.
 * @param { any[] } collection List of elements to convert to query params
 * @returns { string } String preceded by '?' and then the params separated by '&'
 */
export function buildQueryString(collection: Record<string, unknown>): string {
  if (isEmpty(collection)) {
    return '';
  }

  const query = keys(collection)
    .map(key => `${key}=${(collection as any)[key]}`)
    .join('&');

  return `?${query}`;
}

