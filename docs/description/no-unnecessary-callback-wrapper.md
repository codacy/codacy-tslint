
Replaces `x => f(x)` with just `f`.
To catch more cases, enable `only-arrow-functions` and `arrow-return-shorthand` too.


There's generally no reason to wrap a function with a callback wrapper if it's directly called anyway.
Doing so creates extra inline lambdas that slow the runtime down.
        

Not configurable.

[object Object]