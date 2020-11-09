Requires lines to be under a certain max length.


Limiting the length of a line of code improves code readability.
It also makes comparing code side-by-side easier and improves compatibility with
various editors, IDEs, and diff viewers.


It can take one argument, which can be any of the following:
* integer indicating maximum length of lines.
* object with keys:
  * `limit` - number greater than 0 defining the max line length
  * `ignore-pattern` - string defining ignore pattern for this rule, being parsed by `new RegExp()`.
    For example:
     * `// ` pattern will ignore all in-line comments.
     * `^import ` pattern will ignore all import statements.
     * `^export {(.*?)}` pattern will ignore all multiple export statements.
     * `class [a-zA-Z]+ implements ` pattern will ignore all class declarations implementing interfaces.
     * `^import |^export {(.*?)}|class [a-zA-Z]+ implements |// ` pattern will ignore all the cases listed above.
  * `check-strings` - determines if strings should be checked, `false` by default.
  * `check-regex` - determines if regular expressions should be checked, `false` by default.
 