"use strict";
//original function for calculating the area of rectangle
function calculateArea(width, height) {
    return width * height;
}
//refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
//Example usage of the arrow function
console.log(calculateAreaArrow(5, 7));
