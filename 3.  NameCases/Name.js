"use strict";
const personName = "Governor Sindh Kamran Khan Tassori";
console.log(`Name in uppercase : ${personName.toUpperCase()}`);
console.log(`Name in lowercase : ${personName.toLowerCase()}`);
console.log(`Name in titlecase : ${personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ')})`);
