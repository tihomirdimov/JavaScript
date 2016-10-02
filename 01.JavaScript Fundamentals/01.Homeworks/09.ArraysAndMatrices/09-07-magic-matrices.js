function magicMatrices(input) {
    let matrix = []
    for (let row = 0; row < input.length; row++) {
        let currentRow = input[row].split(/\s+/).filter(x => x !== '').map(Number)
        matrix.push(currentRow)
    }
    let columnsSum = []
    let rowsSum = []
    for (let i = 0; i < matrix.length; i++) {
        let currentColSum = getColSum(matrix, i)
        let currentRowSum = getRowSum(matrix, i)

        columnsSum.push(currentColSum)
        rowsSum.push(currentRowSum)
    }
    for (let row = 0; row < rowsSum.length; row++) {
        for (let col = 0; col < columnsSum.length; col++) {
            if (columnsSum[col] !== rowsSum[row]) {
                console.log('false')
                return
            }
        }
    }
    console.log('true')
    function getRowSum (matrix, targetRow) {
        let sum = 0
        for (let col = 0; col < matrix[targetRow].length; col++) {
            sum += matrix[targetRow][col]
        }
        return sum
    }
    function getColSum (matrix, targetCol) {
        let sum = 0
        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][targetCol]
        }
        return sum
    }
}