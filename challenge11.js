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
