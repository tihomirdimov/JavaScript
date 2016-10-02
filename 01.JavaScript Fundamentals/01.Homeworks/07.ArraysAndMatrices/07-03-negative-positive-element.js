function negativePositiveNumbers(input) {
    input = input.map(Number);
    let result = [];
    for (num of input)
        if (num < 0) {
            result.unshift(num);
        }
        else {
            result.push(num);
        }
    console.log(result.join('\n'));
}

