
Disallows importing any submodule.


Submodules of some packages are treated as private APIs and the import
paths may change without deprecation periods. It's best to stick with
top-level package exports.

A list of whitelisted package or submodule names.