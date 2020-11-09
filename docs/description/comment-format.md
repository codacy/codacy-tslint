Enforces formatting rules for single-line comments.

Helps maintain a consistent, readable style in your codebase.


Four arguments may be optionally provided:

* `"check-space"` requires that all single-line comments must begin with a space, as in `// comment`
    * note that for comments starting with multiple slashes, e.g. `///`, leading slashes are ignored
    * TypeScript reference comments are ignored completely
* `"check-lowercase"` requires that the first non-whitespace character of a comment must be lowercase, if applicable.
* `"check-uppercase"` requires that the first non-whitespace character of a comment must be uppercase, if applicable.
* `"allow-trailing-lowercase"` allows that only the first comment of a series of comments needs to be uppercase.
    * requires `"check-uppercase"`
    * comments must start at the same position

Exceptions to `"check-lowercase"` or `"check-uppercase"` can be managed with object that may be passed as last
argument.

One of two options can be provided in this object:

* `"ignore-words"`  - array of strings - words that will be ignored at the beginning of the comment.
* `"ignore-pattern"` - string - RegExp pattern that will be ignored at the beginning of the comment.