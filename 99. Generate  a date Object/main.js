"use strict";
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const Birthday = new Date(year, month - 1, day);
    if (Birthday < today) {
        Birthday.setFullYear(year + 1);
    }
    return Birthday;
}
const nextBirthday = getNextBirthday(2, 10);
console.log("Next Birthday on:", nextBirthday.toLocaleDateString());
