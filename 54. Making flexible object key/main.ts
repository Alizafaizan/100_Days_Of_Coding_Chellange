/// A way to make a flexible list function 
 function createObjectWithDynamicKey(key: string, value: string)  {
    let dynamicObject = {};
    //setting up  a section in the list with a changable name 
    dynamicObject[Key] = value;
    return dynamicObject;
}

//using the flexible list setup for a user's preferance
let userPreferance = createObjectWithDynamicKey("theme", "dark");

//showing the user's choice 
console.log(userPreferance);