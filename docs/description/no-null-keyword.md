Disallows use of the `null` keyword literal.


Instead of having the dual concepts of `null` and`undefined` in a codebase,
this rule ensures that only `undefined` is used.

JavaScript originally intended `undefined` to refer to a value that doesn't yet exist,
while `null` was meant to refer to a value that does exist but points to nothing.
That's confusing.
`undefined` is the default value when object members don't exist, and is the return value
for newer native collection APIs such as `Map.get` when collection values don't exist.

```
const myObject = {};
myObject.doesNotExist; // undefined
```

```
const myMap = new Map<string, number>();
myMap.get("doesNotExist"); // undefined
```

To remove confusion over the two similar values, it's better to stick with just `undefined`.
        

Not configurable.