
Checks ordering of keys in object literals.

When using the default alphabetical ordering, additional blank lines may be used to group
object properties together while keeping the elements within each group in alphabetical order.
To opt out of this use ignore-blank-lines option.
        

Useful in preventing merge conflicts


By default, this rule checks that keys are in alphabetical order.
The following may optionally be passed:

* `ignore-blank-lines` will enforce alphabetical ordering regardless of blank lines between each key-value pair.
* `ignore-case` will compare keys in a case insensitive way.
* `locale-compare` will compare keys using the expected sort order of special characters, such as accents.
* `match-declaration-order` will prefer to use the key ordering of the contextual type of the object literal, as in:

    ```
    interface I { foo: number; bar: number; }
    const obj: I = { foo: 1, bar: 2 };
    ```

If a contextual type is not found, alphabetical ordering will be used instead.
* "match-declaration-order-only" exactly like "match-declaration-order",
    but don't fall back to alphabetical if a contextual type is not found.

    Note: If both match-declaration-order-only and match-declaration-order options are present,
          match-declaration-order-only will take precedence and alphabetical fallback will not occur.

* `shorthand-first` will enforce shorthand properties to appear first, as in:

    ```
    const obj = { a, c, b: true };
    ```


[object Object],[object Object]