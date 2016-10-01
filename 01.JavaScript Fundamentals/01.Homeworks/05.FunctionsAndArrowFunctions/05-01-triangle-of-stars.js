function triangelOfStars(n) {
    for (let i = 0; i < n; i++) {
        console.log('*'.repeat(i));
    }
    console.log('*'.repeat(n));
    for (let i = n-1; i>=0; i--) {
        console.log('*'.repeat(i));
    }
}