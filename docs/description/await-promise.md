Warns for an awaited value that is not a Promise.


While it is valid JavaScript to await a non-Promise-like value (it will resolve immediately),
this pattern is often a programmer error and the resulting semantics can be unintuitive.

Awaiting non-Promise-like values often is an indication of programmer error, such as
forgetting to add parenthesis to call a function that returns a Promise.
        


A list of 'string' names of any additional classes that should also be treated as Promises.
For example, if you are using a class called 'Future' that implements the Thenable interface,
you might tell the rule to consider type references with the name 'Future' as valid Promise-like
types. Note that this rule doesn't check for type assignability or compatibility; it just checks
type reference names.
        