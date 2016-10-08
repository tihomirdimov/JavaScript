function solve(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i].replace(
            /(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
            (m) => '|'.repeat(m.length)))
    }
}