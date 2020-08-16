"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildQueryString_1 = require("./buildQueryString");
var collectionMock = {
    a: 1,
    b: 2,
    c: 'asdf',
};
describe("Given buildQueryString() function ", function () {
    describe("When provided with an object as an input", function () {
        it("Then it returns correctly formatted query string preceded by a question mark", function () {
            expect(buildQueryString_1.buildQueryString(collectionMock)).toBe('?a=1&b=2&c=asdf');
        });
    });
    describe("When provided with an empty object as an input", function () {
        it("Then it returns an empty string", function () {
            expect(buildQueryString_1.buildQueryString({})).toBe('');
        });
    });
});
