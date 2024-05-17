"use strict";
function logObjectProperties(obj) {
    let property;
    for (let property in obj) {
        console.log(`${property}:${obj[property]}`);
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// function logObjectProperties(obj: { [key: string]: any }): void {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`Property: ${key}, Value: ${obj[key]}`);
//         }
//     }
// }
// const exampleObj = {
//     name: "Aliza",
//     age: 24,
//     city: "Wonderland"
// };
// logObjectProperties(exampleObj);
