Requires any function or method that returns a promise to be marked async.


Ensures that each function is only capable of 1) returning a rejected promise, or 2)
throwing an Error object. In contrast, non-`async` `Promise`-returning functions
are technically capable of either. This practice removes a requirement for consuming
code to handle both cases.

If no optional arguments are provided then all function types are checked,
otherwise the specific function types are checked:

* `"check-function-declaration"` check function declarations.
* `"check-function-expression"` check function expressions.
* `"check-arrow-function"` check arrow functions.
* `"check-method-declaration"` check method declarations.
        

Not configurable.