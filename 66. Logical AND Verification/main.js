"use strict";
//This function sees if both inputs are true 
function checkBothTrue(val1, val2) {
    //only says true if both val1 and val2 are true
    return val1 && val2;
}
//Trying it with true and false
console.log(checkBothTrue(true, false)); //shows false
// it checks two things, but since one is false, the answer is false
