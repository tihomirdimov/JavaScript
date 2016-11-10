function objectIterator(object) {
    let arr = [];
    for (let name in object) {
        arr.push(name + '');
    }
    arr = arr.sort();
    let index = arr.length - 1;
    return {
        [Symbol.iterator]: function () {
            return this;
        },
        ['next']: function () {
            if (index >= 0)
                return {
                    value: arr[index--],
                    done: false
                };
            else
                return {
                    done: true
                };
        }
    }
}