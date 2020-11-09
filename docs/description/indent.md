Enforces indentation with tabs or spaces.


Using only one of tabs or spaces for indentation leads to more consistent editor behavior,
cleaner diffs in version control, and easier programmatic manipulation.


One of the following arguments must be provided:

* `spaces` enforces consistent spaces.
* `tabs` enforces consistent tabs.

A second optional argument specifies indentation size:

* `2` enforces 2 space indentation.
* `4` enforces 4 space indentation.

Indentation size is **required** for auto-fixing, but not for rule checking.

**NOTE**: auto-fixing will only convert invalid indent whitespace to the desired type, it will not fix invalid whitespace sizes.
