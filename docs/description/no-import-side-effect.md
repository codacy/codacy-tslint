Avoid import statements with side-effect.

Imports with side effects may have behavior which is hard for static verification.


One argument may be optionally provided:

* `ignore-module` allows to specify a regex and ignore modules which it matches.