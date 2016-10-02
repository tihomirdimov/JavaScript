function spiralMatrix (input) {
    let matrixArgs = input[0].split(/\s+/).filter(x => x !== '')
    let rows = Number(matrixArgs[0])
    let cols = Number(matrixArgs[1])
    let totalCells = rows * cols
    let matrix = []
    for (let row = 0; row < rows; row++) {
        let row = []
        for (let col = 0; col < cols; col++) {
            row.push(false)
        }
        matrix.push(row)
    }
    let num = 1
    let col = 0
    let row = 0
    let maxColLengthRight = cols - 1
    let maxRowLengthDown = rows - 1
    let maxColLengthLeft = 0
    let maxRowLengthUp = 0
    while (num <= totalCells) {
        // Right
        while (col <= maxColLengthRight) {
            matrix[row][col++] = num++
        }
        col--
        row++
        maxRowLengthUp++
        while (row <= maxRowLengthDown) {
            matrix[row++][col] = num++
        }
        row--
        col--
        maxColLengthRight--
        while (col >= maxColLengthLeft) {
            matrix[row][col--] = num++
        }
        col++
        row--
        maxRowLengthDown--
        while (row >= maxRowLengthUp) {
            matrix[row--][col] = num++
        }
        row++
        col++
        maxColLengthLeft++
    }
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '))
    }
}