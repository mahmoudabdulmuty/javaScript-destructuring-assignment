'use strict';

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// (1) Array destructuring

// (a) Basic variable assignment
const arr = ['one', 'two', 'three'];

const [red, yellow, green] = arr;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// (b) Assignment separate from declaration
// A variable can be assigned its value via destructuring, separate from the variable's declaration.
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// In an array destructuring from an array of length N specified on the right-hand side of the assignment, if the number of variables specified on the left-hand side of the assignment is greater than N, only the first N variables are assigned values. The values of the remaining variables will be undefined.

const arr = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); //undefined

// (c) Default values
// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.

let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

// (d) Swapping variables
// Two variables values can be swapped in one destructuring expression.
// Without destructuring assignment, swapping two values requires a temporary variable.

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

// (e) Assigning the rest of an array to a variable
// When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:

const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

// (2) Object destructuring

// (a) Basic assignment

const user = {
	id: 42,
	isVerified: true
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true

// (b) Assignment separate from declaration
// A variable can be assigned its value with destructuring separate from its declaration.

let a, b;

({ a, b } = { a: 1, b: 2 });

// Note: The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.

// {a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.

// However, ({a, b} = {a: 1, b: 2}) is valid, as is const {a, b} = {a: 1, b: 2}

// Your ( ... ) expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line.

// (c) Assigning to new variable names
// A property can be unpacked from an object and assigned to a variable with a different name than the object property.

const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

// Here, for example, const {p: foo} = o takes from the object o the property named p and assigns it to a local variable named foo.

// (d) Default values
// A variable can be assigned a default, in the case that the value unpacked from the object is undefined.

const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5

// (e) Assigning to new variables names and providing default values
// A property can be both :
// -- Unpacked from an object and assigned to a variable with a different name.
// -- Assigned a default value in case the unpacked value is undefined.

const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
