function addAndRemoveElementsFromArray(input) {
    let num = 0;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            num++;
            result.push(num);
        } else if (input[i] === 'remove') {
            num++;
            if (result.length > 0) {
                result.pop()
            }
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    }
    for (let item of result) {
        console.log(item)
    }
}