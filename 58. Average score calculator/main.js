"use strict";
// This program calculate the average of all score given 
function avrageScore(...scores) {
    //Add all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
//Example: finding the average of your scores
console.log(avrageScore(80, 90, 100, 70)); // show the average score 
// we add  up all the scores, then divided by how many there are.
