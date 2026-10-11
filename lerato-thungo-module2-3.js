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

const salaryGross = 45000;
const taxRate = 0.25;
const taxAmount = salaryGross * taxRate;
const uifRate = 0.01;
const uifAmount = salaryGross * uifRate;
const medicalAid = 2500;

const netSalary = salaryGross - taxAmount - uifAmount - medicalAid;
const remainder = netSalary % 100;

console.log("Net salary " + netSalary + ". Remainder after dividing by 100: " + remainder);

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

const userIsLoggedIn = true;
const isEmailVerified = false;
const isAdmin = false;

const canAccessDashboard = (userIsLoggedIn && isEmailVerified) || isAdmin;

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


// Challenge 7: Part A

console.log("1. typeof 42:", typeof 42);
// Expected: "number"

console.log("2. typeof 'hello':", typeof "hello");
// Expected: "string"

console.log("3. typeof true:", typeof true);
// Expected: "boolean"

console.log("4. typeof undefined:", typeof undefined);
// Expected: "undefined"

console.log("5. typeof null:", typeof null);
// Expected: "object" (historical JavaScript quirk)

console.log("6. typeof {}:", typeof {});
// Expected: "object"

console.log("7. typeof []:", typeof []);
// Expected: "object" (arrays are objects in JavaScript)

console.log("8. typeof function() {}:", typeof function() {});
// Expected: "function"

console.log("9. typeof NaN:", typeof NaN);
// Expected: "number"

console.log(
  "10. typeof undeclaredVariable:",
  typeof undeclaredVariable
);
// Expected: "undefined"
// typeof does not throw for an undeclared identifier.

// One-liner 
console.log(Array.isArray([])); // true: array
console.log(Array.isArray({})); // false: plain object

// Part B 

// An array is an instance of Array
console.log("1.", [] instanceof Array); // true

// Arrays also inherit through Object
console.log("2.", [] instanceof Object); // true

// A plain object is an instance of Object
console.log("3.", {} instanceof Object); // true

// A primitive string is not a String object
console.log("4.", "hello" instanceof String); // false

// new String() creates a String object
console.log("5.", new String("hello") instanceof String); // true

// A primitive number is not a Number object
console.log("6.", 42 instanceof Number); // false

// new Date() creates a Date object
console.log("7.", new Date() instanceof Date); // true

// /abc/ creates a regular expression object
console.log("8.", /abc/ instanceof RegExp); // true

// typeof vs instanceof
// typeof is appropriate for checking primitive types, while instanceof is appropriate for checking a specific object type.

// Part C

// 1. Delete a property from an object
const userToDelete = { name: "Lerato", age: 25, role: "student" };
console.log("Before deleting role:", userToDelete);
delete userToDelete.role;

console.log("After deleting role:", userToDelete);
// The role property is removed, but the other properties remain.

// 2. Attempt to delete a variable
let x = 5; // The delete operator cannot delete variables declared with let, const, or var.

// 3. Delete an array element
const arr = [1, 2, 3, 4];
delete arr[1];

console.log("Array after delete:", arr); // [1, empty, 3, 4]
console.log("Array length:", arr.length); // 4
console.log("Element at index 1:", arr[1]); // undefined
// deleting an array leaves an empty slot and somehow does not reduce the array's length.

// 4. Attempt to delete Math.PI
console.log("Delete Math.PI:", delete Math.PI); // false
console.log("Math.PI:", Math.PI); // 3.141592653589793
// Math.PI is non-configurable, meaning it cannot be removed with delete.

// Final question
const items = ["apple", "banana", "orange", "grape"];
items.splice(1, 1);

console.log("Items after removing banana:", items);
// ["apple", "orange", "grape"]

// Challenge 8 
const READ = 1;   
const WRITE = 2;  
const DELETE = 4; 
const ADMIN = 8;  

// 2. Create a user with READ and WRITE permissions
let user = READ | WRITE;
console.log("Initial user permissions:", user); // 3

// 3. Create an admin user with all permissions
const adminUser = READ | WRITE | DELETE | ADMIN;
console.log("Admin permissions:", adminUser); // 15

// 4. Check whether the first user has READ permission
console.log( "Has READ?", (user & READ) !== 0 ? "Yes" : "No" ); // Yes

// 5. Check whether the first user has DELETE permission
console.log( "Has DELETE?", (user & DELETE) !== 0 ? "Yes" : "No" ); // No

