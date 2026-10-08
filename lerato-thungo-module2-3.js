// Challenge 1: Part A
// String: stores my full name. I use const because the value will not change in this program.
const fullName = "Lerato Thungo";

// Number: stores my age. I use const because the value will not change in this program.
const age = 22;

// Boolean: shows whether I enjoy JavaScript so far. I use const because the value will not change in this program.
const enjoyingJavaScript = false;

// Number: stores my favourite temperature in Celsius. I use const because the value will not change in this program.
const favouriteTemperature = 22.5;

// Number: results from an invalid number conversion. I use const because the value will not change in this program.
const notANumber = Number("not a number");

// Number: represents positive infinity from dividing 1 by 0. I use const because the value will not change in this program.
const infinityValue = 1/0;

// Number: stores the largest safely representable integer. I use const because the value will not change in this program.
const maxSafeInteger = Number.MAX_SAFE_INTEGER;

// Null: intentionally has no value. I use const because the value will not change in this program.
const emptyValue = null;

// Undefined: explicitly represents an unassigned value. I use const because the value will not change in this program.
const undefinedValue = undefined;

// Template literal: combines my name and age using existing variables.
const introduction = `My name is ${fullName}, I am ${age} years old!`;

// Part B
// Typeof on the 10 variables
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof enjoyingJavaScript);
console.log(typeof favouriteTemperature);
console.log(typeof notANumber);
console.log(typeof infinityValue);
console.log(typeof maxSafeInteger);
console.log(typeof emptyValue);
console.log(typeof undefinedValue);
console.log(typeof introduction);

// 7 additional cases 
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof "42");
console.log(typeof (typeof 42));
console.log(typeof [1, 2, 3]);
console.log(typeof function() {});

// Answer to the question
// According to the historical JavaScript implementation quirk. In early JavaScript, null was represented using the same type tag as objects. The behaviour was kept for backward compatibility.

// NaN means "Not a Number", but it is still a special value that belongs to JavaScript's Number type. It represents an invalid or undefined numeric result rather than being a separate data type.