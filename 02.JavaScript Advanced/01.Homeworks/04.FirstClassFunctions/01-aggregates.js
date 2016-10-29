function aggregate (input) {
    input = input.map(Number);
    let sum = input.reduce((a, b) => a + b);
    console.log(`Sum = ${sum}`);
    let min = Math.min.apply(null, Array.from(input));
    console.log(`Min = ${min}`);
    let max = Math.max.apply(null, Array.from(input));
    console.log(`Max = ${max}`);
    let product = input.reduce((a, b) => a * b);
    console.log(`Product = ${product}`);
    let join = input.reduce((a, b) => a + '' + b);
    console.log(`Join = ${join}`);
}
