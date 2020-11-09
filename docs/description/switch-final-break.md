Checks whether the final clause of a switch statement ends in `break;`.


If no options are passed, a final 'break;' is forbidden.
If the "always" option is passed this will require a 'break;' to always be present
unless control flow is escaped in some other way.