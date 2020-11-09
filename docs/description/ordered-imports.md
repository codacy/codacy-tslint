Requires that import statements be alphabetized and grouped.


Enforce a consistent ordering for ES6 imports:
- Named imports must be alphabetized (i.e. "import {A, B, C} from "foo";")
    - The exact ordering can be controlled by the named-imports-order option.
    - "longName as name" imports are ordered by "longName".
- Import sources must be alphabetized within groups, i.e.:
        import * as foo from "a";
        import * as bar from "b";
- Groups of imports are delineated by blank lines. You can use this rule to group
    imports however you like, e.g. by first- vs. third-party or thematically or
    you can define groups based upon patterns in import path names.


You may set the `"import-sources-order"` option to control the ordering of source
imports (the `"foo"` in `import {A, B, C} from "foo"`).

Possible values for `"import-sources-order"` are:

* `"case-insensitive'`: Correct order is `"Bar"`, `"baz"`, `"Foo"`. (This is the default.)
* `"lowercase-first"`: Correct order is `"baz"`, `"Bar"`, `"Foo"`.
* `"lowercase-last"`: Correct order is `"Bar"`, `"Foo"`, `"baz"`.
* `"any"`: Allow any order.

You may set the `"grouped-imports"` option to control the grouping of source
imports (the `"foo"` in `import {A, B, C} from "foo"`).  The grouping used
is controlled by the `"groups"` option.

Possible values for `"grouped-imports"` are:

* `false`: Do not enforce grouping. (This is the default.)
* `true`: Group source imports using default grouping or groups setting.

The value of `"groups"` is a list of group rules of the form:

    [{
        "name": "optional rule name",
        "match": "regex string",
        "order": 10
    }, {
        "name": "pkga imports",
        "match": "^@pkga",
        "order": 20
    }]

there is also a simplified form where you only pass a list of patterns and
the order is given by the position in the list

    ["^@pkga", "^\.\."]

The first rule in the list to match a given import is the group that is used.
If no rule in matched then the import will be put in an `unmatched` group
at the end of all groups. The groups must be ordered based upon the sequential
value of the `order` value. (ie. order 0 is first)

If no `"groups"` options is set, a default grouping is used of third-party,
parent directories and the current directory. (`"bar"`, `"../baz"`, `"./foo"`.)

You may set the `"named-imports-order"` option to control the ordering of named
imports (the `{A, B, C}` in `import {A, B, C} from "foo"`).

Possible values for `"named-imports-order"` are:

* `"case-insensitive'`: Correct order is `{A, b, C}`. (This is the default.)
* `"lowercase-first"`: Correct order is `{b, A, C}`.
* `"lowercase-last"`: Correct order is `{A, C, b}`.
* `"any"`: Allow any order.

You may set the `"module-source-path"` option to control the ordering of imports based full path
or just the module name

Possible values for `"module-source-path"` are:

* `"full'`: Correct order is  `"./a/Foo"`, `"./b/baz"`, `"./c/Bar"`. (This is the default.)
* `"basename"`: Correct order is `"./c/Bar"`, `"./b/baz"`, `"./a/Foo"`.

        