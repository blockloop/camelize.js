# camelize.js

Camelize things.

## Example

```javascript
const camelize = require("camelize.js");

const obj = {
    Name: "Brett"
}

const fixed = camelize(obj);

console.log(fixed);

// {
//    name: "Brett"
// }
```
