# camelize.js

Camelize things.

## Example

    const camelize = require("camelize.js");

    const obj = {
        Name: "Brett"
    }

    const fixed = camelize.camelizeObj(obj);

    console.log(fixed);

    // {
    //    name: "Brett"
    // }
