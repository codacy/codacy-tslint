Requires a `for ... in` statement to be filtered with an `if` statement.


```ts
for (let key in someObject) {
    if (someObject.hasOwnProperty(key)) {
        // code here
    }
}
```
Prevents accidental iteration over properties inherited from an object's prototype.
See [MDN's `for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
documentation for more information about `for...in` loops.

Also consider using a [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
or [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
if you're storing collections of objects.
Using `Object`s can cause occasional edge case bugs, such as if a key is named "hasOwnProperty".
        

Not configurable.