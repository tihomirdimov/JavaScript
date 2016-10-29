function euclidisAlgorithm(a, b) {
    if (b == 0) {
        return a;
    } else {
        return euclidisAlgorithm(b, a % b);
    }
}
