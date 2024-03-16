// Question no 24: More conditional tests

// • Tests for  equality and inequality with strings
console.log("Equality test with strings:", "Apple" === "Apple");

// Inequality test 
console.log("Inequality test with string:", ("PC" as string) === "Laptop");

// • Tests using the lower case function
console.log("Lower case funtion test:", "ALIZA FAIZAN".toLowerCase() === "aliza faizan");

// • Numerical tests involving equality and inequality
console.log("Equality test with number:", 10 === 10);

// Inequality test with number
console.log("Inequality test with number:", 10 < 9);

// Greater than and Less than
console.log("greater than test: ", 20 > 10);

// Less than test
console.log("Less then test:", 20 < 10);

// Greater than or equal to
console.log("Greater than or equal to test:", 10 >= 10);

// Less than or equal to
console.log("Less than or equal to test:", 10 <= 5);

// • Tests using "and"(&&) and "or"(||) operators
console.log("And operator test:", 5 === 5 && 10 < 5);

// Test using "Or"(||) operator
console.log("Or operator test:", 5 === 5 || 10 > 5);

// • Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"]
console.log("is 'apple' in fruits?");
console.log(fruits.includes("apple"));

// • Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));



