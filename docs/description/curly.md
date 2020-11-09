Enforces braces for `if`/`for`/`do`/`while` statements.


```ts
if (foo === bar)
    foo++;
    bar++;
```

In the code above, the author almost certainly meant for both `foo++` and `bar++`
to be executed only if `foo === bar`. However, they forgot braces and `bar++` will be executed
no matter what. This rule could prevent such a mistake.


One of the following options may be provided:

* `"as-needed"` forbids any unnecessary curly braces.
* `"ignore-same-line"` skips checking braces for control-flow statements
that are on one line and start on the same line as their control-flow keyword
        

[object Object],[object Object],[object Object]