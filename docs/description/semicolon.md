Enforces consistent semicolon usage at the end of every statement.


One of the following arguments must be provided:

* `"always"` enforces semicolons at the end of every statement.
* `"never"` disallows semicolons at the end of every statement except for when they are necessary.

The following arguments may be optionally provided:

* `"ignore-interfaces"` skips checking semicolons at the end of interface members.
* `"ignore-bound-class-methods"` skips checking semicolons at the end of bound class methods.
* `"strict-bound-class-methods"` disables any special handling of bound class methods and treats them as any
other assignment. This option overrides `"ignore-bound-class-methods"`.
        