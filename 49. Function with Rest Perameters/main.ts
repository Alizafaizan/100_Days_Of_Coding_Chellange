// Define a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies: string[]){
    //loops through each hobby in the array
    hobbies.forEach((hobby) => {
        //logs a statment for each hobby
        console.log(` i enjoy ${hobby}.`)
    });
}
//calls the function with the hobbies
logHobbies("Coding", "Cooking", "Cleaning");
