import { buildQueryString } from './buildQueryString';

  const collectionMock = {
    a: 1,
    b: 2,
    c: 'asdf',
  };

  describe(`Given buildQueryString() function `, () => {
    describe(`When provided with an object as an input`, () => {
      it(`Then it returns correctly formatted query string preceded by a question mark`, () => {
        expect(buildQueryString(collectionMock)).toBe('?a=1&b=2&c=asdf');
      });
    });
    describe(`When provided with an empty object as an input`, () => {
      it(`Then it returns an empty string`, () => {
        expect(buildQueryString({})).toBe('');
      });
    });
  });
  
  