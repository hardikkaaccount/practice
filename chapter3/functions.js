// Functions

// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Calling functions
console.log(greet("Alice"));
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(power(3));      // Uses default exponent of 2
console.log(power(2, 3));   // Uses provided exponent
console.log(sum(1, 2, 3, 4, 5));

// Function scope
let globalVar = "I'm global";

function scopeExample() {
  let localVar = "I'm local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
  
  function innerFunction() {
    let innerVar = "I'm inner";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
    console.log(innerVar);  // Accessible
  }
  
  innerFunction();
  // console.log(innerVar); // Not accessible - would cause error
}

scopeExample();
// console.log(localVar); // Not accessible - would cause error

// Closures
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // Returns 8

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This runs immediately");
})();

// Callback functions
function processArray(arr, callback) {
  let result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

let numbers = [1, 2, 3, 4];
let doubled = processArray(numbers, function(num) {
  return num * 2;
});
console.log(doubled);