function findOccurrencesOfWordInSentence(input) {
    let text = input[0].toLowerCase();
    let word = input[1].toLowerCase();
    let regex = new RegExp("\\b"+word+"\\b","g");
    let matches = text.match(regex);
    if (matches) {
        console.log(matches.length);
    } else {
        console.log(0);
    }
}
