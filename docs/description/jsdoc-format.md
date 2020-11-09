Enforces basic format rules for JSDoc comments.


The following rules are enforced for JSDoc comments (comments starting with `/**`):

* each line contains an asterisk and asterisks must be aligned
* each asterisk must be followed by either a space or a newline (except for the first and the last)
* the only characters before the asterisk on each line must be whitespace characters
* one line comments must start with `/** ` and end with `*/`
* multiline comments don't allow text after `/** ` in the first line (with option `"check-multiline-start"`)
        

Helps maintain a consistent, readable style for JSDoc comments.


You can optionally specify the option `"check-multiline-start"` to enforce the first line of a
multiline JSDoc comment to be empty.
        