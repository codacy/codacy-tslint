Disallows any type of assignment in conditionals.

This applies to `do-while`, `for`, `if`, and `while` statements and conditional (ternary) expressions.


Assignments in conditionals are often typos:
for example `if (var1 = var2)` instead of `if (var1 == var2)`.
They also can be an indicator of overly clever code which decreases maintainability.

Not configurable.