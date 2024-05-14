function swapValues() {
    let a = 5,
        b = 10;
        console.log("Before swap: a =", a, "b =", b);
        let tamporarily  = a;
        a = b;
        b = tamporarily
        console.log("After swap: a =", a, "b =", b);       
}
swapValues();