Disable implicit toString() calls


Require explicit toString() call for variables used in strings. By default only strings are allowed.

The following nodes are checked:

* String literals ("foo" + bar)
* ES6 templates (`foo ${bar}`)


Following arguments may be optionally provided:
* `allow-empty-types` allows `null`, `undefined` and `never` to be passed into strings without explicit conversion