import { getQueryParams } from './getQueryParams';
const mockedParamsUrl = 'terms-and-conditions?uuid=a82fc9e6-0df3-431b-92ff-050f6fa53b07&language=en&csOperator=b233c343-73e6-4818-9726-d12fd86f9fa2&from=default&uuids=["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]';

describe('Given getQueryParams util method', () => {
  describe('When a url with query params is passed', () => {
    it('Then it should return an array of key:value pairs for query params', () => {
      expect(getQueryParams(mockedParamsUrl)).toEqual(
        {
          uuid: "a82fc9e6-0df3-431b-92ff-050f6fa53b07",
          language: 'en',
          csOperator: 'b233c343-73e6-4818-9726-d12fd86f9fa2',
          from: 'default',
          uuids: '["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]',
        },
      );
    });
  });

  describe('When a string or url without query params is passed', () => {
    it('Then it should return an empty object ', () => {
      expect(getQueryParams('terms-and-conditions')).toStrictEqual({});
    });
  });
});