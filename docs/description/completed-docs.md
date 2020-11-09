Enforces JSDoc comments for important items be filled out.


Helps ensure important components are documented.

Note: use this rule sparingly. It's better to have self-documenting names on components with single, concise responsibilities.
Comments that only restate the names of variables add nothing to code, and can easily become outdated.
        


`true` to enable for `[classes, functions, methods, properties]`,
or an array with each item in one of two formats:

* `string` to enable for that type
* `object` keying types to when their documentation is required:
    * `"methods"` and `"properties"` may specify:
        * `"privacies"`:
            * `"all"`
            * `"private"`
            * `"protected"`
            * `"public"`
        * `"locations"`:
            * `"all"`
            * `"instance"`
            * `"static"`
    * Other types may specify `"visibilities"`:
        * `"all"`
        * `"exported"`
        * `"internal"`
    * `"functions"` `"methods"` may also specify `"overloads"`
      to indicate that each overload should have its own documentation, which is `false` by default.
    * All types may also provide `"tags"`
      with members specifying tags that allow the docs to not have a body.
        * `"content"`: Object mapping tags to `RegExp` bodies content allowed to count as complete docs.
        * `"existence"`: Array of tags that must only exist to count as complete docs.

Types that may be enabled are:

* `"classes"`
* `"enums"`
* `"enum-members"`
* `"functions"`
* `"interfaces"`
* `"methods"`
* `"namespaces"`
* `"properties"`
* `"types"`
* `"variables"`