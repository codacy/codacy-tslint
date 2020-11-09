
Restricts the types allowed in boolean expressions. By default only booleans are allowed.

The following nodes are checked:

* Arguments to the `!`, `&&`, and `||` operators
* The condition in a conditional expression (`cond ? x : y`)
* Conditions for `if`, `for`, `while`, and `do-while` statements.


These options may be provided:

* `allow-null-union` allows union types containing `null`.
  - It does *not* allow `null` itself.
  - Without the '--strictNullChecks' compiler option, this will allow anything other than a string, number, or enum.
* `allow-undefined-union` allows union types containing `undefined`.
  - It does *not* allow `undefined` itself.
  - Without the '--strictNullChecks' compiler option, this will allow anything other than a string, number, or enum.
* `allow-string` allows strings.
  - It does *not* allow unions containing `string`.
  - It does *not* allow string literal types.
* `allow-enum` allows enums.
  - It does *not* allow unions containing `enum`.
* `allow-number` allows numbers.
  - It does *not* allow unions containing `number`.
  - It does *not* allow enums or number literal types.
* `allow-mix` allows multiple of the above to appear together.
  - For example, `string | number` or `RegExp | null | undefined` would normally not be allowed.
  - A type like `"foo" | "bar" | undefined` is always allowed, because it has only one way to be false.
* `allow-boolean-or-undefined` allows `boolean | undefined`.
  - Also allows `true | false | undefined`.
  - Does not allow `false | undefined`.
  - This option is a subset of `allow-undefined-union`, so you don't need to enable both options at the same time.
* `ignore-rhs` ignores the right-hand operand of `&&` and `||`.
        