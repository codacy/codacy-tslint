Checks variable names for various errors.


Several arguments may be optionally provided:

* `"check-format"` enbables enforcement of a certain naming format. By default, the rule only allows only lowerCamelCased or UPPER_CASED variable names.
  * These additional options make the check stricter:
    * `"require-const-for-all-caps"`: enforces that all variables with UPPER_CASED names should be `const`.
  * These additional options make the check more permissive:
    * `"allow-leading-underscore"` allows underscores at the beginning (only has an effect if "check-format" specified)
    * `"allow-pascal-case"` allows PascalCase in addition to lowerCamelCase.
    * `"allow-snake-case"` allows snake_case in addition to lowerCamelCase.
    * `"allow-trailing-underscore"` allows underscores at the end. (only has an effect if "check-format" specified)
* `"ban-keywords"`: disallows the use of certain TypeScript keywords as variable or parameter names.
  * These are: `any`, `Number`, `number`, `String`, `string`, `Boolean`, `boolean`, `Undefined`, `undefined`