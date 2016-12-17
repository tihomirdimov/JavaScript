function formatHelper(input) {
    let text = input[0];
    result = text.replace(/\s+/g, ' ');
    let matches;
    let quotationsBeforePattern = /\s*"\s*/g;
    matches = quotationsBeforePattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(" ", "");
        result = result.replace(matches[0], replacement);
        matches = quotationsBeforePattern.exec(result);
    }

    let quotationsAfterPattern = /\s*\\\"/g;
    matches = quotationsAfterPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(" ", "");
        result = result.replace(matches[0], replacement);
        matches = quotationsAfterPattern.exec(result);
    }

    result = result.replace(/\s*\,+\s*/g, ", ");
    result = result.replace(/\s*\:+\s*/g, ": ");
    result = result.replace(/\s*\;+\s*/g, "; ");
    result = result.replace(/\s*\?+\s*/g, "? ");

    let dotWordsPattern = /\w+\s*\.+\s*\w+/g;
    matches = dotWordsPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(/\s*\.+\s*/g, '. ');
        result = result.replace(matches[0], replacement);
        matches = dotWordsPattern.exec(result);
    }

    let dotAfterDigitsPattern = /\d\s+\./g;
    matches = dotAfterDigitsPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(" ", "");
        result = result.replace(matches[0], replacement);
        matches = dotAfterDigitsPattern.exec(result);
    }

    let dotBeforeDigitsPattern = /\.\s+\d/g;
    matches = dotBeforeDigitsPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(" ", "");
        result = result.replace(matches[0], replacement);
        matches = dotBeforeDigitsPattern.exec(result);
    }

    let dotBeforeExclamationPattern = /\.\s+\!/g;
    matches = dotBeforeExclamationPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(" ", "");
        result = result.replace(matches[0], replacement);
        matches = dotBeforeExclamationPattern.exec(result);
    }

    let dotAndQuotationPattern = /\.\"/g;
    matches = dotAndQuotationPattern.exec(result);
    while (matches !== null) {
        let replacement = matches[0].replace(`."`, `. "`);
        result = result.replace(matches[0], replacement);
        matches = dotAndQuotationPattern.exec(result);
    }

    result = result.replace(/\s+$/g, "");
    console.log(result);
}

formatHelper(['Terribly formatted text   .  With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .   Make,sure to give:proper spacing where is needed... ! ']);