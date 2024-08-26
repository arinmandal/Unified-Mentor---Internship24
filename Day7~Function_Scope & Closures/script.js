//! Functions

// Write a function to calculate the square  of a number and return the result.

function squareNumber(num) {
    return num * num;
}
 
// console.log(squareNumber(4))

// Write a function to check if number is even or odd and log the result to the console.

function checkEvenOdd(num) { 
  if (num % 2 == 0) return 'even'
  else return 'odd'
}

// console.log(checkEvenOdd(4))

//! Scopes

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



// Closure
// Write a function that return another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function createCounter() {
  let count = 0;

  return function incrementCounter() {
    count++;
    return count;
  }
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
