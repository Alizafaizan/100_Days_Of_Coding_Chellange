"use strict";
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
const numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers));
