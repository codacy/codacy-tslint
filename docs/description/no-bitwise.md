Disallows bitwise operators.


Specifically, the following bitwise operators are banned:
`&`, `&=`, `|`, `|=`,
`^`, `^=`, `<<`, `<<=`,
`>>`, `>>=`, `>>>`, `>>>=`, and `~`.
This rule does not ban the use of `&` and `|` for intersection and union types.


Bitwise operators are often typos - for example `bool1 & bool2` instead of `bool1 && bool2`.
They also can be an indicator of overly clever code which decreases maintainability.

Not configurable.