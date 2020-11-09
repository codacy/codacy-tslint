Warns on apparent attempts to define constructors for interfaces or `new` for classes.


Interfaces in TypeScript aren't meant to describe constructors on their implementations.
The `new` descriptor is primarily for describing JavaScript libraries.
If you're trying to describe a function known to be a class, it's typically better to `declare class`.
        

Not configurable.