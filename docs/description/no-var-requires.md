Disallows the use of require statements except in import statements.


In other words, the use of forms such as `var module = require("module")` are banned.
Instead use ES2015-style imports or `import foo = require('foo')` imports.


AMD-style `require([])` and CommonJS-style `require("")` statements are environment-specific
and more difficult to statically analyze.

ES2015-style `import`s are part of the JavaScript language specfication and recommended as the path going forward.
TypeScript will compile them to environment-specific forms as needed.
        

Not configurable.