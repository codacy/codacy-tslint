
Disallows control flow statements, such as `return`, `continue`,
`break` and `throws` in finally blocks.




When used inside `finally` blocks, control flow statements,
such as `return`, `continue`, `break` and `throws`
override any other control flow statements in the same try/catch scope.
This is confusing and unexpected behavior.

Not configurable.