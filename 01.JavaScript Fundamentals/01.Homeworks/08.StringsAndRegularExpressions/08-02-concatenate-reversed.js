function concatenateReversed(input) {
    let allStrings = input.join('');
    let chars = Array.from(allStrings);
    let revChars = chars.reverse();
    let revStr = revChars.join('');
    return revStr;
}
