function orbit(input) {
    let matrixDimensions = input[0].split(/\s+/).filter(x => x !== '').map(Number)
    let rows = matrixDimensions[0]
    let cols = matrixDimensions[1]
    let startCoordinates = input[1].split(/\s+/).filter(x => x !== '').map(Number)
    let stinputow = startCoordinates[0]
    let starCol = startCoordinates[1]

    let matrix = []
    for (let row = 0; row < rows; row++) {
        let currentRow = []
        for (let col = 0; col < cols; col++) {
            currentRow.push(false)
        }
        matrix.push(currentRow)
    }

    matrix[stinputow][starCol] = 1

    let cellCounter = 1
    let num = 2
    let startCol = starCol - 1
    let startRow = stinputow - 1
    let endRow = stinputow + 1
    let endCol = starCol + 1

    while (cellCounter < rows * cols) {
        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (row >= 0 && row < rows) {
                    if (col >= 0 && col < cols) {
                        if (!matrix[row][col]) {
                            matrix[row][col] = num
                            cellCounter++
                        }
                    }
                }
            }
        }
        num++
        startCol--
        startRow--
        endCol++
        endRow++
    }

    for (let row = 0; row < rows; row++) {
        console.log(matrix[row].join(' '))
    }
}
