//Question 21

import { table } from "console";

//  Write a program that creates Objects containing these items.
let book: {
    title: string; author: string; publishedYear: number} = {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        publishedYear: 1937
    };
    console.log(`Book info: ${book.title} by ${book.author}, published in ${book.publishedYear}`);

 let teaRecipe:{
    ingredients: string;  cookingTime: number} = {
       ingredients: "Milk, Suger and Lipton tea",
       cookingTime: 15
    };
    console.log(`teaRecipe info: ${teaRecipe.ingredients} to cooked on ${teaRecipe.cookingTime} mints`);
let eidDresses:{
    Type: string; fabric: string; quntity: number} = {
        fabric: "Cotton, Lown, Organza",
        Type: "Embrioded and printed",
        quntity: 3
    };
    console.log(`eidDresses info. ${eidDresses.fabric} on ${eidDresses.Type} totaly ${eidDresses.quntity} dresses on eid.`);


 


