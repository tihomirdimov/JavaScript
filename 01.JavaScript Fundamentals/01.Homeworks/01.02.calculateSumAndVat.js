function calculateSumAndVat(input) {
    let sum = 0;
    for (let num of input) {
        sum += Number(num);
    }
    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.2);
    console.log("total = " + sum * 1.2);
}