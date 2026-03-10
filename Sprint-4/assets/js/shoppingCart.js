const STORE_NAME = 'TechShop';
const TAX_RATE = 0.13;
// Shopping Cart Variables
let subtotal = 0.00;
let taxAmount = 0.00;
let total = 0.00;


let itemName = 'Wireless Mouse';
let itemPrice = 29.99;
let quantity = 3;

// Subtotal, TaxAmount, Total
// subtotal = itemPrice * quantity
subtotal = itemPrice * quantity;
// taxAmount = subtotal * TAX_RATE
taxAmount = subtotal * TAX_RATE;
// total = subtotal + taxAmount
total = subtotal + taxAmount;

// Output the results to the console
console.log(`Store: ${STORE_NAME}`);
console.log('Item: ' + itemName);
console.log('Price: $' + itemPrice);

