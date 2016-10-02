function biggestElement(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(col => biggestNum = Math.max(biggestNum, col)));
    return biggestNum;
}

