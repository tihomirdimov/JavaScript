function modifyAverage([input]) {
    let average = getAverage(input);
    while (average <= 5) {
        input += '9';
        average = getAverage(input);
    }
    console.log(input);
    function getAverage(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        return sum / num.length;
    }
}