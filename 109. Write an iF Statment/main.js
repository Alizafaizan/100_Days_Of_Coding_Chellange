"use strict";
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
console.log("------------------------------");
const currentTime1 = new Date();
if (currentTime.getHours() > 12) {
    console.log("Good Night");
}
