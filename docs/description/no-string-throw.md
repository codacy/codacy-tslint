Flags throwing plain strings or concatenations of strings.


Example – Doing it right

```ts
// throwing an Error from typical function, whether sync or async
if (!productToAdd) {
    throw new Error("How can I add new product when no value provided?");
}
```

Example – Anti Pattern

```ts
// throwing a string lacks any stack trace information and other important data properties
if (!productToAdd) {
    throw ("How can I add new product when no value provided?");
}
```

Only Error objects contain a `.stack` member equivalent to the current stack trace.
Primitives such as strings do not.
        

Not configurable.

[object Object]