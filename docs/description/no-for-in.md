Ban the usage of for...in statements.

for...in statements are legacy JavaScript syntax which usually require a verbose `hasOwnProperty` check inside their loop body. These statements can be fully replaced with for...of statements in modern JS & TS.

Not configurable.