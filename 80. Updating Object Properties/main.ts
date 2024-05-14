
interface Car {
    make : string;
    model: string;
    year: number;
    color?: string;
}
let car: Car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2019
  };
  
  car.color = 'red';  // Adding the color property
  car.year = 2021;    // Updating the year property
  
  console.log(car);
  