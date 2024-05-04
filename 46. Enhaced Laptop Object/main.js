"use strict";
let laptop = {
    make: "Dell",
    model: "IH9DMQU",
    Year: 2024,
    describe: function () {
        console.log(`This laptop is a ${this.Year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
