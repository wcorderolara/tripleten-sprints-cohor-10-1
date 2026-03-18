# Arrays
Array as a special container that can hold multiple items, and different kind of items too.
Is a Ordedered Collection, each value is called an *Element*, and each element has a numbered
position called *Index*

```js
let student1 = 'Maria';
let student2 = 'Joshep';
let student3 = 'Sophie';
let age = 45

let students = ['Maria', 'Joseph', 'Sophie', age];
// Index           0         1         2
```

## How to create an Array?
### Array Literal Notation
This is the simplest and most popular way to create an Array. You use square brackets and
separate elements with commas.

```js
let numbers = [1, 2, 3, 4, 6];
let emptyArray = [];
```

### Array Constructor
We use the *new Array()* selector and we add the elements within the parenthesis.

```js
let numbers = new Array(1, 2, 3, 4, 6);
let emptyArray = new Array();
```

## How Access Array Elements?
To retrieve a value from an Array, we need to use bracket notation with the Index Number:

```js
let students = new Array('Maria', 'Joseph', 'Sophie', age);
// [ 'Maria', 'Joseph', 'Sophie', 45 ]
//      0         1        2       3
<array_name>[index] ---> bracket notation
```
```js
let students = new Array('Maria', 'Joseph', 'Sophie', age);
// [ 'Maria', 'Joseph', 'Sophie', 45 ]

<array_name>[index] = new_value;

```


### forEach()
This is a built-in array method that executes a function for each element.

## Adding and Removing Elements from Arrays
### Adding Elements to the End
To Add elements to the End we use a method called *push()* and within the parenthesis
we pass the value/element that we want to Add

```js
let shoppingCart = ['milk', 'bread'];
<array_name>.push(value-to-add);

shoppingCart.push('eggs');
// ['milk', 'bread', 'eggs']
```

### Adding Elements to the Beginning
To Add elements to the Beginning we use a method called *unshift()*

```js
let shoppingCart = ['milk', 'bread'];
<array_name>.unshift(value-to-add);

shoppingCart.unshift('eggs');
// ['eggs', 'milk', 'bread']
```

### Removing Elements from End
We use a method called *pop()* we don't need to pass anything.

```js
let shoppingCart = ['milk', 'bread', 'eggs'];
<array_name>.pop()

shoppingCart.pop();
// ['milk', 'bread']
```

### Removing Elements from the Beginning
We use a method called *shif()* and always will return the value to be removed

```js
let shoppingCart = ['milk', 'bread', 'eggs'];
<array_name>.shift();

shoppingCart.shift();
// ['bread', 'eggs']
```

### Removing or Adding at Any Position
We use *splice()* method, is the Swiss Army Knife of array manipulation.
It can add elements, remove elements or do both at the same time.

```js
Syntax:

<arry_name>.splice(startIndex, deleteCount, itemsToAdd);

```