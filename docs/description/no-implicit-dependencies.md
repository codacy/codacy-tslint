Disallows importing modules that are not listed as dependency in the project's package.json


Disallows importing transient dependencies and modules installed above your package's root directory.
        


By default the rule looks at `"dependencies"` and `"peerDependencies"`.
By adding the `"dev"` option the rule also looks at `"devDependencies"`.
By adding the `"optional"` option the rule also looks at `"optionalDependencies"`.
An array of whitelisted modules can be added to skip checking their existence in package.json.
        