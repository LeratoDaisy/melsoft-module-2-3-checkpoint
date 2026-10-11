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