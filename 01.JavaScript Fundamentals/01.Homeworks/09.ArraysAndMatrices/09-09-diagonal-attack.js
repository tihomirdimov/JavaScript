function diagonalAttack (input) {
    let matrix = []
    let diagonalsCoordinates = []

    for (let row = 0; row < input.length; row++) {
        let tempRow = input[row].split(/\s+/).filter(x => x !== '').map(Number)
        matrix.push(tempRow)
    }

    let mainDiagonalSum = 0
    let secondaryDiagonalSum = 0

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum += matrix[row][row]
        secondaryDiagonalSum += matrix[matrix.length - 1 - row][row]
        diagonalsCoordinates.push({
            row: row,
            col: row
        })
        diagonalsCoordinates.push({
            row: matrix.length - 1 - row,
            col: row
        })
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        changeMatrixVales(matrix, mainDiagonalSum, diagonalsCoordinates)
        printMatrix(matrix)
    } else {
        printMatrix(matrix)
    }

    function printMatrix (matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '))
        }
    }

    function changeMatrixVales (matrix, value, diagonalCoordinates) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (!isDiagonalCoordinate(row, col, diagonalCoordinates)) {
                    matrix[row][col] = value
                }
            }
        }
    }

    function isDiagonalCoordinate (row, col, diagonalCoordinates) {
        for (let i = 0; i < diagonalCoordinates.length; i++) {
            if (diagonalCoordinates[i].row === row && diagonalCoordinates[i].col === col) {
                return true
            }
        }
        return false
    }
}