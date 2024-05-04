"use strict";
// This program makes a function that adds a specific number
function magicBox(valueToAdd) {
    //This is the magic box. it takes a number add yours special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
//Making a magic box that adds 5 
let addFive = magicBox(5);
console.log(addFive(10)); //ifwe put 10 in the box, it gives us 15
//wemade a function (magic box) that adds 5 to any number.
