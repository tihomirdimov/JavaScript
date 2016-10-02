function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    if (getDistanceBetweenPoints(x1, y2, 0, 0) % 1 > 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    if (getDistanceBetweenPoints(x2, y2, 0, 0) % 1 > 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    if (getDistanceBetweenPoints(x1, y1, x2, y2) % 1 > 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    function getDistanceBetweenPoints(x1, y1, x2, y2) {
        let distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        return distance;
    }
}
