
Forbids an object literal to appear in a type assertion expression.
Casting to `any` or to `unknown` is still allowed.


Always prefer `const x: T = { ... };` to `const x = { ... } as T;`.
The type assertion in the latter case is either unnecessary or hides an error.
The compiler will warn for excess properties with this syntax, but not missing required fields.
For example: `const x: { foo: number } = {}` will fail to compile, but
`const x = {} as { foo: number }` will succeed.
Additionally, the const assertion `const x = { foo: 1 } as const`,
introduced in TypeScript 3.4, is considered beneficial and is ignored by this rule.


One option may be configured:

* `allow-arguments` allows type assertions to be used on object literals inside call expressions.

[object Object],[object Object]