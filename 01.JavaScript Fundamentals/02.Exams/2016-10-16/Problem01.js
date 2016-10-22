function arithmephile(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let current = Number(input[i]);
        let temp = 1;
        if (current >= 0 && current < 10) {
            if (current <= input.length - i) {
                for (let j = 1; j <= current; j++) {
                    temp *= Number(input[i + j]);
                }
                if (temp >= result) {
                    result = temp;
                }
                temp = 1;
            }
            else {
                for (let j = i + 1; j < input.length; j++) {
                    temp *= Number(input[j]);
                }
                if (temp >= result) {
                    result = temp;
                }
                temp = 1;
            }
        }
    }
    console.log(result);
}
arithmephile(["8", "1000", "16"]);