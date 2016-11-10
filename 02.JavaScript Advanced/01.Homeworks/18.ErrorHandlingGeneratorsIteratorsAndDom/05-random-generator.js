function* random(num) {
    let mod = (num * num) % 43124214384312;
    let randomNumber = mod % 100;
    while (true) {
        yield randomNumber;
        num = Math.pow(mod, 2);
        mod = num % 38573449;
        randomNumber = mod % 100;
    }
}
