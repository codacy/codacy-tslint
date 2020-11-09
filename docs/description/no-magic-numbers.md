
Disallows the use constant number values outside of variable assignments.
When no list of allowed values is specified, -1, 0 and 1 are allowed by default.


Magic numbers should be avoided as they often lack documentation.
Forcing them to be stored in variables gives them implicit documentation.
        


Options may either be a list of numbers to ignore (not consider 'magic'), or an object containing up to two properties:
* `allowed-numbers` as the list of numbers to ignore.
* `ignore-jsx` to specify that 'magic' numbers should be allowed as JSX attributes.