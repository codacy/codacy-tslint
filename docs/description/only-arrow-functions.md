Disallows traditional (non-arrow) function expressions.


Note that non-arrow functions are allowed if 'this' appears somewhere in its body
(as such functions cannot be converted to arrow functions).
        

Traditional functions don't bind lexical scope, which can lead to unexpected behavior when accessing 'this'.


Two arguments may be optionally provided:

* `"allow-declarations"` allows standalone function declarations.
* `"allow-named-functions"` allows the expression `function foo() {}` but not `function() {}`.
        

[object Object]