function distanceBetweenPoints(input)  {
    let pointA = {x:input[0], y:input[1]};
    let pointB = {x:input[2], y:input[3]};
    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);
    return Math.sqrt(distanceX + distanceY);
}
