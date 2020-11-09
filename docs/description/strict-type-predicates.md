
Warns for type predicates that are always true or always false.
Works for 'typeof' comparisons to constants (e.g. 'typeof foo === "string"'), and equality comparison to 'null'/'undefined'.
(TypeScript won't let you compare '1 === 2', but it has an exception for '1 === undefined'.)
Does not yet work for 'instanceof'.
Does *not* warn for 'if (x.y)' where 'x.y' is always truthy. For that, see strict-boolean-expressions.

This rule requires `strictNullChecks` to work properly.

Not configurable.