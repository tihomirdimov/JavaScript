function printEveryNthElement(input) {
    let n = Number(input.pop());
    for (let i = 0; i < input.length; i+=n) {
        console.log(input[i]);
    }
}