"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryString = void 0;
var lodash_1 = require("lodash");
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
function buildQueryString(collection) {
    if (lodash_1.isEmpty(collection)) {
        return '';
    }
    var query = lodash_1.keys(collection)
        .map(function (key) { return key + "=" + (collection)[key]; })
        .join('&');
    return "?" + query;
}
exports.buildQueryString = buildQueryString;