// 6. Grant DELETE permission to the first user
user |= DELETE;
console.log("After granting DELETE:", user); // 7

// 7. Revoke WRITE permission from the first user
user &= ~WRITE;
console.log("After revoking WRITE:", user); // 5

// 8. Toggle ADMIN permission on and then off
let toggleUser = READ | WRITE;
console.log(
 "ADMIN before toggle:",
 (toggleUser & ADMIN) !== 0 ? "ON" : "OFF"
); // OFF

toggleUser ^= ADMIN;
console.log(
    "ADMIN after first toggle:",
    (toggleUser & ADMIN) !== 0 ? "ON" : "OFF"
); // ON

toggleUser ^= ADMIN;
console.log(
    "ADMIN after second toggle:",
    (toggleUser & ADMIN) !== 0 ? "ON" : "OFF"
); // OFF

// 9. Create SUPER_ADMIN using the left-shift operator
const SUPER_ADMIN = ADMIN << 1;
console.log("SUPER_ADMIN permission flag:", SUPER_ADMIN); // 16

// Challenge 9: SCENARIO 1
const grossSalary = 45000;

function formatZAR(amount) {
  return `R ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function calculatePayroll(gross) {
  const paye = gross * 0.25;
  const uif = Math.min(gross * 0.01, 177.12);
  const medicalAid = 2500;
  const pension = gross * 0.075;

  const totalDeductions = paye + uif + medicalAid + pension;
  const netSalary = gross - totalDeductions;

console.log("\n--- PAYROLL PROCESSOR ---");
console.log("Gross salary:", formatZAR(gross));
console.log("PAYE:", formatZAR(paye));
console.log("UIF:", formatZAR(uif));
console.log("Medical aid:", formatZAR(medicalAid));
console.log("Pension:", formatZAR(pension));
console.log("Total deductions:", formatZAR(totalDeductions));
console.log("Net salary:", formatZAR(netSalary));
}

calculatePayroll(grossSalary);

const grossSalaryInput = "45000";
const convertedSalary = Number(grossSalaryInput);

if (!Number.isNaN(convertedSalary) && convertedSalary > 0) {
    console.log("\nValid salary input received.");
    calculatePayroll(convertedSalary);
} else {
    console.log("Invalid salary. Enter a positive number.");
}

// SCENARIO 2
const principal = 25000;
const annualRate = 0.075;
const compoundsPerYear = 12;
const years = 3;

const finalBalance = principal * (1 + annualRate / compoundsPerYear) ** (compoundsPerYear * years);
const totalInterest = finalBalance - principal;
const effectiveAnnualRate = ((1 + annualRate / compoundsPerYear) ** compoundsPerYear - 1) * 100;

console.log("\n COMPOUND INTEREST SAVINGS");
console.log("Initial deposit:", formatZAR(principal));
console.log("Final balance:", formatZAR(finalBalance));
console.log("Total interest earned:", formatZAR(totalInterest));
console.log("Effective annual rate:", `${effectiveAnnualRate.toFixed(2)}%`);

function calculateMonthlyFee(balance) {
  return balance < 1000 ? 25
    : balance < 5000 ? 50
    : balance < 25000 ? 75
    : 0;
}

const testBalances = [500, 1500, 10000, 50000];
console.log("\n MONTHLY AND ANNUAL FEES ");
testBalances.forEach(balance => {
    const monthlyFee = calculateMonthlyFee(balance);
    const annualFee = monthlyFee * 12;

console.log(`Balance: ${formatZAR(balance)}`);
console.log(`Monthly fee: ${formatZAR(monthlyFee)}`);
console.log(`Annual fee impact: ${formatZAR(annualFee)}`);
console.log("");
});

// SCENARIO 3
const transferAmountZAR = 15750.33;
const commissionRate = 0.025;
const exchangeRate = 18.42;

const commissionZAR = transferAmountZAR * commissionRate;
const amountAfterCommission = transferAmountZAR - commissionZAR;
const amountUSD = amountAfterCommission / exchangeRate;

function formatUSD(amount) {
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

console.log("\n MULTI-CURRENCY TRANSFER");
console.log("Original ZAR amount:", formatZAR(transferAmountZAR));
console.log("Commission:", formatZAR(commissionZAR));
console.log("ZAR after commission:", formatZAR(amountAfterCommission));
console.log("USD received:", formatUSD(amountUSD));

// JavaScript uses binary floating point numbers for ordinary number calculations. Some decimal fractions cannot be represented exactly in binary. For example, 0.1 + 0.2 produces 0.30000000000000004 rather than exactly 0.3.
// This may cause small rounding differences in money calculations.
// A bank would typically use integer minor units (such as cents) or an appropriate fixed point or decimal arithmetic system, with defined rounding rules.
// Financial systems must also account for currency precision, transaction rules, and the rounding required by the relevant banking regulations.

// Challenge 11
var item1Price = "199.99";
var item2Price = "49.50";
var item3Price = 125;
var quantity = "2";
var discountCode = "SAVE10";
var isLoggedIn = "true";
var customerAge = null;

var subtotal = item1Price + item2Price + item3Price * quantity;
console.log("Subtotal:", subtotal);

var discount = discountCode == "SAVE10" ? 0.1 : 0;
var discountAmount = subtotal * discount;
var afterDiscount = subtotal - discountAmount;
var vat = afterDiscount * 0.15;
var total = afterDiscount + vat;

var canCheckout = isLoggedIn && customerAge > 18;
console.log("Can checkout?", canCheckout);

var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;
var finalTotal = total - seniorDiscount;

console.log("Total: R" + finalTotal.toFixed(2));

// PART 2

// 1. Bug: item1Price is stored as a string.
// Original: var item1Price = "199.99"; Explanation: A price should be stored as a number so arithmetic operations do not accidentally join text together.

// 2. Bug: item2Price is stored as a string.
// Original: var item2Price = "49.50"; Explanation: Storing this price as text can cause the plus operator to concatenate strings instead of adding prices.

// 3. Bug: quantity is stored as a string.
// Original: var quantity = "2"; Explanation: Quantity should be a number to avoid relying on JavaScript's automatic type conversion during calculations.

// 4. Bug: The subtotal calculation mixes strings and numbers.
// Original: var subtotal = item1Price + item2Price + item3Price * quantity; Explanation: The plus operator can concatenate the first two string prices, producing an incorrect subtotal.

// 5. Bug: Operator precedence may produce the wrong subtotal.
// Original: var subtotal = item1Price + item2Price + item3Price * quantity; Explanation: Multiplication happens before addition, so only item3Price is multiplied by quantity; use parentheses if the quantity is meant to apply to the entire cart.

// 6. Bug: Loose equality is used for the discount code.
// Original: var discount = discountCode == "SAVE10" ? 0.1 : 0; Explanation: The == operator permits type coercion, whereas === checks that both the value and type match.

// 7. Bug: isLoggedIn is stored as a string.
// Original: var isLoggedIn = "true"; Explanation: A non-empty string is truthy even if its contents are "false", so login status should be a Boolean value.

// 8. Bug: The customer's age is unknown.
// Original: var customerAge = null; Explanation: The program must treat an unknown age as missing information rather than assuming the customer has a usable age.

// 9. Bug: Checkout relies on an unchecked age comparison.
// Original: var canCheckout = isLoggedIn && customerAge > 18; Explanation: Checkout eligibility should explicitly validate the login status and age before allowing checkout.

// 10. Bug: Comparing null with 18 can be misleading.
// Original: customerAge > 18 Explanation: JavaScript converts null to 0 in this comparison, which can make missing age information behave like a real age.

// 11. Bug: The senior discount returns null when not applicable.
// Original: var seniorDiscount = customerAge >= 60 ? total * 0.05 : null; Explanation: Returning 0 instead of null gives the discount a consistent numeric value for calculations.

// 12. Bug: The final total subtracts a potentially null discount.
// Original: var finalTotal = total - seniorDiscount; Explanation: JavaScript silently converts null to 0 during subtraction, hiding the missing discount value.

// 13. Bug: The final amount is formatted without validating the result.
// Original: console.log("Total: R" + finalTotal.toFixed(2)); Explanation: If an earlier calculation produces NaN, the program can display an invalid total instead of handling the error.

// PART 3
// Store prices and quantity as numbers.
const item1Price = 199.99;
const item2Price = 49.50;
const item3Price = 125;
const quantity = 2;

const discountCode = "SAVE10";
const isLoggedIn = true;

// The customer's age is unknown.
const customerAge = null;

// Calculate the subtotal.
// Assumption: quantity applies to the entire cart.
const subtotal = (item1Price + item2Price + item3Price) * quantity;

console.log("Subtotal:", subtotal.toFixed(2));

// Apply the discount using strict equality.
const discount = discountCode === "SAVE10" ? 0.1 : 0;
const discountAmount = subtotal * discount;
const afterDiscount = subtotal - discountAmount;

// Calculate VAT and total.
const vat = afterDiscount * 0.15;
const total = afterDiscount + vat;

// Validate the age before making age-based decisions.
const hasValidAge =
    customerAge !== null &&
    Number.isFinite(customerAge) &&
    customerAge >= 0;

// Check checkout eligibility.
const canCheckout =
    isLoggedIn === true &&
    hasValidAge &&
    customerAge > 18;

console.log("Can checkout?", canCheckout);

// Apply the senior discount only when age is known and at least 60.
const seniorDiscount =
    hasValidAge && customerAge >= 60
        ? total * 0.05
        : 0;

// Calculate the final total.
const finalTotal = total - (seniorDiscount ?? 0);

// Format currency consistently.
function formatZAR(amount) {
    if (!Number.isFinite(amount)) {
        return "Invalid amount";
    }

    return `R ${amount.toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

console.log("Discount:", formatZAR(discountAmount));
console.log("VAT:", formatZAR(vat));
console.log("Senior discount:", formatZAR(seniorDiscount));
console.log("Total:", formatZAR(finalTotal))

// Challenge 12
// 1. What is the ONE most important thing you understood about JavaScript's type system from this project? Give an example where it bit you.
// The most important thing I learned is that JavaScript can automatically convert values between types, and that can cause unexpected results. For example, when I worked with prices stored as strings, using the plus operator could join the values together instead of adding them mathematically. I learned that I should check the type of a value and convert it explicitly when necessary.

// 2. Explain in your own words why using === is almost always safer than ==. Give one concrete case where == would silently cause a bug.
// I learned that === checks both the value and the type, while == can convert values before comparing them. For example, 0 == false evaluates to true, even though a number and a Boolean are different types. Using === helps me avoid unexpected matches and makes my conditions easier to understand.

// 3. When would you prefer the nullish coalescing operator (??) over the logical OR operator (||)? Give a specific example where swapping one for the other changes the outcome.
// I would use ?? when I only want to provide a default value if something is null or undefined. For example, if a customer has a discount of 0, the expression discount ?? 10 keeps the value as 0, while discount || 10 returns 10. This matters because zero can be a valid value and should not always be treated as missing.

// 4. typeof null returns 'object'. Explain WHY (the historical reason), and describe how you would check if a variable is specifically null without being tricked.
// This is a historical JavaScript bug that has been kept for compatibility with older code. The typeof operator reports null as "object", even though null represents the intentional absence of a value. To check whether a variable is specifically null, I would use value === null instead of relying on typeof.

// 5. Describe a realistic scenario in production code where forgetting to cast a value would cause a bug a developer might not notice for a long time.
// A realistic example is processing an amount received from an API or an HTML input field. The value might arrive as a string even though it represents a number. If I forget to convert it before calculating totals, I could accidentally concatenate values or get an incorrect calculation. I would validate the input and convert it to a number before using it.

// 6. In your banking calculator for Challenge 9, you had to handle floating-point arithmetic for money. Explain in your own words why 0.1 + 0.2 does NOT equal 0.3 in JavaScript, and the production-grade solution.
// JavaScript uses binary floating-point numbers, and some decimal fractions cannot be represented exactly in that format. That is why 0.1 + 0.2 produces a result close to, but not exactly, 0.3. For real financial systems, I would store money in integer minor units, such as cents, or use a suitable decimal arithmetic library. I would also apply the required rounding rules consistently.

// 7. Explain the difference between the single-character operators (& and |) and the double-character operators (&& and ||). Give one case where confusing them would cause a silent production bug.
// The single-character operators & and | perform bitwise operations on numbers, while && and || are logical operators commonly used with conditions. For example, if I use & instead of && when checking whether a user is logged in and has permission to access a page, JavaScript may perform a bitwise operation rather than the intended logical check. This can produce an incorrect permission result without an obvious error.

// 8. What was the single hardest Module 2 or Module 3 concept for you to grasp, and what finally made it click?
// The hardest concept for me was type conversion and coercion. At first, I found it confusing that JavaScript could treat values differently depending on the operation, especially when working with strings and numbers. It started to make sense when I worked through practical examples involving prices and calculations. I realised that I need to understand the type of each value instead of assuming JavaScript will handle it the way I expect.