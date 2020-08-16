import { FunctionType } from './mapKeysDeep.model';
/**
* Performs recursive object's key modification
* @param collection {object} collection to be modified
* @param iterator {function} transformation to apply to object's keys
* @returns {object} Object with keys modified by iterator
*/
export declare function mapKeysDeep(collection: Record<string, any>, iterator: FunctionType): Record<string, any>;
