"use strict";
//Making a list (enum) for different types of vehicles
var VhicleType;
(function (VhicleType) {
    VhicleType[VhicleType["Car"] = 0] = "Car";
    VhicleType[VhicleType["Truck"] = 1] = "Truck";
    VhicleType[VhicleType["Motorcycle"] = 2] = "Motorcycle";
})(VhicleType || (VhicleType = {}));
//showing one type of vehicle from the list
console.log(VhicleType.Car); //it shows 0 beacuse enums start counting from 0 
//Here, we're just checking what number the car category got in our list.
