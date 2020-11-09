Disallows unused expression statements.


Unused expressions are expression statements which are not assignments or function calls
(and thus usually no-ops).


Detects potential errors where an assignment or function call was intended.


Three arguments may be optionally provided:

* `allow-fast-null-checks` allows to use logical operators to perform fast null checks and perform
method or function calls for side effects (e.g. `e && e.preventDefault()`).
* `allow-new` allows 'new' expressions for side effects (e.g. `new ModifyGlobalState();`.
* `allow-tagged-template` allows tagged templates for side effects (e.g. `this.add\`foo\`;`.