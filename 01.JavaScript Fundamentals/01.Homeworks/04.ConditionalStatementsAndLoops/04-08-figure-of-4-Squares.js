function figureOfSquares(n) {
    if (n == 2) {
        console.log(`+` + '-'.repeat(n - 2) + `+` + '-'.repeat(n - 2) + `+`);
    }
    else {
        let m = Math.floor((n - 3) / 2);
        console.log(`+` + '-'.repeat(n - 2) + `+` + '-'.repeat(n - 2) + `+`);
        for (let i = 0; i < m; i++) {
            console.log(`|` + ' '.repeat(n - 2) + `|` + ' '.repeat(n - 2) + `|`);
        }
        console.log(`+` + '-'.repeat(n - 2) + `+` + '-'.repeat(n - 2) + `+`);
        for (let i = 0; i < m; i++) {
            console.log(`|` + ' '.repeat(n - 2) + `|` + ' '.repeat(n - 2) + `|`);
        }
        console.log(`+` + '-'.repeat(n - 2) + `+` + '-'.repeat(n - 2) + `+`);
    }
}

