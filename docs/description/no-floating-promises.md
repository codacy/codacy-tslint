Promises returned by functions must be handled appropriately.

Unhandled Promises can cause unexpected behavior, such as resolving at unexpected times.


Creating a Promise and not storing or returning it may let other code run independently of its result.
This can cause unexpected and/or non-deterministic behavior depending on external timing factors.

It's typically better to return Promises from functions that start them, then handle them in calling code.

Use `no-unused-expression` in addition to this rule to reveal even more floating promises.
        


A list of 'string' names of any additional classes that should also be handled as Promises.
        