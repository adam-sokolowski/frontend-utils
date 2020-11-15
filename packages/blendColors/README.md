# Sentence case
Transforms a string

- 'myString'
- 'MyString'
- 'my_string'
- 'MY STRING'
- 'my string'
- 'My string'
- 'My String'

Into a Sentence case (capitalise first letter)

## Import
```ts
import { sentenceCase } from '@adso-ts/sentence-case';
```

## How to use
```ts
const sentenceCased = sentenceCase(string);  // result: My string
```
