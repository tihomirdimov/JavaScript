function capitalizeTheWords(input) {
    let text = input[0];
    let result = "";
    for (i = 0; i < text.length; i++) {
        let x = text[i];
        if (x.match(/[a-zA-Z]/i)) {
            if (i == 0 || text[i - 1] == " ") {
                result += x.toUpperCase();
            } else {
                result += x.toLowerCase();
            }
        } else {
            result += x;
        }
    }
    console.log(result);
}