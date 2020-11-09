Requires explicit visibility declarations for class members.


Explicit visibility declarations can make code more readable and accessible for those new to TS.

Other languages such as C# default to `private`, unlike TypeScript's default of `public`.
Members lacking a visibility declaration may be an indication of an accidental leak of class internals.
        


These arguments may be optionally provided:

* `"no-public"` forbids public accessibility to be specified, because this is the default.
* `"check-accessor"` enforces explicit visibility on get/set accessors
* `"check-constructor"`  enforces explicit visibility on constructors
* `"check-parameter-property"`  enforces explicit visibility on parameter properties