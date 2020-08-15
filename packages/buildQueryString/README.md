# Build query string

## Import
```ts
import { buildQueryString } from '@adso-ts/build-query-string';
```

## How to use
```ts
const obj = {
    from: 1,
    to: 2,
    user: 'test-user',
}

const queryString = buildQueryString(obj);  // result ?from=1&to=2&user=test-user
```