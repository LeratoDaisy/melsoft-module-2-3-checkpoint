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

// 4. Logical Operators

const isLoggedIn = true;
const isEmailVerified = false;
const isAdmin = false;

const canAccessDashboard = (isLoggedIn && isEmailVerified) || isAdmin;

console.log("Can access dashboard:", canAccessDashboard); // false

// 5. Unary: Convert a form value to a number and toggle dark mode.

const formAge = "25";
const numericAge = +formAge;

let isDarkMode = true;
isDarkMode = !isDarkMode;

console.log("Numeric age:", numericAge); 
console.log("Age type:", typeof numericAge); 
console.log("Dark mode:", isDarkMode);

// 6. Ternary: Assign a membership badge based on membership type.

const membershipType = "trial";

const badge =
membershipType === "premium"
? "Premium Member"
: membershipType === "trial"
? "Trial Member"
: "Free Member";

console.log("Membership badge:", badge); // Trial Member

// 7. String Concatenation: Create a greeting using + and a template literal.

const name = "Thabo Nkosi";
const personAge = 28;

// Using + to join strings and variables.
const greetingWithPlus = "Welcome back " + name + ", you are " + age + " years old.";

// Using a template literal to insert variables into a string.
const greetingWithTemplate = `Welcome back ${name}, you are ${age} years old.`;

console.log(greetingWithPlus);
console.log(greetingWithTemplate);

// I think template literals are easier to read when a sentence contains many variables. The sentence stays together instead of being split into multiple strings.


// Prefix (++x) vs Postfix (x++)
// Prefix increases the variable before its value is used, while Postfix uses the current value before increasing the variable.
let a = 5;
let b = 5;
console.log(++a); // 6
console.log(b++); // 5
console.log(b);   // 6

// Three real-world uses of the modulo (%) operator:
// Even or odd: number % 2 === 0 checks if a number is even.
// Scheduling: index % 5 === 0 can identify every fifth item.
// Cycling through items: index % 3 can rotate through three images or banner items repeatedly.

// Are nested ternaries good practice?
// Nested ternaries are not always bad, but they should be used carefully because too many conditions can make code difficult to read and maintain.
// I would avoid nested ternaries when there are many conditions, the logic is complicated, or the code becomes difficult to understand. In these situations, if...else if...else statements are clearer and easier to debug.

// Challenge 4: Part A

// Prediction: true
console.log(0 == false); // true
// Loose equality converts false to 0 before comparing.

// Prediction: false
console.log(0 === false); // false
// Strict equality does not convert types; number and Boolean differ.

// Prediction: false
console.log("" == 0); // true
// Loose equality converts the empty string to the number 0.

// Prediction: false
console.log("" === 0); // false
// A string and a number are different types.

// Prediction: true
console.log("0" == 0); // true
// Loose equality converts the string "0" to the number 0.

// Prediction: false
console.log("0" === 0); // false
// Strict equality does not convert the string to a number.

// Prediction: true
console.log(null == undefined); // true
// Loose equality has a special rule that treats null and undefined as equal.

// Prediction: false
console.log(null === undefined); // false
// Strict equality treats null and undefined as different types.

// Prediction: false
console.log(null == 0); // false
// Loose equality does not treat null as equal to zero.

// Prediction: true
console.log(null >= 0); // true
// The relational comparison converts null to 0, and 0 >= 0 is true.

// Prediction: false
console.log(null > 0); // false
// Null converts to 0, and 0 is not greater than 0.

// Prediction: false
console.log(NaN == NaN); // false
// NaN is not equal to any value, including itself.

// Prediction: false
console.log(NaN === NaN); // false
// Strict equality also treats NaN as unequal to itself.

// Prediction: true
console.log(Object.is(NaN, NaN)); // true
// Object.is() considers NaN equal to itself.

// Prediction: true
console.log(+0 === -0); // true
// Strict equality treats positive zero and negative zero as equal.

// Prediction: false
console.log(Object.is(+0, -0)); // false
// Object.is() distinguishes positive zero from negative zero.

// Prediction: true
console.log([1, 2, 3] == "1,2,3"); // true
// The array converts to the string "1,2,3", matching the other string.

// Prediction: true
console.log([] == false); // true
// The array converts to "" and then 0, while false converts to 0.

// Prediction: true
console.log([] == 0); // true
// The empty array converts to "" and then to the number 0.

// Prediction: true
console.log([0] == false); // true
// [0] converts to "0" and then 0, while false converts to 0.

