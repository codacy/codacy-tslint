Enforces a consistent file naming convention

Helps maintain a consistent style across a file hierarchy


One of the following arguments must be provided:

* `camel-case`: File names must be camel-cased: `fileName.ts`.
* `pascal-case`: File names must be Pascal-cased: `FileName.ts`.
* `kebab-case`: File names must be kebab-cased: `file-name.ts`.
* `snake-case`: File names must be snake-cased: `file_name.ts`.
* `ignored`: File names are ignored _(useful for the object configuration)_.

Or an object, where the key represents a regular expression that
matches the file name, and the value is the file name rule from
the previous list.

* { ".tsx": "pascal-case", ".ts": "camel-case" }
        