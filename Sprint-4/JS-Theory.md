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

