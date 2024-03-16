"use strict";
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); //Deafult large and message
make_shirt("medium"); //deafult message ,medium size\
make_shirt("small", "Dive into Coding"); //Custom message, small size
