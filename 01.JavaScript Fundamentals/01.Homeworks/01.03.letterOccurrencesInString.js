function findOccurances(input) {
    let text = input[0]
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == input[1]) {
            count++;
        }
    }
    return count;
}