Disallows usage of variables before their declaration.


This rule is primarily useful when using the `var` keyword since the compiler will
automatically detect if a block-scoped `let` and `const` variable is used before
declaration. Since most modern TypeScript doesn't use `var`, this rule is generally
discouraged and is kept around for legacy purposes. It is slow to compute, is not
enabled in the built-in configuration presets, and should not be used to inform TSLint
design decisions.
        

Not configurable.

[object Object]