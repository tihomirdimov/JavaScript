function palindrome([input]) {
    let n = input.length;
    for (let i = 0; i <= n / 2; i++) {
        if (input[i] != input[n-i-1]) {
            return false;
        }
    }
    return true;
}
