
Warns when using an expression of type 'any' in a dynamic way.
Uses are only allowed if they would work for `{} | null | undefined`.
Downcasting to unknown is always safe.
Type casts and tests are allowed.
Expressions that work on all values (such as `"" + x`) are allowed.


If you're dealing with data of unknown or "any" types, you shouldn't be accessing members of it.
Either add type annotations for properties that may exist or change the data type to the empty object type `{}`.

Alternately, if you're creating storage or handling for consistent but unknown types, such as in data structures
or serialization, use `<T>` template types for generic type handling.

Also see the `no-any` rule.
        

Not configurable.