
Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings,
named imports and exports and function parameters.


One argument which is an object with the keys `multiline` and `singleline`.
Both can be set to a string (`"always"` or `"never"`) or an object.

The object can contain any of the following keys: `"arrays"`, `"objects"`, `"functions"`,
`"imports"`, `"exports"`, and `"typeLiterals"`; each key can have one of the following
values: `"always"`, `"never"`, and `"ignore"`. Any missing keys will default to `"ignore"`.

* `"multiline"` checks multi-line object literals.
* `"singleline"` checks single-line object literals.

An array is considered "multiline" if its closing bracket is on a line
after the last array element. The same general logic is followed for
object literals, function typings, named import statements
and function parameters.

To align this rule with the ECMAScript specification that is implemented in modern JavaScript VMs,
there is a third option `esSpecCompliant`. Set this option to `true` to disallow trailing comma on
object and array rest and rest parameters.
        