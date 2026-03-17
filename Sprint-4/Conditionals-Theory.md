# Conditionals and Loops
### What are Conditionals?
Conditionals allows your program to make decisions. Conditionals let your code execute
different actions based on whether conditions are true or false.

#### Comparison Operators
Compare two values and return true or false. These are essential for making decisions in your code.

- *Equal To* (== and ===)
*==* Evaluates the content, return true if the content is the same for both values.
```js
 5 == 5 ----> true
 3 == 7 ----> false
 'hello' == 'Hello' ----> false
 5 == '5' ---> true // converts '5' to number or converts the number to string 
 false == 0 ---> true // false converts to 0 (falsy values) false, 0, null, undefined, ""
 true == 1 ---> true // true converts to 1 (truthy values) true, 1, defined, "string"
```

*===* Evaluates or Compares the value AND Data Type
```js
 5 === 5 ----> true
 3 === 7 ----> false
 'hello' === 'Hello' ----> false
 5 === '5' ---> false
 false === 0 ---> false
 true === 1 ---> false
```

#### Not Equal (!= and !==)
- *!=* Evaluates if the variables are different only cares about content.
```js
5 != 3 ---> true
5 != "5" ---> false
true != 1 ---> false
```

- *!==* Content and Data Type (Strict Inequality)
```js
5 !== "5" ---> true // Different Data Types
5 !== 3 ---> true
```

- *>* Greater Than
```js
10 > 5 ---> true
 8 > 12 ---> false
 7 > 7 --->  false (not greater, they are equal)
```

- *>=* Greater than or Equal To
```js
10 >= 5 ---> true
 8 >= 12 ---> false
 7 >= 7 --->  true (They are equal)
```

- *<* Less Than
```js
 7 < 10 ---> true
12 < 8 ---> false
 7 < 7 ---> false
```

- *<=* Less Than or Equal To
```js
 7 <= 10 ---> true
12 <= 8 ---> false
 7 <= 7 ---> true
```

# Conditional Statements
Execute different code blocks based on whether conditions are true or false

## The *if* Statement
Executes code only when a condition is *true*

```js
// Basic Syntax
if (condition to evaluate) {
    // Code
    // will runs only if the condition to evaluate is TRUE
}
```

### The *if...else* statement
Provides an alternative when the condition is false:
```js
// Basic Syntax
if (condition to evaluate) {
    // Code
    // will runs only if the condition to evaluate is TRUE
} else {
    // Code
    // will be executed if the condition it's FALSE
}
```

### The *if...else if... else* statement
Checks multiple conditions in the same sequence.
```js
// Basic Syntax
if (condition-1) {
    // Code
    // will runs only if the condition-1 to evaluate is TRUE
} else if (condition-2) {
    // Code
    // will be executed if condition-1 is FALSE but condition-2 is TRUE
} else if (condition-n) {
    // Code
} else {
    // Code
    // will be executed if the previous conditions ALL OF THEM ARE FALSE
}
```

## The Switch Statement
Efficient for checking one value against multiple possible matches:

```js
switch (expression) {
    case value1:
        //Code runs if expression === value1
        break;
    case value2:
        //Code runs if expression === value2
        break;
    case valueN:
        //Code runs if expression === valueN
        break;
    default:
        //Code runs if no cases match with expression
}

```

## Logical Operators
Logical Operators combine multiple conditions or invert boolean values

### AND Operator (&&)
Returns *true* only if ALL conditions are true;

### OR Operator (||)
Returns *true* if AT LEAST ONE condition is true;

### NOT Operator (!)
Inverts a boolean value (true becomes false, false becomes true);

### Operator Precedence
1. *!* (NOT) --- highest Priority
2. *&&* (AND)
3. *||* (OR) --- lowest Priority