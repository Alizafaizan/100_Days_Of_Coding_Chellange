"use strict";
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
console.log("-----------------------------------");
function isDivisibleByFourAndFive(number) {
    return number % 4 === 0 && number % 5 === 0;
}
console.log(isDivisibleByFourAndFive(20));
console.log(isDivisibleByFourAndFive(24));
