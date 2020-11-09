Enforces quote character for string literals.


Five arguments may be optionally provided:

* `"single"` enforces single quotes.
* `"double"` enforces double quotes.
* `"backtick"` enforces backticks.
* `"jsx-single"` enforces single quotes for JSX attributes.
* `"jsx-double"` enforces double quotes for JSX attributes.
* `"avoid-template"` forbids single-line untagged template strings that do not contain string interpolations.
    Note that backticks may still be used if `"avoid-escape"` is enabled and both single and double quotes are
    present in the string (the latter option takes precedence).
* `"avoid-escape"` allows you to use the "other" quotemark in cases where escaping would normally be required.
    For example, `[true, "double", "avoid-escape"]` would not report a failure on the string literal
    `'Hello "World"'`.