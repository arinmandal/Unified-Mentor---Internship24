### FUnction is JavaScript

In JavaScript, a function is a block of reusable code that performs a specific task. You can define a function using the `function` keyword followed by the function name, parameters, and the code block. Here's a simple example:

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Leo"); // Outputs: Hello, Leo
```

In this example, `greet` is a function that takes one parameter, `name`. When called with the argument 'Leo', it prints a greeting message to the console.

### Arrow function expressions

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage.

traditional functions

```
function hello(){
console.log('Hello, world!');
}
```

Arrow functions

```
const hello = () => {
  console.log('Hello, world!');
};

```

### Scopes
In JavaScript, there are three types of scopes:

1. **Global Scope**: Variables declared outside a function or in global space are in the global scope. These variables can be accessed from any part of the code.

2. **Function Scope**: Variables declared within a function using the `var` keyword are in the function scope. They can be accessed only within that function.

3. **Block Scope**: Variables declared with `let` and `const` are in the block scope, limited to the block in which they are declared (a block is defined by a pair of curly braces `{}`).

In addition, JavaScript has a special scope called **Execution Context** which includes variables, functions, and scopes available at a given time during the execution of a script.

Remember, in ES6, `let` and `const` have block scope, unlike `var` which has function scope. Also, `var` can be re-declared in the same scope, but `let` and `const` cannot.

```
// Global Scope
let globalVar = 'I am a global variable';

function functionScope() {
  // Function Scope
  var functionVar = 'I am a function variable';
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
}

if (true) {
  // Block Scope
  let blockVar = 'I am a block variable';
  console.log(globalVar); // Accessible
  // console.log(functionVar); // Not accessible (out of function scope)
}

functionScope(); // Call the function to access its variables
// console.log(blockVar); // Not accessible (out of block scope)

```

### Closure
A function can access all variables defined inside the function.

```
function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "I'm outside!"

```