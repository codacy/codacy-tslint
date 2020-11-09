
Forbids unnecessary string literal property access.
Allows `obj["prop-erty"]` (can't be a regular property access).
Disallows `obj["property"]` (should be `obj.property`).


If `--noImplicitAny` is turned off,
property access via a string literal will be 'any' if the property does not exist.

Not configurable.