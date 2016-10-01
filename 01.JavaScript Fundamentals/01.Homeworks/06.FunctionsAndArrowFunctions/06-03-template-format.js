function solve (input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`);
    for (let i = 0; i < input.length - 1; i += 2) {
        let question = input[i];
        let answer = input[i + 1];
        console.log(`<question>\n${question}\n</question>`);
        console.log(`<answer>\n${answer}\n</answer>`);
    }
    console.log(`</quiz>`);
}
