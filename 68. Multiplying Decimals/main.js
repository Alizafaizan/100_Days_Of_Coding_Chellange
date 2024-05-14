"use strict";
function multiplayDecimals(number1, num2) {
    return Math.round((number1 * num2) * 100) / 100;
}
console.log(multiplayDecimals(0.1, 0.2));
