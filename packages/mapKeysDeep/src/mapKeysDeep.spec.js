"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var mapKeysDeep_1 = require("./mapKeysDeep");
var mockedFlatCollection = {
    vehicle: 'vehicle',
    operator_id: 'operator id',
};
var mockedNestedCollection = {
    vehicle: 'vehicle model',
    details: {
        alert_name: 'some alert',
        description: {
            colors: ['red', 'green'],
        },
    },
};
var iteratorFn = function (key) { return key.toUpperCase().replace(/\s+/g, ''); };
describe("Given mapKeysDeep util function", function () {
    describe("When provided with flat object with snake_case keys", function () {
        describe("And camelCase function is used as an iterator", function () {
            it("Then transforms the object keys into camelCase", function () {
                expect(mapKeysDeep_1.mapKeysDeep(mockedFlatCollection, lodash_1.camelCase)).toEqual({ operatorId: 'operator id', vehicle: 'vehicle' });
            });
        });
        describe("And snakeCase function is used as an iterator", function () {
            it("Then leves snake_sase object keys intact", function () {
                expect(mapKeysDeep_1.mapKeysDeep(mockedFlatCollection, lodash_1.snakeCase)).toEqual({ operator_id: 'operator id', vehicle: 'vehicle' });
            });
        });
        describe("And iteratorFn function is used as an iterator", function () {
            it("Then transforms the object keys into UPPER CASE", function () {
                expect(mapKeysDeep_1.mapKeysDeep(mockedFlatCollection, iteratorFn)).toEqual({ OPERATORID: 'operator id', VEHICLE: 'vehicle' });
            });
        });
    });
    describe("Given mapKeysDeep util function", function () {
        describe("When provided with flat object with snake_case keys", function () {
            describe("And camelCase function is used as an iterator", function () {
                it("Then transforms the object keys into camelCase", function () {
                    expect(mapKeysDeep_1.mapKeysDeep(mockedNestedCollection, function (_value, key) { return lodash_1.camelCase(key); }))
                        .toEqual({
                        vehicle: 'vehicle model',
                        details: {
                            alertName: 'some alert',
                            description: {
                                colors: ['red', 'green'],
                            },
                        },
                    });
                });
            });
            describe("And snakeCase function is used as an iterator", function () {
                it("Then leves snake_sase object keys intact", function () {
                    expect(mapKeysDeep_1.mapKeysDeep(mockedNestedCollection, function (_value, key) { return lodash_1.snakeCase(key); }))
                        .toEqual({
                        vehicle: 'vehicle model',
                        details: {
                            alert_name: 'some alert',
                            description: {
                                colors: ['red', 'green'],
                            },
                        },
                    });
                });
            });
            describe("And iteratorFn function is used as an iterator", function () {
                it("Then transforms the object keys into UPPER CASE", function () {
                    expect(mapKeysDeep_1.mapKeysDeep(mockedNestedCollection, function (_value, key) { return iteratorFn(key); }))
                        .toEqual({
                        VEHICLE: 'vehicle model',
                        DETAILS: {
                            ALERT_NAME: 'some alert',
                            DESCRIPTION: {
                                COLORS: ['red', 'green'],
                            },
                        },
                    });
                });
            });
        });
    });
});
