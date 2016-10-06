function findVariableNamesInSentences(input) {
    let regex = new RegExp(/_(\w+)/g);
    let result = [];
    let match = regex.exec(input[0]);
    while (match !== null) {
        result.push(match[1]);
        match = regex.exec(text);
    }
    console.log(result.join(','))
}