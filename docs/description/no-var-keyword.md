Disallows usage of the `var` keyword.

Use `let` or `const` instead.


Declaring variables using `var` has several edge case behaviors that make `var` unsuitable for modern code.
Variables declared by `var` have their parent function block as their scope, ignoring other control flow statements.
`var`s have declaration "hoisting" (similar to `function`s) and can appear to be used before declaration.

Variables declared by `const` and `let` instead have as their scope the block in which they are defined,
and are not allowed to used before declaration or be re-declared with another `const` or `let`.
        

Not configurable.