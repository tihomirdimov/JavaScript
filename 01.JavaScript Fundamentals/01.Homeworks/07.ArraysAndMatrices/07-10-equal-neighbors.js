function equalneighbours(input) {
    let matrix = input.map(row => row.split(' '));
    let neighbours = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                neighbours++;
            }
            if (matrix[row][col] == matrix[row][col+1]) {
                neighbours++;
            }
            if (matrix[row][col] == matrix[row][col-1]) {
                neighbours++;
            }
        }
    }
    return neighbours;
}

// 83 from 100