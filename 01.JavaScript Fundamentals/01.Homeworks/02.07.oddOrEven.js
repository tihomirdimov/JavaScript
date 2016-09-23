function oddOrEven(input) {
    let rem = input % 2;
    if (rem == 0) {
        console.log("even");
    }
    else if (rem == Math.round(rem)) {
        console.log("odd");
    }
    else {
        console.log("invalid");
    }
}
