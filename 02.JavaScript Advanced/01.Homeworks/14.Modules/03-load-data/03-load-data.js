let data = require('./data.js');

function sort (property) {
    data = data.sort((a, b) => {
        return a[property].localeCompare(b[property]);
    });

    return data;
}

function filter (property, value) {
    let resultArray = [];

    for (let outerIndex in data) {
        for (let innerIndex in data[outerIndex]) {
            if (innerIndex === property && data[outerIndex][innerIndex] === value) {
                resultArray.push(data[outerIndex]);
            }
        }
    }

    return resultArray;
}

module.exports = {
    sort,
    filter
};
