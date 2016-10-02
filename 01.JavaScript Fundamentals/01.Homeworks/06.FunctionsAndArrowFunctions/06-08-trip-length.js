function tripLength ([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    let dist12 = getDistance(x1, y1, x2, y2);
    let dist13 = getDistance(x1, y1, x3, y3);
    let dist23 = getDistance(x2, y2, x3, y3);
    if (Math.max(dist12, dist13, dist23) === dist13) {
        console.log(`1->2->3: ${dist12 + dist23}`);
    } else if (Math.max(dist12, dist13, dist23) === dist12) {
        console.log(`1->3->2: ${dist13 + dist23}`);
    } else if (Math.max(dist12, dist13, dist23) === dist23) {
        console.log(`2->1->3: ${dist12 + dist13}`);
    }
    function getDistance (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
}
