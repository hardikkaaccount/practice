"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
function hardik() {
    console.log("Hardik");
}
console.log(hardik);
let num = ['a', 1];
console.log(num);
var user;
(function (user) {
    user[user["Admin"] = 1] = "Admin";
    user[user["User"] = 2] = "User";
})(user || (user = {}));
console.log(user.User);
// Basic Types
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never
let a;
let b;
let c;
// Type Inference
let y = 12;
// Type Annotation
let z = 10;
function abc(a, b) {
}
function getDataOfUser(obj) {
    console.log(obj.name, obj.age);
}
let user1 = { name: "Hardik", age: 20 };
getDataOfUser(user1);
let admin1 = { name: "Sharon", age: 24, admin: true };
console.log(admin1);
let x = 12;
x = "12";
function print1(a) {
    console.log(a, "%");
}
print1(30);
// Union and Intersection
let p;
let efg = { name: "Hardik", age: 20, getDetails(user) { console.log(user); } };
efg.getDetails("Hardik");
// it will merge it
// Classes and Objects
// Class definition
// Constructors -> this
// Access modifiers (public, private, protected)
// Readonly properties
// Optional properties
// Parameter properties
// Getters and setters
// Static members
// Abstract classes and methods  
class Device {
    name;
    price;
    category = "tv";
    constructor(name, price) {
        this.name = name;
        this.price = price;
        //parameter properties above are
    }
}
let d1 = new Device("sony", 25000);
let d2 = new Device("lg", 20000);
console.log(d1, d2);
// other ways
class Music {
    name;
    artist;
    thumbnail;
    length;
    free;
    constructor(name, artist, thumbnail = "somethumbnail.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if (!thumbnail) {
            this.thumbnail = "somethumbnail.jpg";
        }
    }
}
class FluteArtist extends Music {
    getArtist() {
        // console.log(this.artist); //protected 
        console.log(this.name);
        console.log(this.length);
    }
}
let m1 = new Music("Shape of You", "Ed Sheeran", "", 230, true);
let m2 = new FluteArtist("Saregama", "Ed Sheeran", "djjc.png", 230, true);
console.log(m1);
console.log(m2.getArtist());
// --------------------
// Readonly
class Person {
    name;
    age;
    city;
    phno;
    constructor(name, age, city, phno) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.phno = phno;
        this.name = name;
        this.age = age;
        this.phno = phno;
        this.city = city;
    }
    changeCity(newCity) {
        // this.city = newCity;
    }
}
let p1 = new Person("Hardik", 20, "Mumbai");
p1.changeCity("Delhi");
console.log(p1.name);
console.log(p1.city);
// Getters and Setters
class Student {
    name;
    age;
    city;
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
let p3 = new Student("Hardik", 20, "Mumbai");
console.log(p3.getName);
p3.setName = "Rahul";
console.log(p3.getName);
class User3 {
    _name;
    age;
    city;
    constructor(_name, age, city) {
        this._name = _name;
        this.age = age;
        this.city = city;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
let u1 = new User3("Hardik", 20, "Mumbai");
console.log(u1.name);
u1.name = "Rahul";
console.log(u1.name);
//-----------------------
// Static Members
class Shery {
    static version = 1.3;
    static getRandomNumber() {
        return Math.random();
    }
}
console.log(Shery.version);
console.log(Shery.getRandomNumber());
// Abstract Classes and Methods
class Animal {
    move() {
        console.log("roaming the earth...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}
let doggy = new Dog();
let kitty = new Cat();
doggy.makeSound();
doggy.move();
kitty.makeSound();
kitty.move();
// Functions
// Function type
// optional and default parameters
// Rest parameters
// Overloads
//Function and Function Type
// call signautes
// construct signatures
// hybrid types
function abcd() {
    console.log("abcd");
}
abcd();
function abcde(name, age, cb) {
    console.log(name, age);
    console.log(cb('Gem'));
}
abcde('Hardik', 20, (arg) => {
    console.log(`hello m dear ${arg}`);
});
// Optional and Default Parameters
function greet(name, age, message = "Hello") {
    return `${message} ${name}`;
}
console.log(greet("Hardik"));
console.log(greet("Hardik", 18, "Hi"));
// Rest Parameters and Spread Operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3));
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr];
console.log(arr2);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(123, "Hello"));
console.log(add("123", "Hello"));
// Generics
// Generic Functions
// Generic Classes
// Generic Interfaces
// ek function ko use karte wakt bata sakte hai ke function arg ko kese treat karna hai
function xyz(arg) {
    return arg;
}
console.log(xyz("Hardik"));
console.log(xyz(123));
console.log(xyz(true));
console.log(xyz({ name: "Hardik" }));
console.log(xyz([1, 2, 3, 4, 5]));
console.log(xyz(function () { return 1; }));
console.log(xyz(undefined));
console.log(xyz(null));
console.log(xyz(NaN));
console.log(xyz(Infinity));
console.log(xyz(-Infinity));
function lmno(a, b = 10) {
    return [a, b];
}
console.log(lmno("Hardik"));
console.log(lmno(123, 1));
console.log(lmno(true));
console.log(lmno({ name: "Hardik" }));
console.log(lmno([1, 2, 3, 4, 5]));
console.log(lmno(function () { return 1; }));
console.log(lmno(undefined, undefined));
console.log(lmno(null));
console.log(lmno(NaN, NaN));
console.log(lmno(Infinity, Infinity));
console.log(lmno(-Infinity, -Infinity));
// Generic Classes
class Box {
    container = [];
    addItem(item) {
        this.container.push(item);
    }
    getItems() {
        return this.container;
    }
}
let box1 = new Box();
let box2 = new Box();
box2.addItem(123);
console.log(box2.getItems());
box2.addItem(456);
console.log(box2.getItems());
box1.addItem("Hardik");
console.log(box1.getItems());
box1.addItem("Rahul");
console.log(box1.getItems());
let c1 = { name: "Jagan", age: 20, value: "Prizeless" };
console.log(c1);
function allo(obj) {
    console.log(obj);
}
allo({ name: "Hardik", age: 20, value: "Prizeless" });
// Note
function jkq(arg) {
    let temp = (arg + "1234");
    return temp;
}
// Modules
// Export and Import
// Default and Named Exports
// import { User, getUser } from './Modules/user.js';
// import Payment from './Modules/payment.js';
// User('Hardik', 'SDE');
// getUser();
// let j1 = new Payment(1, 100, "2021-01-01");
// console.log(j1);
// type Assertions
// Type casting
// non-null assertions
// type assertions
let abaca = 79;
abaca.valueOf();
// or
abaca;
// type assertions
let ab = 69;
console.log(ab.valueOf());
console.log(ab);
// type casting
let f = Number('12');
console.log(f);
console.log(typeof f);
// non-null assertions
let bacada = "12jnkjnkn";
console.log(bacada.length);
// Type Guards and typescript utility types
// using typeof and instanceof
// Partial, Required, Readonly
// type guards 
function hbfbrfj(arg) {
    if (typeof arg === "string") {
        console.log(arg.toUpperCase());
    }
    else {
        console.log(arg.toFixed());
    }
}
hbfbrfj("Hardik");
hbfbrfj(20);
// instanceof
function checkInstance(arg) {
    if (arg instanceof Date) {
        console.log(arg.toDateString());
    }
    else {
        console.log(arg.toFixed());
    }
}
checkInstance(new Date());
checkInstance(123);
class tvkaremote {
    switchTvOff() {
        console.log("Switching off TV");
    }
}
class carKaRemote {
    switchCarOff() {
        console.log("Switching off Car");
    }
}
const remote1 = new tvkaremote();
const remote2 = new carKaRemote();
function switchOff(remote) {
    if (remote instanceof tvkaremote) {
        remote.switchTvOff();
    }
    else {
        remote.switchCarOff();
    }
}
switchOff(remote1);
switchOff(remote2);
// generics
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ name: "Hardik" }, { age: 20 }));
// index.ts
// import { jgjhgh } from "./Modules/utils.js";
// Changed from './utils.js' to "./Modules/utils.js"
// console.log(jgjhgh(2, 3)); // ✅ Works
console.log("Hardik");
//# sourceMappingURL=app.js.map