"use strict";
let laptop_price1 = [25000, 45000, 30000];
let laptop_price2 = [40000, 50000, 35000];
let combinedPrices = [...laptop_price1, ...laptop_price2].sort((b, c) => b - c);
console.log(combinedPrices);
