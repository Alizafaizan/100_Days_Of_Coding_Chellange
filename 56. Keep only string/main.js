"use strict";
//A mixed baag of items
let miXTypes = ["Apple", 2, "Banana", 3, "cabbage", true];
//Pick out only the words 
let stringsArray = miXTypes.filter(item => typeof item === "string");
//shoe the list of just words
console.log(stringsArray);
//This line checks each item: if its a word, it  goes into the new list.
