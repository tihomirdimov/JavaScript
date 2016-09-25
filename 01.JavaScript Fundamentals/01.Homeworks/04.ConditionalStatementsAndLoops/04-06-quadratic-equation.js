function quadraticEquation(input) {
    let [a,b,c,] = input.map(Number);
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        let x1 = ((-b + Math.sqrt(d)) / (2 * a));
        let x2 = ((-b - Math.sqrt(d)) / (2 * a));
        if (x1 < x2) {
            console.log(x1);
            console.log(x2);
        }
        else {
            console.log(x2);
            console.log(x1);
        }
    }
    else if (d == 0) {
        console.log(-b / (2 * a));
    }
    else {
        console.log("No")
    }
}