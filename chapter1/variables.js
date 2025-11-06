// Variables and Data Types

// Variable declarations
var firstName = "John";
let lastName = "Doe";
const age = 25;

// Primitive data types
let name = "Alice";           // String
let count = 10;              // Number
let isActive = true;         // Boolean
let emptyValue = null;       // Null
let unknownValue;            // Undefined
let bigNumber = BigInt(123456789012345678901234567890n);  // BigInt
let uniqueSymbol = Symbol("description");                 // Symbol

// Structural data types
let person = {               // Object
  name: "Bob",
  age: 30
};

let greet = function() {     // Function
  return "Hello!";
};

let numbers = [1, 2, 3, 4];  // Array (which is a type of object)

// Type checking
console.log(typeof name);        // string
console.log(typeof count);       // number
console.log(typeof isActive);    // boolean
console.log(typeof emptyValue);  // object (this is a known quirk in JS)
console.log(typeof unknownValue); // undefined
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueSymbol); // symbol
console.log(typeof person);      // object
console.log(typeof greet);       // function
console.log(typeof numbers);     // object