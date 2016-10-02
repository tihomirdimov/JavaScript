function smallestTwoNumbers(input) {
    input.sort((a, b) => a-b);
    let result = input.slice(0, 2);
    return result.join(' ');
}

