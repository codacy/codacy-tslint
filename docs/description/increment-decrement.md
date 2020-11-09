Enforces using explicit += 1 or -= 1 operators.


It's easy to type +i or -i instead of --i or ++i, and won't always result in invalid code.
Prefer standardizing small arithmetic operations with the explicit += and -= operators.
        


If no arguments are provided, both pre- and post-unary operators are banned.
If `"allow-post"` is provided, post-unary operators will be allowed.
        