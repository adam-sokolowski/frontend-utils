import { map, split } from 'lodash';

/**
 * Transforms URL's query params into an array of objects
 * In absence of query params returns an empty object
 * @param {string} url with query params.
 * @returns object
 */
export function getQueryParams(url: string): Record<string, unknown> {
  const queryParams = split(url, '?')[1];
  const paramsArray = split(queryParams, '&');

  return queryParams
    ? Object.assign( {}, ...map(paramsArray, item => ({ [item.split('=')[0]]: item.split('=')[1] })))
    : {};
}
