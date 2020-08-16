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
export declare function buildQueryString(collection: Record<string, string | number>): string;
