"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParams = void 0;
var tslib_1 = require("tslib");
var lodash_1 = require("lodash");
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
function getQueryParams(url) {
    var queryParams = lodash_1.split(url, '?')[1];
    var paramsArray = lodash_1.split(queryParams, '&');
    return queryParams
        ? Object.assign.apply(Object, tslib_1.__spread([{}], lodash_1.map(paramsArray, function (item) {
            var _a;
            return (_a = {}, _a[item.split('=')[0]] = item.split('=')[1], _a);
        }))) : {};
}
exports.getQueryParams = getQueryParams;
