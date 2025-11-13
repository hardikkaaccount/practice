function hardik(){
    console.log("Hardik")
}
console.log(hardik)
let num : [string, number] = ['a',1]

console.log(num)

enum user {
    Admin = 1,
    User = 2
}

console.log(user.User)

// Basic Types
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never

let a: number;
let b: any;
let c: unknown;

// Type Inference

let y = 12;

// Type Annotation
let z: number | string | boolean = 10;


function abc(a: number, b: string){

}

interface User{
    name: string,
    age: number
    phno?: string
}

function getDataOfUser(obj: User) {
    console.log(obj.name, obj.age);
}

let user1 = {name: "Hardik", age: 20};
getDataOfUser(user1);


interface Admin extends User {
    admin: boolean;
}

let admin1: Admin = {name: "Sharon", age: 24, admin: true};

console.log(admin1);


// 2 interface pf same name will merge..

// ---------------------------------

// type Aliases

type sankhya = number | string;

let x: sankhya = 12;
x = "12";

function print1(a: sankhya): void{
    console.log(a,"%")
}

print1(30)

// Union and Intersection

let p: number | string;

type Abc = {
    name: string,
    age: number
}


type Efg = Abc & {
    getDetails(user: string): void;
}

let efg: Efg = {name: "Hardik", age: 20, getDetails(user: string): void{console.log(user)}};
efg.getDetails("Hardik");

// diff btn interface and type

// 1. Redeclare
// In type
        // type abc = {
        //     name: string,
        //     age: number
        // }
        // type abc = {}
        // will give error

// In interface
        interface hij {
            name: string,
            age: number
        }
        interface hij {
            phno: string
        }
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
    category = "tv";
    constructor(public name: string, public price: number) {
       //parameter properties above are
    }
}

let d1 = new Device("sony", 25000);
let d2 = new Device("lg", 20000);
console.log(d1, d2);

// other ways
class Music {
    public name;
    private artist;
    public thumbnail;
    protected length;
    public free;
    constructor(name: string, artist: string, thumbnail: string = "somethumbnail.jpg", length: number, free: boolean) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
        if(!thumbnail){
            this.thumbnail = "somethumbnail.jpg";
        }
    }
}

