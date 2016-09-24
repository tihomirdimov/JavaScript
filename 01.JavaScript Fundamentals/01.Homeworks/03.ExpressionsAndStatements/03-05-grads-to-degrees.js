function gradsToDegrees(input) {
    let grads = (input * 0.9) % 360;
    if (grads < 0) {
        console.log(grads + 360);
    }
    else {
        console.log(grads);
    }
}