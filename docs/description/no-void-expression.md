Requires expressions of type `void` to appear in statement position.


It's misleading returning the results of an expression whose type is `void`.
Attempting to do so is likely a symptom of expecting a different return type from a function.
For example, the following code will log `undefined` but looks like it logs a value:

```
const performWork = (): void => {
    workFirst();
    workSecond();
};

console.log(performWork());
```
        


If `ignore-arrow-function-shorthand` is provided, `() => returnsVoid()` will be allowed.
Otherwise, it must be written as `() => { returnsVoid(); }`.