function formatHelper(input) {
    let result = input[0];
    result = result.replace(/\s*\.\s*/g, ". ");
    result = result.replace(/\s*\,\s*/g, ", ");
    result = result.replace(/\s*\!\s*/g, "! ");
    result = result.replace(/\s*\?\s*/g, "? ");
    result = result.replace(/\s*\:\s*/g, ": ");
    result = result.replace(/\s*\;\s*/g, "; ");
    result = result.replace(/\.\s*\.\s*\.\s*\!/g, "...!");
    let dotBeforeDigitsPattern = /\.\s+\d/g;
    let matches = dotBeforeDigitsPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(" ", "");
        result = result.replace(matches[0], replacement);
        matches = dotBeforeDigitsPattern.exec(result);
    }
    let quotationPattern = /\".*\"/g;
    matches = quotationPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(/\s+\"/g, `"`);
        replacement = replacement.replace(/\"\s+/g, `"`);
        result = result.replace(matches[0], replacement);
        matches = quotationPattern.exec(result);
    }
    console.log(result);
}

formatHelper(['Terribly formatted text   .  With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .   Make,sure to give:proper spacing where is needed... ! ']);