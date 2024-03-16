"use strict";
//Question 21
Object.defineProperty(exports, "__esModule", { value: true });
//  Write a program that creates Objects containing these items.
let book = {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    publishedYear: 1937
};
console.log(`Book info: ${book.title} by ${book.author}, published in ${book.publishedYear}`);
let teaRecipe = {
    ingredients: "Milk, Suger and Lipton tea",
    cookingTime: 15
};
console.log(`teaRecipe info: ${teaRecipe.ingredients} to cooked on ${teaRecipe.cookingTime} mints`);
let eidDresses = {
    fabric: "Cotton, Lown, Organza",
    Type: "Embrioded and printed",
    quntity: 3
};
console.log(`eidDresses info. ${eidDresses.fabric} on ${eidDresses.Type} totaly ${eidDresses.quntity} dresses on eid.`);
