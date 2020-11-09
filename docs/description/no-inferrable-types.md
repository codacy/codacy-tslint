Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.

Explicit types where they can be easily inferred by the compiler make code more verbose.


Two arguments may be optionally provided:

* `ignore-params` allows specifying an inferrable type annotation for function params.
This can be useful when combining with the `typedef` rule.
* `ignore-properties` allows specifying an inferrable type annotation for class properties.