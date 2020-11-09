Disallows the comma operator to be used.

[Read more about the comma operator here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator).


Using the comma operator can create a potential for many non-obvious bugs or lead to misunderstanding of code.

### Examples
```
foo((bar, baz)); // evaluates to 'foo(baz)' because of the extra parens - confusing and not obvious
```

```
switch (foo) {
    case 1, 2: // equals 'case 2' - probably intended 'case 1: case2:'
        return true;
    case 3:
        return false;
}
```

```
let x = (y = 1, z = 2); // x is equal to 2 - this may not be immediately obvious.
```
        

