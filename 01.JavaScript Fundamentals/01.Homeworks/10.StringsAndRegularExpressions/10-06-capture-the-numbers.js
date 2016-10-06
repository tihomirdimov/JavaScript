function captureTheNumbers(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let temp = input[i].match(/\d+/g);
        if (temp && temp.length > 0) {
            for (let j = 0; j < temp.length; j++) {
                result.push(temp[j]);
            }
        }
    }
    console.log(result.join(" "));
}