// PART B

function validateResetForm(newPassword, confirmPassword, currentEmail, confirmEmail) {
 const passwordsMatch = newPassword === confirmPassword;
 const emailsMatch = currentEmail === confirmEmail;
 const passwordDiffersFromEmail = newPassword !== currentEmail;
 const passwordIsLongEnough = newPassword.length >= 8;

console.log("Passwords match: " + (passwordsMatch ? "PASS" : "FAIL"));
console.log("Emails match: " + (emailsMatch ? "PASS" : "FAIL"));
console.log("Password differs from email: " + (passwordDiffersFromEmail ? "PASS" : "FAIL"));
console.log("Password is at least 8 characters: " + (passwordIsLongEnough ? "PASS" : "FAIL"));
}

// TEST CASE 1
console.log("TEST CASE 1: Valid form");

validateResetForm(
    "SecurePass123",
    "SecurePass123",
    "lerato@gmail.com",
    "lerato@gmail.com"
);

// TEST CASE 2
console.log("\nTEST CASE 2: Invalid form");

validateResetForm(
    "short",
    "different",
    "lerato@example.com",
    "other@example.com"
);

// Which equality operator did you use, and why?
// I used strict equality (===) to check whether the passwords and email addresses match exactly.
// Unlike loose equality (==), strict equality does not convert values to another type before comparing them.

// Challenge 5

// 2 + 3 * 4 - 1
// Prediction: 13
// Step 1: 3 * 4 = 12
// Step 2: 2 + 12 = 14
// Step 3: 14 - 1 = 13
console.log(2 + 3 * 4 - 1); // 13

// (2 + 3) * (4 - 1)
// Prediction: 15
// Step 1: (2 + 3) = 5
// Step 2: (4 - 1) = 3
// Step 3: 5 * 3 = 15
console.log((2 + 3) * (4 - 1)); // 15

// 10 - 4 - 2
// Prediction: 4
// Step 1: 10 - 4 = 6
// Step 2: 6 - 2 = 4
console.log(10 - 4 - 2); // 4

// 2 ** 3 ** 2
// Prediction: 512
// Step 1: 3 ** 2 = 9
// Step 2: 2 ** 9 = 512
console.log(2 ** 3 ** 2); // 512

// 10 % 3 * 2 + 1
// Prediction: 3
// Step 1: 10 % 3 = 1
// Step 2: 1 * 2 = 2
// Step 3: 2 + 1 = 3
console.log(10 % 3 * 2 + 1); // 3

// 100 / 4 / 5
// Prediction: 5
// Step 1: 100 / 4 = 25
// Step 2: 25 / 5 = 5
console.log(100 / 4 / 5); // 5

// 5 + 2 > 6 && 3 < 4
// Prediction: true
// Step 1: 5 + 2 = 7
// Step 2: 7 > 6 is true; 3 < 4 is true
// Step 3: true && true = true
console.log(5 + 2 > 6 && 3 < 4); // true

// true && false || true && true
// Prediction: true
// Step 1: Evaluate && first: false and true
// Step 2: false || true = true
console.log(true && false || true && true); // true

// !false && !!0
// Prediction: false
// Step 1: !false = true
// Step 2: !!0 = false 
// Step 3: true && false = false
console.log(!false && !!0); // false

// 5 > 3 && 10 < 20 || !(2 === "2")
// Prediction: true
// Step 1: Comparisons: true, true, and false
// Step 2: !(2 === "2") = !false = true
// Step 3: true && true = true; true || true = true
console.log(5 > 3 && 10 < 20 || !(2 === "2")); // true

// 1000 * 1.15 * 0.9
// Prediction: 1035
// Step 1: 1000 * 1.15 = 1150
// Step 2: 1150 * 0.9 = 1035
console.log(1000 * 1.15 * 0.9); // 1035

// typeof 5 + 1
// Prediction: "number1"
// Step 1: typeof 5 = "number"
// Step 2: "number" + 1 = "number1" (concatenation)
console.log(typeof 5 + 1); // "number1"

// typeof (5 + 1)
// Prediction: "number"
// Step 1: Parentheses: 5 + 1 = 6
// Step 2: typeof 6 = "number"
console.log(typeof (5 + 1)); // "number"

// "5" + 3 * 2
// Prediction: "56"
// Step 1: 3 * 2 = 6
// Step 2: "5" + 6 = "56"
console.log("5" + 3 * 2); // "56"

