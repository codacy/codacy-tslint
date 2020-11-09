Suggests to convert `() => { return x; }` to `() => x`.


It's unnecessary to include `return` and `{}` brackets in arrow lambdas.
Leaving them out results in simpler and easier to read code.
        


If `multiline` is specified, then this will warn even if the function spans multiple lines.

[object Object],[object Object]