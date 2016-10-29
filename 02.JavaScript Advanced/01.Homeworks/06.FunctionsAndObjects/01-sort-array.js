function sortArray(input, argument) {
    let ascending = function (a, b) {
        return a - b;
    };
    let descending = function (a, b) {
        return b - a;
    };
    var sorting = {
        'asc': ascending,
        'desc' : descending
    };
    return input.sort(sorting[argument]);
}
