"use strict";
function replaceBananaToMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Cherry"];
replaceBananaToMango(fruits);
console.log(fruits);
