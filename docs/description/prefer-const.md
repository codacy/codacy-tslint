Requires that variable declarations use `const` instead of `let` and `var` if possible.


If a variable is only assigned to once when it is declared, it should be declared using 'const'


An optional object containing the property "destructuring" with two possible values:

* "any" (default) - If any variable in destructuring can be const, this rule warns for those variables.
* "all" - Only warns if all variables in destructuring can be const.