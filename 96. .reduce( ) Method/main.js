"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
