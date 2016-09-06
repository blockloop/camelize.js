# camelize.js

Camelize things.

## Example

```javascript
const camelize = require("camelize.js");

camelize({
    Name: "Brett",
    Children: [{
        Name: "Something",
        Age: 1
    }]
})
/*
{
    name: "Brett"
    children: [{
        name: "Something",
        age: 1
    }]
}
*/

camelize("HelloWorld") // helloWorld
camelize("SSN") // ssn

// handle weird calls
camelize(1) // 1
camelize(null) // null
camelize(undefined) // undefined

```
