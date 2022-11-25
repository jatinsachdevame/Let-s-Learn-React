//=====================================================================
//let and const

var myName = "Jatin";
console.log(myName);

myName = "Sachdeva";
console.log(myName);

let myName2 = "Jatin";
console.log(myName2);

myName2 = "Sachdeva";
console.log(myName2);


const myName3 = "Jatin";
console.log(myName3);

myName3 = "Sachdeva";
//error here
console.log(myName3);

//=====================================================================
// arrow functions

const myFunc = () => {
    console.log("Arrow Function example");
}
// No more this keyword issues

function printMyName(name) {
    console.log(name);
}

printMyName("Jatin");

const printMyName2 = (name) => {
    console.log(name);
}

printMyName2("Jatin");

//valid for single argument
const printMyName3 = name => {
    console.log(name);
}

printMyName3("Jatin");

//no argument case
const printMyName4 = () => {
    console.log(name);
}

printMyName4("Jatin");

//variations on the right side of the arrow.
const multiply = (number) => {
    return number * 2;
}

console.log(multiply(2));

//when in our arrow function, we just have to return something
//then we can omit the curly braces and the return keyword

const multiply2 = (number) => number * 2;

console.log(multiply2(2));

//=====================================================================
// Exports and Imports(Modules)

//person.js
const person = {
    name: "Jatin"
}

export default person;

//utility.js
//export const clean = () => {...}
//export const baseData = 10;


//app.js
import person from './person.js'
import prs from './person.js'
// since in the person.js, we have exported it default hence it doesn't matter
// whatever the name we write during import in app.js
// it will always refer to the default one

import {baseData} from './utility.js'
import {clean} from './utility.js'
// the import syntax uses the curly braces to explicitly target the specific thing.
// these are called named exports

import {clean as Clean} from './utility.js'
// we can assign an alias as well

import * as bundled from './utility.js'
//bundled is a JS object which contains all consts etc.

//=====================================================================
// Classes
class Person {
    name = "Jatin"
    func = () => {
        console.log(name);
    }
}

const myPerson = new Person();
myPerson.func();


//Inheritance
class Human {
    constructor() {
        this.gender = "Female";
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        //required during inheritance to initialize parent class
        //if we have constructor in child class
        this.name = "Jatin";
        this.gender = "Male";
    }
    printMyName() {
        console.log(this.name);
    }
}

const personObj = new Person();
personObj.printMyName();
personObj.printGender();

//=====================================================================
// Classes, Properties and Methods


// Properties are like "variables attached to classes/objects"
//ES6
//constructor() {
//  this.name = "Jatin"
//}

//with ES7
//we can directly assign the property = value in the class outside the constructor.

//Functions in ES7
//think of a function as a property which stores function as a value

//myMethod = () => {...}
//no problem with the this keyword

//we don't need to call super() in ES7 during inheritance

//=====================================================================
// Spread and Rest Operators
// Actually it's just one operator: three dots

//Spread: Used to split up array elements OR object properties

const oldArray = [3,4,5];
const newArray = [...oldArray, 1,2];

const oldObj = {
    name: "Jatin"
}
const newObj = {...oldObj, age: 23};

//Rest: Used to merge a list of function arguments into an array
function sortArr(...args) {
    return args.sort();
}

//=====================================================================
// Destructuring
// Easily extract array elements or object properties and store them in variables.

//Spread takes out all elements or all properties and distribute them in an array or object.
//destructuring allows us to pull out single element or property and store them in variable.

//Array destructuring
[a,b] = ["Hello", "Jatin"];
//a => Hello
// => Jatin

//Object destructuring
{name} = {name: "Jatin", age: 23};
console.log(name);

//=====================================================================
// Reference and Primitive Types Refresher

// Numbers, String, Boolean are primitive types
const n1 = 1;
const n2 = n1;
//exact copy of n1 will be created and will be assigned to n2.

//object and arrays are reference type.

const person1 = {
    name: Jatin
}

const person2 = person1;

//new copy is not created.
//pointer to that memory location
//pointer is copied

const person3 = {...person1};
//use spread operator to create the real copy

//=====================================================================
// Refreshing Array Functions
// Map function
const numbers = [1,2,3];
const double = numbers.map((n) => n*2);
console.log(double);

