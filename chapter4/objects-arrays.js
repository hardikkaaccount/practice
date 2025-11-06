// Objects and Arrays

// Creating objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "swimming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  greet: function() {
    return "Hello, I'm " + this.firstName;
  }
};

// Accessing object properties
console.log(person.firstName);           // Dot notation
console.log(person["lastName"]);         // Bracket notation
console.log(person.address.city);        // Nested property
console.log(person.greet());             // Method call

// Modifying object properties
person.age = 31;
person["email"] = "john@example.com";
person.job = "Developer";                // Adding new property

// Deleting object properties
delete person.job;

// Object methods
console.log(Object.keys(person));        // Get all keys
console.log(Object.values(person));      // Get all values
console.log(Object.entries(person));     // Get key-value pairs

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, {name: "John"}, [1, 2, 3]];

// Accessing array elements
console.log(fruits[0]);                  // First element
console.log(numbers[numbers.length - 1]); // Last element

// Modifying arrays
fruits[1] = "grape";                     // Change element
fruits.push("mango");                    // Add to end
fruits.unshift("kiwi");                  // Add to beginning
fruits.pop();                            // Remove from end
fruits.shift();                          // Remove from beginning

// Array methods
let doubledNumbers = numbers.map(num => num * 2);
let evenNumbers = numbers.filter(num => num % 2 === 0);
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
let foundNumber = numbers.find(num => num > 3);

console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sumOfNumbers);
console.log(foundNumber);

// Array iteration
numbers.forEach(function(num, index) {
  console.log(index + ": " + num);
});

// Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // Access element at row 1, column 2 (value: 6)

// Array destructuring
let [first, second, third] = fruits;
console.log(first, second, third);

// Object destructuring
let {firstName, age} = person;
console.log(firstName, age);

// Spread operator
let moreFruits = [...fruits, "pineapple", "watermelon"];
let extendedPerson = {...person, occupation: "Engineer"};
console.log(moreFruits);
console.log(extendedPerson);