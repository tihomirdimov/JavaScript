function countOccurences(input) {
    let count = 0;
    let index = input[1].indexOf(input[0]);
    while (index > -1) {
        count++;
        index = input[1].indexOf(input[0], index + 1);
    }
    return count;
}
