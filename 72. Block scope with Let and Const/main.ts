{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); //works fine here
    console.log(blockConst); //Also work fine here  
}
try {
    console.log(blockLet); //This will Fail   
} catch (error) {
    console.log("`blockLet`is not accessible outside the block.");  
} // This shows thst `let` and `const` keep veriables safe inside the block where the're defined.

try {
    console.log(blockConst); //This will also Fail   
} catch (error) {
    console.log("`blockConst`is not accessible outside the block.");  
} // This shows thst `let` and `const` keep veriables safe inside the block where the're defined.
