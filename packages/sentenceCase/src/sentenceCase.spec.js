"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var sentenceCase_1 = require("./sentenceCase");
var mockedInvalidInputs = {
    undefined: undefined,
    null: null,
    zero: 0,
    number: 1234,
    emptyString: '',
    object: {},
    array: [],
};
var mockedValidInputs = {
    camel: 'myString',
    pascal: 'MyString',
    snake: 'my_string',
    upper: 'MY STRING',
    lower: 'my string',
    sentence: 'My string',
    title: 'My String',
};
describe('Given sentenceCase function', function () {
    describe('When provided with a valid, truthy string input', function () {
        lodash_1.each(mockedValidInputs, function (input) {
            it("Then it should return 'Sentence cased' version for " + input, function () {
                expect(sentenceCase_1.sentenceCase(input)).toBe('My string');
            });
        });
    });
    describe('When provided with invalid or falsy input', function () {
        lodash_1.each(mockedInvalidInputs, function (input) {
            it("Then it should return an empty string for " + input, function () {
                expect(sentenceCase_1.sentenceCase(input)).toBe('');
            });
        });
    });
    describe('When provided with a string number as an input', function () {
        it("Then it should return an input value intact", function () {
            expect(sentenceCase_1.sentenceCase('123.45')).toBe('123.45');
            expect(sentenceCase_1.sentenceCase('123,45')).toBe('123,45');
            expect(sentenceCase_1.sentenceCase('123 45')).toBe('123 45');
        });
    });
});
