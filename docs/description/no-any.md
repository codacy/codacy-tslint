Disallows usages of `any` as a type declaration.


Using `any` as a type declaration nullifies the compile-time benefits of the type system.

If you're dealing with data of unknown or "any" types, you shouldn't be accessing members of it.
Either add type annotations for properties that may exist or change the data type to the empty object type `{}`.

Alternately, if you're creating storage or handling for consistent but unknown types, such as in data structures
or serialization, use `<T>` template types for generic type handling.

Also see the `no-unsafe-any` rule.
        


If `"ignore-rest-args": true` is provided rest arguments will be ignored.
        

[object Object],[object Object]