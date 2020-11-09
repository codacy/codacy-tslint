Warns for Promises that are used for boolean conditions.


For the most accurate findings, set `"strict": true` in your `tsconfig.json`.

It's recommended to enable the following rules as well:
* [`strict-boolean-expressions`](https://palantir.github.io/tslint/rules/strict-boolean-expressions/)
* [`strict-type-predicates`](https://palantir.github.io/tslint/rules/strict-type-predicates/)
* [`no-floating-promises`](https://palantir.github.io/tslint/rules/no-floating-promises/)
        


There are no situations where one would like to check whether a variable's value is truthy if its type
only is Promise.
This may only occur when the typings are incorrect or the variable has a union type
(like Promise | undefined), of which the latter is allowed.

This rule prevents common bugs from forgetting to 'await' a Promise.
        


A list of 'string' names of any additional classes that should also be treated as Promises.
For example, if you are using a class called 'Future' that implements the Thenable interface,
you might tell the rule to consider type references with the name 'Future' as valid Promise-like
types. Note that this rule doesn't check for type assignability or compatibility; it just checks
type reference names.
        

[object Object],[object Object]