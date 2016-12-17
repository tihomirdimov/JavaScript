function formatHelper(input) {
    let numbersPattern = /\d+[\s\.]+[\d]*[\s\.]*\d+/g;
    let text = input[0];
    result = text.replace(/\s+/g, ' ');
    result = result.replace(/\s*\,+\s*/g, ', ');
    result = result.replace(/\s*\!+\s*/g, '! ');
    result = result.replace(/\s*\?+\s*/g, '? ');
    result = result.replace(/\s*\:+\s*/g, ': ');
    result = result.replace(/\s*\;+\s*/g, '; ');
    result = result.replace(/\.+\s*\.+\s*\.+\s*!/g, '...!');
    console.log(result);
}

formatHelper(['Terribly formatted text   .  With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .   Make,sure to give:proper spacing where is needed... !']);