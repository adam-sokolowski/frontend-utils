import { each } from 'lodash';
import { getQueryParams } from './getQueryParams';
const mockedParamsUrl = 'terms-and-conditions?uuid=2980d03e-4a87-48d3-a161-e3d19caa3be2&language=en&company=33c1b18f-2841-494c-b346-22f688c34b6e&from=default&uuids=["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]';

const mockedInvalidUrls = {
  noQuery:'terms-and-conditions',
  empty:'',
  number: 12312,
  zero: 0,
  null: null,
  undefined: undefined,
  array: [],
  object: {}
};

describe('Given getQueryParams function', () => {
  describe('When a url with query params is passed', () => {
    it('Then it should return an object of query params', () => {
      expect(getQueryParams(mockedParamsUrl)).toEqual(
        {
          uuid: "2980d03e-4a87-48d3-a161-e3d19caa3be2",
          language: 'en',
          company: '33c1b18f-2841-494c-b346-22f688c34b6e',
          from: 'default',
          uuids: '["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]',
        },
      );
    });
  });

  describe('When a regular string(url without query params) is evaluated', () => {
    each(mockedInvalidUrls, option => {
      it(`Then it should return an empty object for ${option}`, () => {
        expect(getQueryParams(option as any)).toStrictEqual({});
      });
    })

    


  });
});