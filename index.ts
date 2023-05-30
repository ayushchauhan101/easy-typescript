console.log("this is a typescript program");

const greet: string = "hello";
console.log(`${greet} world!`);

// create a function
function addOne(age: number): number {
	return age + 1;
}

console.log(addOne(32));

// variable with multiple types; myName can store two datatypes
let myName: string | number;
myName = "Boston Red Sox";
// myName = 45;
console.log(myName, "is a", typeof myName);

// creating Object literal types
type Answer = { a: number; b: string };
const val1: Answer = { a: 5, b: "hello" };

console.log(val1);
