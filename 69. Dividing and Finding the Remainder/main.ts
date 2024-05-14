function divideAndReminder(dividend: number, divisor: number) : {quotient: number, remainder: number} {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return {quotient, remainder};
}
console.log(divideAndReminder(10, 3));