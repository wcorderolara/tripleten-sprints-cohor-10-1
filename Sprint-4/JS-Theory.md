# JavaScript
### Programming Language
Programming is the process of creating a set of instructions that tell a computer how to
perform a task. 

### What is JavaScript?
is a programming language that makes websites interactive and dynamic. It's one of the
three core techs of web Development:

- HTML => Creates the Structure and the Content
- CSS  => Styles and designs the appearance.
- JS   => Adds behavior and interactivity.

### What can JavaScript do?
- Respond to user Actions (Clicks, typing, mouse movements).
- Change content on a webpage dynamically.
- validate forms before submission.
- Create animations and effects.
- Communicate with servers to fetch or send data.
- Build complete web applications.

## Adding JS (JavaScript) to a Webpage
There are three main ways to add JS to your HTML pages.

#### Method 1: Inline JavaScript
You can Add JavaScript directly inside HTML elements using event
attributes.

```js
<button onclick="alert('Hello World!!">Click Me</button>
```

#### Method 2: Internal JavaScipt (<script></script>)
You can include JS code within a <script></script> tag in your HTML file

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="alert('Hello, World!')">Click Me</button>

    <script>
        console.log('Hello World from internal Script Tag');
    </script>
</body>
</html>
```
###### Best Practice
Place the <script> tag, just before the closing </body> tag, so the HTML and CSS
load first


#### Methond 3: External JavaScript Files (Recommended)
Create a separate file with '.js' extension and link it to your HTML

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="alert('Hello, World!')">Click Me</button>

    <script src="script.js"></script>
</body>
</html>
```
##### Advantages of External Files
- Keeps HTML and JavaScript separate (better organization)
- JavaScript code can be reused across multiple HTML pages and projects
- Easier to maintai and debug
- Browsers can cach the JavaScript file for faster loading

### Display Information with JS
JS provides several methods to display information to users:

- console.log - For Developers
Displays messages in the browser's developer console tab, it's perfect for testing
and debugging.

- alert - Dialog
Creates a Dialog with text that the user must close before continuing.

For important messages that reuire immediate attention.

- document.write - Write content to the Page
Writes content directly to the HTML document.

```js
document.write("Hello World");
document.write("<h1>This is a main head<h1");
```

### Modify HTML Elements (Content)
To perform this action with JS we need to identify the object through the ID attribute.

```js
<h1 id="mainTitle">Placeholder</h1>

<script>
document.getElementById("ID-OBJECT");
<script>
```

### Comments
Are notes in your code that JS ignores when running. They are essential
for explaining what your code does.

- *Documentation*: Explain complex code to others (or yourself later).
- *Planning*: Outline what you are going to code
- *Debugging*: Temporaly disable code without deleting it
- *Collaboration*: Help team members understand your work

## Primitive Data Types
Today is Monday = Strings
125.65 = Number
True or False = Boolean
a 1 # = characters

### Numbers
JS has one type of number (integer, decimals). All numbers are stored as 64-bits
10, 25.3

#### Arithmetic Operators
Perform Mathemathical calculations.
- Adition
    (+) => 25 + 3 => 28
- Substraction
    (-) => 14 - 6 => 8
- Multiplication
    (*) => 25 * 4 => 100
- Division
    (/) => 25 / 5 = 5
- Modulus (remainder after division)
    (%) => 25 / 4 = 5
- Exponentiation
    (**) => 5 ** 2 = 25
         => 5 ** 3 = 125

#### PEMDAS
1. Parentheses (5 - 3)
2. Exponents **
3. Multiplication (*) and Division (/) => left to right
4. Addition (+) and Substractions (-) => left to right

``` js
Examples
2 + 3 * 4 = 14;
(2 + 3) * 4 = 20
10 + 5 * 2 - 3 = 17;
```

### Strings
Strings are sequences of characters used to represent text. In JS, strings can contain letters, numbers, symbols and spaces.

```js

'Hello World' => Traditional way too / interchangeable with double quotes.
"Hello World" => Traditional way / interchangeable with single quotes.
`Hello World` => Template Literals
    Modern way, allows embedded javascript expressions
    `The sum of 3 + 5 is: ${3+5}`
```

#### Scape Characters
Special characters that needs backslah '\' to be included in strings:

```js
'"Lorem ipsum", dolor sit it\'s amet consectetur adipisicing elit. Minima laboriosam iste illum omnis rerum quibusdam dolor neque amet eos beatae quasi et tempora ab iure! Eligendi exercitationem qui assumenda minima?'
```

#### Case Conversions
JavaScript is Case Sensitive

#### Split String
The split() method divides a string into substrings (arrays)

#### Finding Substring
indexOf() find the position of the first occurrence of the
text passed as argument.

0 1 2 3 4 5 6 7 8 9  10 11 <===== INDEX
J A V A S C R I P T     I S  A W E S O M E !
1 2 3 4 5 6 7 8 9 10 11 12

### Booleans
Represents True or False value.

### Undefined
Represents a variable that has been declared but not assigned a value.

### Null
Represents an intentional absence of value;