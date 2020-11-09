Disallow specific global variables.


Disallowing usage of specific global variables can be useful if you want to allow
a set of global variables by enabling an environment, but still want to disallow
some of those.
        


```ts
function broken(evt: Event) {
    // Meant to do something with `evt` but typed it incorrectly.
    Event.target;  // compiler error
    event.target;  // should be a lint failure
}

Early Internet Explorer versions exposed the current DOM event as a global variable 'event',
but using this variable has been considered a bad practice for a long time.
Restricting this will make sure this variable isn’t used in browser code.
```
        


This rule takes a list of strings, where each string is a global to be restricted.
`event`, `name` and `length` are restricted by default.
        