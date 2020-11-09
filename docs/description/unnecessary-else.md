
Disallows `else` blocks following `if` blocks ending with a `break`, `continue`, `return`, or `throw` statement.




When an `if` block is guaranteed to exit control flow when entered,
it is unnecessary to add an `else` statement.
The contents that would be in the `else` block can be placed after the end of the `if` block.


You can optionally specify the option `"allow-else-if"` to allow "else if" statements.
        

[object Object]