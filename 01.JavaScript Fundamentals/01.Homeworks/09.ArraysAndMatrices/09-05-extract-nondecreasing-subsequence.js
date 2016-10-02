function extractNondecreasingSubsequence(input) {
    input = input.map(Number);
    console.log(input[0]);
    let currentLargest = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i]>= currentLargest) {
            currentLargest = input[i];
            console.log(input[i]);
        }
    }
}
