Disallows unnecessary references to `this`.


Assigning a variable to `this` instead of properly using arrow lambdas may be a symptom of pre-ES6 practices
or not managing scope well.

Instead of storing a reference to `this` and using it inside a `function () {`:

```
const self = this;

setTimeout(function () {
    self.doWork();
});
```

Use `() =>` arrow lambdas, as they preserve `this` scope for you:

```
setTimeout(() => {
    this.doWork();
});
```
        


Two options may be provided on an object:

* `allow-destructuring` allows using destructuring to access members of `this` (e.g. `{ foo, bar } = this;`).
* `allowed-names` may be specified as a list of regular expressions to match allowed variable names.