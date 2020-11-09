Prevents unnecessary and/or misleading scope bindings on functions.


`function` expressions that are immediately bound to `this` are equivalent to `() =>` arrow lambdas.
Additionally, there's no use in binding a scope to an arrow lambda, as it already has one.
        

Not configurable.