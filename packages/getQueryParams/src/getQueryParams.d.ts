/**
 * Transforms URL's query params into an object
 * In absence of query params returns an empty object
 * @param {string} url with query params.
 * @returns Record
 *
 * @example
 * {
 *  uuid: "2980d03e-4a87-48d3-a161-e3d19caa3be2",
 *  language: 'en',
 * }
 */
export declare function getQueryParams(url: string): Record<string, unknown>;
