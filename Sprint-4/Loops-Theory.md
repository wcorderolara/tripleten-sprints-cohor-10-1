# Loops and Iterations: While and For

## The While Loop
Repeats code *while* a condition is true. It checks the condition *before* each iteration. *While* evaluates the condition at the begining of the iteration.

```js
while (condition) {
    // Code to Repeat
    // Must eventually make condition false, or loop runs forever!
}
```

### do... while Loop
Similar to *while* but checks the condition *after* each iteration. Guarantees at least one execution.

```js
do {
    // Code should runs at least once
} while (condition) // if condition is false will stops, if is true will continue

```

## The For Loop
The most common loop. Perfect when you know how many times to repeat.
- initialization
- condition
- increment

```js
for (initialization; condition; increment) {
    // Code to repeat
}
```