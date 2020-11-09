Functions marked async must contain an await or return statement.


Marking a function as `async` without using `await` or returning a value inside it can lead to an unintended promise return and a larger transpiled output.
Often the function can be synchronous and the `async` keyword is there by mistake.
Return statements are allowed as sometimes it is desirable to wrap the returned value in a Promise.

Not configurable.

[object Object]