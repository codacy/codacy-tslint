Requires or disallows whitespace for type definitions.

Determines if a space is required or not before the colon in a type specifier.


Two arguments which are both objects.
The first argument specifies how much space should be to the _left_ of a typedef colon.
The second argument specifies how much space should be to the _right_ of a typedef colon.
Each key should have a value of `"onespace"`, `"space"` or `"nospace"`.
Possible keys are:

* `"call-signature"` checks return type of functions.
* `"index-signature"` checks index type specifier of indexers.
* `"parameter"` checks function parameters.
* `"property-declaration"` checks object property declarations.
* `"variable-declaration"` checks variable declaration.