// "5" - 3 + 2
// Prediction: 4
// Step 1: "5" - 3 = 2 
// Step 2: 2 + 2 = 4
console.log("5" - 3 + 2); // 4

// Interview answer: I add parentheses when an expression combines different operators or becomes complex, because they make the intended order of operations clearer and easier to understand. They are especially useful in calculations involving money or business logic, where readability helps prevent mistakes. I avoid unnecessary parentheses in simple expressions to keep the code clean.

// Challenge 6: Part A

const percentages = [95, 82, 73, 65, 54, 42, 0, 100];

for (const percentage of percentages) {
 const grade =
 percentage >= 90 ? "A" :
 percentage >= 80 ? "B" :
 percentage >= 70 ? "C" :
 percentage >= 60 ? "D" :
 percentage >= 50 ? "E" : "F";

  console.log(`${percentage}% = ${grade}`);
}

// Part B
// User 1: All fields are missing.
const userMissing = {};

// User 2: notificationCount is 0 and theme is an empty string.
const userWithEmptyValues = { notificationCount: 0, theme: "" };

// Parse the user profile and assign default values.
function parseUser(user) {
  return {
    displayName: user.displayName || "Guest User",
    theme: user.theme || "light",
    maxResults: user.maxResults || 10,

    lastLogin: user.lastLogin ?? "Never",
    notificationCount: user.notificationCount ?? 0
  };
}

console.log("User 1:", parseUser(userMissing));
console.log("User 2:", parseUser(userWithEmptyValues));
// **`||` (logical OR):** Uses the default when the value is falsy, including an empty string (`""`) or zero (`0`). Therefore, the empty `theme` becomes `"light"`.
// **`??` (nullish coalescing):** Uses the default only when the value is `null` or `undefined`. Therefore, `notificationCount: 0` remains `0`, because zero is a valid notification count.
// Although both operators use defaults for missing fields, they handle empty strings and zero differently. 

// Part C
// Test user 1: Full address data.
const userFull = {
 name: "Lerato",
 address: {
 city: "Johannesburg"
 }
};

// Test user 2: The address property is missing.
const userNoAddress = {
  name: "Thando"
};

// Test user 3: The entire user object is null.
const userNull = null;

const users = [
  { label: "Full data", user: userFull },
  { label: "Missing address", user: userNoAddress },
  { label: "Null user", user: userNull }
];
// Technique 1: && guard clauses.
 const cityWithAnd =
 user && user.address && user.address.city;

// Technique 2: Optional chaining.
 const cityWithOptionalChaining =
 user?.address?.city;

// Technique 3: Optional chaining with a default.
 const cityWithDefault =
 user?.address?.city ?? "Unknown city";

  console.log(item.label);
  console.log("Using &&:", cityWithAnd);
  console.log("Using ?.:", cityWithOptionalChaining);
  console.log("Using ?. with default:", cityWithDefault);

// Part D:

// Expected output: "finally"
// Expected type: "string"
const result1 = null || undefined || 0 || "" || "finally";
console.log("1.", result1, "| Type:", typeof result1);

// Expected output: 0
// Expected type: "number"
const result2 = null ?? undefined ?? 0 ?? "" ?? "finally";
console.log("2.", result2, "| Type:", typeof result2);

// Expected output: "first truthy"
// Expected type: "string"
const result3 = 0 || "first truthy";
console.log("3.", result3, "| Type:", typeof result3);

// Expected output: 0
// Expected type: "number"
const result4 = 0 ?? "first non-nullish";
console.log("4.", result4, "| Type:", typeof result4);

// Expected output: false
// Expected type: "boolean"
const result5 = true && false && "never reached";
console.log("5.", result5, "| Type:", typeof result5);

// Expected output: "third"
// Expected type: "string"
const result6 = "first" && "second" && "third";
console.log("6.", result6, "| Type:", typeof result6);

// Expected output: "yes"
// Expected type: "string"
const result7 = false || (true && "yes");
console.log("7.", result7, "| Type:", typeof result7);

// Expected output: "yes"
// Expected type: "string"
const result8 = (false || true) && "yes";
console.log("8.", result8, "| Type:", typeof result8);

// Expected output: 3
// Expected type: "number"
const result9 = 1 && 2 && 3;
console.log("9.", result9, "| Type:", typeof result9);

// Expected output: undefined
// Expected type: "undefined"
const result10 = null?.foo?.bar?.baz;
console.log("10.", result10, "| Type:", typeof result10);

