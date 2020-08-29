# Get query params
Parses an url and transforms query params string into object.

## Import
```ts
import { getQueryParams } from '@adso-ts/get-query-params';
```

## How to use
```ts
const url = 'https://terms-and-conditions?uuid=2980d03e-4a87-48d3-a161-e3d19caa3be2&language=en&from=default&uuids=["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]';

const paramsObject = getQueryParams(url);  
{
    uuid: "2980d03e-4a87-48d3-a161-e3d19caa3be2",
    language: 'en',
    from: 'default',
    uuids: '["a82fc9e6-0df3", "431b-92ff-050f6fa53b07"]',
}
```