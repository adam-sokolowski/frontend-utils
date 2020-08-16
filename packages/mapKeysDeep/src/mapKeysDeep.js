"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapKeysDeep = void 0;
var lodash_1 = require("lodash");
/**
* Performs recursive object's key modification
* @param collection {object} collection to be modified
* @param iterator {function} transformation to apply to object's keys
* @returns {object} Object with keys modified by iterator
*/
function mapKeysDeep(collection, iterator) {
    if (lodash_1.isArray(collection)) {
        return lodash_1.map(collection, function (item) { return mapKeysDeep(item, iterator); });
    }
    if (!lodash_1.isPlainObject(collection)) {
        return collection;
    }
    var result = lodash_1.mapKeys(collection, iterator);
    return lodash_1.mapValues(result, function (value) { return mapKeysDeep(value, iterator); });
}
exports.mapKeysDeep = mapKeysDeep;
