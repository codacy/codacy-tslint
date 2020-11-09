Disallows duplicate variable declarations in the same block scope.


This rule is only useful when using the `var` keyword -
the compiler will detect redeclarations of `let` and `const` variables.


A variable can be reassigned if necessary -
there's no good reason to have a duplicate variable declaration.

You can specify `"check-parameters"` to check for variables with the same name as a parameter.