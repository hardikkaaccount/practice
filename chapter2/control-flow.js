// Control Flow Statements

// if/else statement
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside");
} else if (temperature > 20) {
  console.log("It's warm outside");
} else {
  console.log("It's cool outside");
}

// switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's weekend");
    break;
  default:
    console.log("Midweek day");
}

// for statement
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration: " + i);
}

// while statement
let counter = 0;
while (counter < 3) {
  console.log("While loop iteration: " + counter);
  counter++;
}

// do...while statement
let num = 0;
do {
  console.log("Do-while loop iteration: " + num);
  num++;
} while (num < 3);

// for...in statement (for object properties)
let car = {make: "Toyota", model: "Camry", year: 2020};
for (let key in car) {
  console.log(key + ": " + car[key]);
}

// for...of statement (for iterable objects like arrays)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

// labelled statement with break
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// continue statement
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip iteration when i is 2
  }
  console.log("Continue example: " + i);
}