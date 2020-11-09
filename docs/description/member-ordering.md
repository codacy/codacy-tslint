Enforces member ordering.


A consistent ordering for class members can make classes easier to read, navigate, and edit.

A common opposite practice to `member-ordering` is to keep related groups of classes together.
Instead of creating classes with multiple separate groups, consider splitting class responsibilities
apart across multiple single-responsibility classes.
        


One argument, which is an object, must be provided. It should contain an `order` property.
The `order` property should have a value of one of the following strings:

* `fields-first`
* `instance-sandwich`
* `statics-first`

`fields-first` puts, in order of precedence:

    * fields before constructors before methods
    * static members before instance members
    * public members before protected members before private members

`instance-sandwich` puts, in order of precedence:

    * fields before constructors before methods
    * static fields before instance fields, but static methods *after* instance methods
    * public members before protected members before private members

`statics-first` puts, in order of precedence:

    * static members before instance members
        * public members before protected members before private members
        * fields before methods
    * instance fields before constructors before instance methods
        * fields before constructors before methods
        * public members before protected members before private members

Note that these presets, despite looking similar, can have subtly different behavior due to the order in which these
rules are specified. A fully expanded ordering can be found in the PRESETS constant in
https://github.com/palantir/tslint/blob/master/src/rules/memberOrderingRule.ts.
(You may need to check the version of the file corresponding to your version of tslint.)

Alternatively, the value for `order` may be an array consisting of the following strings:

* `public-static-field`
* `public-static-method`
* `protected-static-field`
* `protected-static-method`
* `private-static-field`
* `private-static-method`
* `public-instance-field`
* `protected-instance-field`
* `private-instance-field`
* `public-constructor`
* `protected-constructor`
* `private-constructor`
* `public-instance-method`
* `protected-instance-method`
* `private-instance-method`

You can also omit the access modifier to refer to "public-", "protected-", and "private-" all at once; for example, "static-field".

You can also make your own categories by using an object instead of a string:

    {
        "name": "static non-private",
        "kinds": [
            "public-static-field",
            "protected-static-field",
            "public-static-method",
            "protected-static-method"
        ]
    }

The 'alphabetize' option will enforce that members within the same category should be alphabetically sorted by name.