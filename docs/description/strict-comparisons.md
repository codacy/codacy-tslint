Only allow comparisons between primitives.


When using comparison operators to compare objects, they compare references and not values.
This is often done accidentally.
With this rule, `>`, `>=`, `<`, `<=` operators are only allowed when comparing `numbers`.
`===`, `!==` are allowed for `number` `string` and `boolean` types and if one of the
operands is `null` or `undefined`.
            


One of the following arguments may be optionally provided:
* `allow-object-equal-comparison` allows `!=` `==` `!==` `===` comparison between any types.
* `allow-string-order-comparison` allows `>` `<` `>=` `<=` comparison between strings.

[object Object],[object Object],[object Object]