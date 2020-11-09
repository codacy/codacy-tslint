Warns when a method is used outside of a method call.


Class functions don't preserve the class scope when passed as standalone variables.
For example, this code will log the global scope (`window`/`global`), not the class instance:

```
class MyClass {
    public log(): void {
        console.log(this);
    }
}

const instance = new MyClass();
const log = instance.log;

log();
```

You need to either use an arrow lambda (`() => {...}`) or call the function with the correct scope.

```
class MyClass {
    public logArrowBound = (): void => {
        console.log(bound);
    };

    public logManualBind(): void {
        console.log(this);
    }
}

const instance = new MyClass();
const logArrowBound = instance.logArrowBound;
const logManualBind = instance.logManualBind.bind(instance);

logArrowBound();
logManualBind();
```
        


You may additionally pass "ignore-static" to ignore static methods, or an options object.

 The object may have the following properties:

* "ignore-static" - to ignore static methods.
* "allow-delete" - ignore methods referenced in a delete expression.
* "allow-typeof" - ignore methods referenced in a typeof expression.
* "whitelist" - ignore method references in parameters of specifed function calls.

