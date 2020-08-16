# Sentence case

## Import
```ts
import { sentenceCase } from '@adso-ts/sentence-case';
```

## How to use
When given one of:
- 'myString'
- 'MyString'
- 'my_string'
- 'MY STRING'
- 'my string'
- 'My string'
- 'My String'

as an input

```ts
const sentenceCased = sentenceCase(string);  // result: My string
```