class FluteArtist extends Music {
    getArtist(){
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
    constructor(public name: string, private age: number, readonly city: string, protected phno?: string) {
        this.name = name;
        this.age = age;
        this.phno = phno;
        this.city = city;
    }
    changeCity(newCity: string) {
        // this.city = newCity;
    }
}
let p1 = new Person("Hardik", 20, "Mumbai");
p1.changeCity("Delhi")
console.log(p1.name);
console.log(p1.city);


// Getters and Setters

class Student {
    constructor(private name: string, private age: number, private city: string) {
    }
    get getName(){
        return this.name;
    }
    set setName(name: string){
        this.name = name;
    }
}

let p3 = new Student("Hardik", 20, "Mumbai");
console.log(p3.getName);
p3.setName = "Rahul";
console.log(p3.getName);

class User3{
    constructor(public _name: string, public age: number, public city: string) {
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
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

console.log(Shery.version)
console.log(Shery.getRandomNumber())


// Abstract Classes and Methods

abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}
class Cat extends Animal {
    makeSound(): void {
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

function abcd(): void {
    console.log("abcd");
}
abcd();

function abcde(name: string, age: number, cb: (arg:string) => void){
    console.log(name, age);
    console.log(cb('Gem'));

}

abcde('Hardik', 20, (arg: string) => {
    console.log(`hello m dear ${arg}`)
})

// Optional and Default Parameters
function greet(name: string, age?: number, message: string = "Hello"): string {
    return `${message} ${name}`;
}
console.log(greet("Hardik"));
console.log(greet("Hardik", 18,"Hi"));

// Rest Parameters and Spread Operator
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3));

let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr]

console.log(arr2)

// Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any;
function add(a: any, b: any): any {
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

function xyz<T>(arg: T): T {
    return arg;
}
console.log(xyz("Hardik"));
console.log(xyz(123));
console.log(xyz(true));
console.log(xyz({name: "Hardik"}));
console.log(xyz([1,2,3,4,5]));
console.log(xyz(function(){return 1;}));
console.log(xyz(undefined));
console.log(xyz(null));
console.log(xyz(NaN));
console.log(xyz(Infinity));
console.log(xyz(-Infinity));

function lmno<T>(a: T, b: number = 10){
    return [a,b];
}

console.log(lmno<string>("Hardik"))
console.log(lmno<number>(123,1))
console.log(lmno<boolean>(true))
console.log(lmno<object>({name: "Hardik"}))
console.log(lmno<Array<number>>([1,2,3,4,5]))
console.log(lmno<Function>(function(){return 1;}))
console.log(lmno<undefined>(undefined, undefined))
console.log(lmno<null>(null))
console.log(lmno<number>(NaN, NaN))
console.log(lmno(Infinity, Infinity))
console.log(lmno<number>(-Infinity, -Infinity))


// Generic Classes

class Box<T> {
    private container: T[] = [];

    addItem(item: T) {
        this.container.push(item);
    }

    getItems(): T[] {
        return this.container;
    }
}
let box1 = new Box<string>();
let box2 = new Box<number>();
box2.addItem(123);
console.log(box2.getItems());
box2.addItem(456);
console.log(box2.getItems());
box1.addItem("Hardik");
console.log(box1.getItems());
box1.addItem("Rahul");
console.log(box1.getItems());

// Generic Interfaces

interface Container<T> {
    name: string;
    age: number;
    value: T;
}
let c1: Container<string> = {name:"Jagan", age: 20, value: "Prizeless"};
console.log(c1);
function allo(obj: Container<string>){
    console.log(obj);
}

allo({name: "Hardik", age: 20, value: "Prizeless"})

// Note
function jkq<T>(arg: T): T {
    let temp: T = (arg + "1234") as T; 
    return <T>temp;
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
let abaca: any = 79;
(abaca as number).valueOf();
// or
<number>abaca

// type assertions
let ab: any = 69;
console.log((ab as number).valueOf());
console.log(<number>ab);

// type casting
let f = Number('12');
console.log(f);
console.log(typeof f);

// non-null assertions
let bacada: string = "12jnkjnkn";
console.log(bacada!.length);


// Type Guards and typescript utility types
// using typeof and instanceof
// Partial, Required, Readonly

// type guards 

function hbfbrfj(arg: any){
    if(typeof arg === "string"){
        console.log(arg.toUpperCase());
    } else {
        console.log(arg.toFixed());
    }
}
hbfbrfj("Hardik");
hbfbrfj(20);

// instanceof
function checkInstance(arg: any) {
    if (arg instanceof Date) {
        console.log(arg.toDateString());
    }
    else {
        console.log(arg.toFixed());
    }
}
checkInstance(new Date());
checkInstance(123);


class tvkaremote{
    switchTvOff(){
        console.log("Switching off TV");
    }
}

class carKaRemote{
    switchCarOff(){
        console.log("Switching off Car");
    }
}

const remote1 = new tvkaremote();
const remote2 = new carKaRemote();

function switchOff(remote: tvkaremote | carKaRemote){
    if (remote instanceof tvkaremote){
        remote.switchTvOff();
    }
    else {
        remote.switchCarOff();
    }
}

switchOff(remote1);
switchOff(remote2);


// generics
function mergeObjects<T, U>(obj1: T, obj2: U) : T & U {
    return {...obj1, ...obj2}
}

console.log(mergeObjects({name: "Hardik"}, {age: 20}));

// index.ts
// import { jgjhgh } from "./Modules/utils.js";
 // Changed from './utils.js' to "./Modules/utils.js"
// console.log(jgjhgh(2, 3)); // ✅ Works

console.log("Hardik");
