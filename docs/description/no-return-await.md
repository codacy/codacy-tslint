Disallows unnecessary `return await`.


An async function always wraps the return value in a Promise.
Using `return await` just adds extra time before the overreaching promise is resolved without changing the semantics.
        

Not configurable.