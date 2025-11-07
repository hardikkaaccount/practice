// Advanced Array Methods

// map() - Transform each element
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
const doubled = numbers.map(x => x * 2);

// filter() - Select elements that meet a condition
const evens = numbers.filter(num => num % 2 === 0);
const greaterThanThree = numbers.filter(num => num > 3);

// reduce() - Accumulate values into a single result
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const product = numbers.reduce((acc, curr) => acc * curr, 1);

// More complex examples
const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "London" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "David", age: 20, city: "Paris" }
];

// Extract just the names
const names = people.map(person => person.name);

// Find people older than 25
const olderPeople = people.filter(person => person.age > 25);

// Calculate average age
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / people.length;

// Chain methods together
const result = people
  .filter(person => person.city === "New York")
  .map(person => ({ name: person.name, age: person.age }))
  .reduce((acc, person) => acc + person.age, 0);

// forEach() - Execute a function for each element
people.forEach(person => {
  console.log(`${person.name} is ${person.age} years old`);
});

// find() - Find first element that meets condition
const foundPerson = people.find(person => person.name === "Bob");

// some() - Check if at least one element meets condition
const hasYoungPerson = people.some(person => person.age < 25);

// every() - Check if all elements meet condition
const allAdults = people.every(person => person.age >= 18);

// sort() - Sort elements
const sortedByAge = [...people].sort((a, b) => a.age - b.age);
const sortedByName = [...people].sort((a, b) => a.name.localeCompare(b.name));

// flat() - Flatten nested arrays
const nestedArrays = [1, [2, 3], [4, [5, 6]]];
const flattened = nestedArrays.flat(2);

// flatMap() - Map then flatten
const sentences = ["Hello world", "How are you", "Goodbye"];
const words = sentences.flatMap(sentence => sentence.split(" "));

console.log(squared);
console.log(evens);
console.log(sum);
console.log(names);
console.log(olderPeople);
console.log(result);
console.log(foundPerson);
console.log(hasYoungPerson);
console.log(allAdults);
console.log(sortedByAge);
console.log(flattened);
console.log(words);