const STORE_NAME = 'TechShop';
const TAX_RATE = 0.13;
// Shopping Cart Variables
let subtotal = 0.00;
let taxAmount = 0.00;
let total = 0.00;
let specialDiscount = 0;

/*
If the customer buy more than 2 items will get 20%
  3, 4
If the customer buy 2 items will get 5%
If the customer buy 1 item will get 0%
If the customer buy 5 or more items will get 28%
  5, 6, ..... 28%
*/
let itemName = 'Wireless Mouse';
let itemPrice = 29.99;
let quantity = 8;

// console.log( 1 > 1);
// Calculate if the customer receives an special discount
if (quantity >= 5) {
    specialDiscount = (itemPrice * quantity) * 0.28;
} else if ( (quantity > 2)  && (quantity <= 4) ){
    specialDiscount = (itemPrice * quantity) * 0.20;
} else if ( (quantity > 1) && (quantity <= 2)) {
    specialDiscount = (itemPrice * quantity) * 0.05;
} else {
    specialDiscount = (itemPrice * quantity) * 0;
}

// Subtotal, TaxAmount, Total
// subtotal = itemPrice * quantity
subtotal = (itemPrice * quantity) - specialDiscount;
// taxAmount = subtotal * TAX_RATE
taxAmount = subtotal * TAX_RATE;
// total = subtotal + taxAmount
total = subtotal + taxAmount;

// Output the results to the console
console.log(`Store: ${STORE_NAME}`);
console.log('Item: ' + itemName);
console.log('Price: $' + itemPrice);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log('Discount: $' + specialDiscount.toFixed(2));
console.log(`Tax: $${taxAmount.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
