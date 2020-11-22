import camelCase from 'lodash/camelCase';
import snakeCase  from 'lodash/snakeCase';
import { mapKeysDeep } from './mapKeysDeep';

const mockedFlatCollection = {
  vehicle: 'vehicle',
  operator_id: 'operator id',
};

const mockedNestedCollection = {
  vehicle: 'vehicle model',
  details: {
    alert_name: 'some alert',
    description: {
      colors: ['red', 'green'],
    },
  },
};

const iteratorFn = (key: string) => key.toUpperCase().replace(/\s+/g, '');

describe(`Given mapKeysDeep util function`, () => {
  describe(`When provided with flat object with snake_case keys`, () => {
    describe(`And camelCase function is used as an iterator`, () => {
      it(`Then transforms the object keys into camelCase`, () => {
        expect(mapKeysDeep(mockedFlatCollection, camelCase)).toEqual({ operatorId: 'operator id', vehicle: 'vehicle' });
      });
    });
    describe(`And snakeCase function is used as an iterator`, () => {
      it(`Then leves snake_sase object keys intact`, () => {
        expect(mapKeysDeep(mockedFlatCollection, snakeCase)).toEqual({ operator_id: 'operator id', vehicle: 'vehicle' });
      });
    });
    describe(`And iteratorFn function is used as an iterator`, () => {
      it(`Then transforms the object keys into UPPER CASE`, () => {
        expect(mapKeysDeep(mockedFlatCollection, iteratorFn)).toEqual({ OPERATORID: 'operator id', VEHICLE: 'vehicle' });
      });
    });
  });

  describe(`Given mapKeysDeep util function`, () => {
    describe(`When provided with flat object with snake_case keys`, () => {
      describe(`And camelCase function is used as an iterator`, () => {
        it(`Then transforms the object keys into camelCase`, () => {
          expect(mapKeysDeep(mockedNestedCollection, (_value: any, key: any) => camelCase(key)))
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
      describe(`And snakeCase function is used as an iterator`, () => {
        it(`Then leves snake_sase object keys intact`, () => {
          expect(mapKeysDeep(mockedNestedCollection, (_value: any, key: any) => snakeCase(key)))
            .toEqual(
              {
                vehicle: 'vehicle model',
                details: {
                  alert_name: 'some alert',
                  description: {
                    colors: ['red', 'green'],
                  },
                },
              }
            );
        });
      });
      describe(`And iteratorFn function is used as an iterator`, () => {
        it(`Then transforms the object keys into UPPER CASE`, () => {
          expect(mapKeysDeep(mockedNestedCollection, (_value: any, key: any) => iteratorFn(key)))
            .toEqual(
              {
                VEHICLE: 'vehicle model',
                DETAILS: {
                  ALERT_NAME: 'some alert',
                  DESCRIPTION: {
                    COLORS: ['red', 'green'],
                  },
                },
              }
            );
        });
      });
    });
  });
});
