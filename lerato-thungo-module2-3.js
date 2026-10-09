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

// Challenge 2: Part A
// "123"
console.log("Number:", Number("123"),
typeof Number("123"));
console.log("parseInt:", parseInt("123"), 
typeof parseInt("123"));
console.log("parseFloat:", parseFloat("123"),
typeof parseFloat("123"));
console.log("Boolean:", Boolean("123"), 
typeof Boolean("123"));
console.log("String:", String("123"), 
typeof String("123"));

// "3.14"
console.log("Number:", Number("3.14"), 
typeof Number("3.14"));
console.log("parseInt:", parseInt("3.14"), 
typeof parseInt("3.14"));
console.log("parseFloat:", parseFloat("3.14"), 
typeof parseFloat("3.14"));
console.log("Boolean:", Boolean("3.14"), 
typeof Boolean("3.14"));
console.log("String:", String("3.14"), 
typeof String("3.14"));

// "hello"
console.log("Number:", Number("hello"), 
typeof Number("hello"));
console.log("parseInt:", parseInt("hello"), 
typeof parseInt("hello"));
console.log("parseFloat:", parseFloat("hello"),
typeof parseFloat("hello"));
console.log("Boolean:", Boolean("hello"), 
typeof Boolean("hello"));
console.log("String:", String("hello"), 
typeof String("hello"));

// "42abc"
console.log("Number:", Number("42abc"), 
typeof Number("42abc"));
console.log("parseInt:", parseInt("42abc"), 
typeof parseInt("42abc"));
console.log("parseFloat:", parseFloat("42abc"), 
typeof parseFloat("42abc"));
console.log("Boolean:", Boolean("42abc"), 
typeof Boolean("42abc"));
console.log("String:", String("42abc"), 
typeof String("42abc"));

// ""
console.log("Number:", Number(""), 
typeof Number(""));
console.log("parseInt:", parseInt(""), 
typeof parseInt(""));
console.log("parseFloat:", parseFloat(""),
typeof parseFloat(""));
console.log("Boolean:", Boolean(""), 
typeof Boolean(""));
console.log("String:", String(""), 
typeof String(""));

// 0
console.log("Number:", Number(0), 
typeof Number(0));
console.log("parseInt:", parseInt(0), 
typeof parseInt(0));
console.log("parseFloat:", parseFloat(0), 
typeof parseFloat(0));
console.log("Boolean:", Boolean(0), 
typeof Boolean(0));
console.log("String:", String(0), 
typeof String(0));

// null
console.log("Number:", Number(null),
typeof Number(null));
console.log("parseInt:", parseInt(null), 
typeof parseInt(null));
console.log("parseFloat:", parseFloat(null), 
typeof parseFloat(null));
console.log("Boolean:", Boolean(null), 
typeof Boolean(null));
console.log("String:", String(null), 
typeof String(null));

// undefined
console.log("Number:", Number(undefined), 
typeof Number(undefined));
console.log("parseInt:", parseInt(undefined), 
typeof parseInt(undefined));
console.log("parseFloat:", parseFloat(undefined), 
typeof parseFloat(undefined));
console.log("Boolean:", Boolean(undefined), 
typeof Boolean(undefined));
console.log("String:", String(undefined),
typeof String(undefined));

// Part B
// "5" + 3
// Output: "53"
// Type: String
// JavaScript converts 3 to a string because  the operato (+) concatenates when a string is involved.
console.log("5" + 3, typeof ("5" + 3));

// "5" - 3
// Output: 2
// Type: number
// JavaScript converts "5" to a number because - is an arithmetic operator.
console.log("5" - 3, typeof ("5" - 3));

// "5" * "2"
// Output: 10
// Type: number
// JavaScript converts both strings to numbers because * performs arithmetic.
console.log("5" * "2", typeof ("5" * "2"));

// true + "1"
// Output: "true1"
// Type: string
// JavaScript converts 3 to a string because  the operato (+) concatenates when a string is involved.
console.log(true + "1", typeof (true + "1"));

// 1 / 0
// Output: infinity
// Type: number
// JavaScript represents division of a non-zero number by zero as Infinity.
console.log(1 / 0, typeof (1 / 0));

// [] + []
// Output: ""
// Type: string
// JavaScript converts both empty arrays to empty strings.
console.log([] + [], typeof ([] + []));

// [1] + [2]
// Output: "12"
// Type: string
// JavaScript converts both arrays to strings.
console.log([1] + [2], typeof ([1] + [2]));

// Part C
// Question 1: A number() tries to convert a value into a number, while parseInt() only wants a whole number from the beginning of the value.
// Question 2: I would use parseFloat() because it allows to preserve decimal values. Using parseInt() on something that involves money could be risky because it removes the decimal part which may cause incorrect money calculations. 

// Challenge 3
// 1. Arithmetic
// Modulo checks whether the net salary is evenly divisible by 100.

const grossSalary = 45000;
const taxRate = 0.25;
const taxAmount = grossSalary * taxRate;
const uifRate = 0.01;
const uifAmount = grossSalary * uifRate;
const medicalAid = 2500;

const netSalary = grossSalary - taxAmount - uifAmount - medicalAid;
const remainder = netSalary % 100;

console.log("Net salary" + netSalary);

// 2. Assignment

let cartTotal = 0;
cartTotal += 150; 
cartTotal += 85;  
cartTotal += 220;

cartTotal *= 0.90; // 10% discount.
cartTotal *= 1.15; // 15% VAT.

console.log("Final cart total" + cartTotal.toFixed(2));
// Final cart total: R470.93

// 3. Comparison

const userAge = 18;
const password = "hello123";
const email = "lerato@gmail.com";
const confirmedEmail = "lerato@gmail.com";

const validAge = age >= 18;
const validPassword = password.length >= 8;
const matchingEmails = email === confirmedEmail;

console.log("Age valid:", validAge);
console.log("Password valid:", validPassword);
console.log("Emails match:", matchingEmails);