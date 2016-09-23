function figureArea(input) {
    let [s1, s2, s3] = [input[0] * input[1], input[2] * input[3], Math.min(input[0], input[2]) * Math.min(input[1], input[3])];
    return s1 + s2 - s3;
}
