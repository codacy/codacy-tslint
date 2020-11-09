
Prevents using the built-in Function constructor.
        


Calling the constructor directly is similar to `eval`, which is a symptom of design issues.
String inputs don't receive type checking and can cause performance issues, particularly when dynamically created.

If you need to dynamically create functions, use "factory" functions that themselves return functions.
        

Not configurable.

[object Object],[object Object]