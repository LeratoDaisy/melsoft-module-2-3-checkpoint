// Challenge 11
// 1. Store prices as numbers
const item1Price = 199.99;
const item2Price = 49.50;
const item3Price = 125;
const quantity = 2;

const discountCode = "SAVE10";
const isLoggedIn = true;

// Age is unknown
const customerAge = null;

// 2. Calculate subtotal
// This preserves the original intention that quantity applies to item 3
const subtotal = item1Price + item2Price + item3Price * quantity;

console.log("Subtotal:", subtotal.toFixed(2));

// 3. Apply discount using strict equality
const discount = discountCode === "SAVE10" ? 0.1 : 0;
const discountAmount = subtotal * discount;
const afterDiscount = subtotal - discountAmount;

// 4. Calculate VAT and total
const vat = afterDiscount * 0.15;
const total = afterDiscount + vat;

// 5. Validate age before age-based decisions
const hasValidAge =
 customerAge !== null &&
 Number.isFinite(customerAge) &&
 customerAge >= 0;

// 6. Check checkout eligibility.
const canCheckout =
 isLoggedIn === true &&
 hasValidAge &&
 customerAge > 18;

console.log("Can checkout?", canCheckout);

// 7. Apply senior discount only when age is known and at least 60.
const seniorDiscount =
 hasValidAge && customerAge >= 60
  ? total * 0.05
  : 0;

// 8. Calculate final total.
const finalTotal = total - (seniorDiscount ?? 0);

// 9. Format currency consistently.
function formatZAR(amount) {
  return `R ${amount.toLocaleString("en-ZA", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
 })}`;
}

console.log("Discount:", formatZAR(discountAmount));
console.log("VAT:", formatZAR(vat));
console.log("Senior discount:", formatZAR(seniorDiscount));
console.log("Total:", formatZAR(finalTotal));
