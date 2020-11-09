Disallow type inference of {} (empty object type) at function and constructor call sites


Prior to TypeScript 3.4, generic type parameters for functions and constructors are inferred as
`{}` (the empty object type) by default when no type parameter is explicitly supplied or when
the compiler cannot infer a more specific type.
This is often undesirable as the call is meant to be of a more specific type.
        

Not configurable.