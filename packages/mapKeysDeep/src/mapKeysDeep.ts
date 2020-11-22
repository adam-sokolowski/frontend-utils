import { FunctionType } from './mapKeysDeep.model';

import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import map from 'lodash/map';
import mapKeys from 'lodash/mapKeys';
import mapValues  from 'lodash/mapValues';

/**
* Performs recursive object's key modification
* @param collection {object} collection to be modified
* @param iterator {function} transformation to apply to object's keys
* @returns {object} Object with keys modified by iterator
*/
export function mapKeysDeep(collection: Record<string, any>, iterator: FunctionType): Record<string, any> {
  if (isArray(collection)) {
    return map(collection, (item: any) => mapKeysDeep(item, iterator));
  }

  if (!isPlainObject(collection)) {
    return collection;
  }

  const result = mapKeys(collection, iterator);
  return mapValues(result, (value: any) => mapKeysDeep(value, iterator));
}
