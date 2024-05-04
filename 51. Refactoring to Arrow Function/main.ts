//original function for calculating the area of rectangle
function calculateArea(width: number, height: number) : number {
    return width * height;
}

//refactored into an arrow function
let calculateAreaArrow = (width: number, height: number):number => width * height;

//Example usage of the arrow function
console.log(calculateAreaArrow(5, 7));

  
