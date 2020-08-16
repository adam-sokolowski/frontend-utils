"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var getQueryParams_1 = require("./getQueryParams");
var mockedParamsUrl = 'terms-and-conditions?uuid=2980d03e-4a87-48d3-a161-e3d19caa3be2&language=en&company=33c1b18f-2841-494c-b346-22f688c34b6e&from=default&uuids=["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]';
var mockedInvalidUrls = {
    noQuery: 'terms-and-conditions',
    empty: '',
    number: 12312,
    zero: 0,
    null: null,
    undefined: undefined,
    array: [],
    object: {}
};
describe('Given getQueryParams function', function () {
    describe('When a url with query params is passed', function () {
        it('Then it should return an object of query params', function () {
            expect(getQueryParams_1.getQueryParams(mockedParamsUrl)).toEqual({
                uuid: "2980d03e-4a87-48d3-a161-e3d19caa3be2",
                language: 'en',
                company: '33c1b18f-2841-494c-b346-22f688c34b6e',
                from: 'default',
                uuids: '["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]',
            });
        });
    });
    describe('When a regular string(url without query params) is evaluated', function () {
        lodash_1.each(mockedInvalidUrls, function (option) {
            it("Then it should return an empty object for " + option, function () {
                expect(getQueryParams_1.getQueryParams(option)).toStrictEqual({});
            });
        });
    });
});
