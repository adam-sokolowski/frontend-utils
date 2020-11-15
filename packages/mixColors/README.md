# Color mixing function
Javascript clone of sass `mix` function.

## Import
```ts
import { mixColors, isColorValid, normalizeColor } from '@adso-ts/mix-colors';
```

## How to use
```ts
const baseColor = '#000000';  // alternative format: '000000', '000'
const color = '#0099cb';      // alternative format: '0099cb'
const percentage = 20         // valid formats: '20%', 20.0, '20,0'

const shade = mixColors(baseColor, color, percentage); 
```

sass equivalent 

```scss
$shade = mix('#000000', '#0099cb', 20);
```

Other available functions
# isColorValid
```ts
const color1 = '#000000';  // isColorValid = true
const color2 = 'fff000';   // isColorValid = true
const color3 = '060';      // isColorValid = true
const color3 = '#ff0';     // isColorValid = true
const color4 = 'ff'        // isColorValid = false
```

# normalizeColor
```ts
const color1 = '#000000';  // normalizeColor = 000000
const color2 = 'fff000';   // normalizeColor = fff000
const color3 = '060';      // normalizeColor = 006600
const color3 = '#ff0';     // normalizeColor = ffff00
const color4 = 'ff'        // normalizeColor = ff
```
