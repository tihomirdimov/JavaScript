function orderRectangle (input) {
    let rectangles = [];
    for (let [width, height] of input) {
        rectangles.push(createRectangle(width, height));
    }
    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
    function createRectangle (width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: (other) => {
                let result = other.area() - rectangle.area();
                return result || (other.width - rectangle.width);
            }
        }
        return rectangle;
    }
}

