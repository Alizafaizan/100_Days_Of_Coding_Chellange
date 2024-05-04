"use strict";
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => ([key] = value));
    return car;
}
console.log(make_car("Toyota", "corrolla", ["color", "red"], ["year", "2020"]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", "true"]));
