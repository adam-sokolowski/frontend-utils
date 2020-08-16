"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentenceCase = void 0;
var lodash_1 = require("lodash");
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
function sentenceCase(value) {
    if (lodash_1.isString(value) && !lodash_1.isNaN(lodash_1.parseInt(value))) {
        return value;
    }
    if (!value || !lodash_1.isString(value)) {
        return '';
    }
    var normalized = lodash_1.toLower(lodash_1.startCase(lodash_1.camelCase(value)));
    return lodash_1.upperFirst(normalized);
}
exports.sentenceCase = sentenceCase;
