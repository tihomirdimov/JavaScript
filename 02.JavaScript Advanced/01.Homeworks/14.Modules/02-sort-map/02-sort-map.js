function sortMap(map, sortFn){
    if(sortFn !== undefined){
        let sortedArr = [];
        for(let value of map) {
            sortedArr.push(value);
        }
        sortedArr.sort(sortFn);
        return new Map(sortedArr);
    } else {
        let sortedArr = []
        for(let index of map)
            sortedArr.push(index)

        sortedArr.sort(function(a, b) {
            if(a[0] < b[0]) {
                return -1;
            } else if (a[0] > b[0]) {
                return 1;
            } else {
                return 0;
            }
        });
        return new Map(sortedArr);
    }
}
module.exports.sortMap = sortMap
