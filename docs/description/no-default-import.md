Disallows importing default members from certain ES6-style modules.

Import named members instead.


Named imports/exports [promote clarity](https://github.com/palantir/tslint/issues/1182#issue-151780453).
In addition, current tooling differs on the correct way to handle default imports/exports.
Avoiding them all together can help avoid tooling bugs and conflicts.

The rule supposed to narrow the scope of your changes in the case of monorepo.
Say, you have packages `A`, `B`, `C` and `utils`, where `A`, `B`, `C` dependends on `utils`,
which is full of default exports.
`"no-default-export"` requires you to remove default _export_ from `utils`, which leads to changes
in packages `A`, `B`, `C`. It's harder to get merged bigger changeset by various reasons (harder to get your code approved
due to a number of required reviewers; longer build time due to a number of affected packages)
and could result in ignored `"no-default-export"` rule in `utils'`.

Unlike `"no-default-export"`, the rule requires you to replace default _import_ with named only in `A` you work on,
and `utils` you import from.

optionsDescription