Requires that private variables are marked as `readonly` if they're never modified outside of the constructor.


If a private variable is only assigned to in the constructor, it should be declared as `readonly`.
        


Marking never-modified variables as readonly helps enforce the code's intent of keeping them as never-modified.
It can also help prevent accidental changes of members not meant to be changed.


If `only-inline-lambdas` is specified, only immediately-declared arrow functions are checked.