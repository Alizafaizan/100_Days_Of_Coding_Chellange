"use strict";
function makeSandwiche(item) {
    console.log("\nMaking snadwich with ingrediants:");
    item.forEach(element => console.log("- " + element));
    console.log('Layer ingrediants thoutfully to ensure even distribution then cut sandwiches neatly and evenly and Enjoy your sandwich !\n');
}
makeSandwiche(['Bread', 'Chesse', 'lettuce', 'souces']);
makeSandwiche(['Bread', 'Chicken', 'Chesse', 'lettuce', 'souces', 'egg']);
makeSandwiche(['Bread', 'Beef Boti', 'Chesse', 'lettuce', 'souces']);
