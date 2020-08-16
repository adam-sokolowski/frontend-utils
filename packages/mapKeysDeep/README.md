# Map keys deep

## Import
```ts
import { mapKeysDeep } from '@adso-ts/map-keys-deep';
```

## How to use
```ts
const originalObject = {
  prop_a: 'value',
  prop_b: {
    prop_c: 'value'
  }
}

const iteratorFn = (key : string) => key.toUpperCase();
// flat objects
const transformedObject = mapKeysDeep(originalObject, iteratorFn);
// nested objects
const transformedObject = mapKeysDeep(originalObject, (_value: any, key: any) => iteratorFn(key));
```
