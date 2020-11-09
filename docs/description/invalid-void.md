
Disallows usage of `void` type outside of return type.
If `void` is used as return type, it shouldn't be a part of intersection/union type.


The `void` type means "nothing" or that a function does not return any value,
in contra with implicit `undefined` type which means that a function returns a value `undefined`.
So "nothing" cannot be mixed with any other types.
If you need this - use `undefined` type instead.

Not configurable.