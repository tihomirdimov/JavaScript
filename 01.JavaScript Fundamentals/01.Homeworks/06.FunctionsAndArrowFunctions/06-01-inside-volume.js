function insideVolume(input) {
    let x1 = 10;
    let x2 = 50;
    let y1 = 20;
    let y2 = 80;
    let z1 = 15;
    let z2 = 50;
    for (let i = 0; i < input.length - 2; i += 3) {
        let x = Number(input[i]);
        let y = Number(input[i + 1]);
        let z = Number(input[i + 2]);
        isInside(x, y, z);
    }
    function isInside(x, y, z) {
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
}