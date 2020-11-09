Disallows non-null assertions using the `!` postfix operator.


Using non-null assertion cancels the benefits of the strict null checking mode.

Instead of assuming objects exist:

```
function foo(instance: MyClass | undefined) {
    instance!.doWork();
}
```

Either inform the strict type system that the object must exist:

```
function foo(instance: MyClass) {
    instance.doWork();
}
```

Or verify that the instance exists, which will inform the type checker:

```
function foo(instance: MyClass | undefined) {
    if (instance !== undefined) {
        instance.doWork();
    }
}
```
        

Not configurable.