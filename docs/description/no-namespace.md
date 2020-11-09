Disallows use of internal `module`s and `namespace`s.

This rule still allows the use of `declare module ... {}`


ES6-style external modules are the standard way to modularize code.
Using `module {}` and `namespace {}` are outdated ways to organize TypeScript code.


One argument may be optionally provided:

* `allow-declarations` allows `declare namespace ... {}` to describe external APIs.