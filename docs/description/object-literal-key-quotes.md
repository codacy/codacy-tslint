Enforces consistent object literal property quote style.


Object literal property names can be defined in two ways: using literals or using strings.
For example, these two objects are equivalent:

var object1 = {
    property: true
};

var object2 = {
    "property": true
};

In many cases, it doesn’t matter if you choose to use an identifier instead of a string
or vice-versa. Even so, you might decide to enforce a consistent style in your code.

This rules lets you enforce consistent quoting of property names. Either they should always
be quoted (default behavior) or quoted only as needed ("as-needed").


Possible settings are:

* `"always"`: Property names should always be quoted. (This is the default.)
* `"as-needed"`: Only property names which require quotes may be quoted (e.g. those with spaces in them).
* `"consistent"`: Property names should either all be quoted or unquoted.
* `"consistent-as-needed"`: If any property name requires quotes, then all properties must be quoted. Otherwise, no
property names may be quoted.

For ES6, computed property names (`{[name]: value}`) and methods (`{foo() {}}`) never need
to be quoted.