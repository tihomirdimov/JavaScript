function radioCrystals(input) {
    let targetSize = Number(input.shift());
    for (let i = 0; i < input.length; i++) {
        let size = Number(input[i]);
        console.log(`Processing chunk ${size} microns`);
        let operation = 'Cut';
        let times = 0;
        let cutSize = cut(size);
        while (cutSize >= targetSize || parseInt(targetSize - cutSize) === 1) {
            size = cutSize;
            cutSize = cut(size);
            times++;
        }
        if (times > 0) {
            console.log(`${operation} x${times}`);
            size = wash(size);
            times = 0;
        }
        operation = 'Lap';
        let lapSize = lap(size);
        while (lapSize >= targetSize || parseInt(targetSize - lapSize) === 1) {
            size = lap(size);
            lapSize = lap(size);
            times++;
        }
        if (times > 0) {
            console.log(`${operation} x${times}`);
            size = wash(size);
            times = 0;
        }
        operation = 'Grind';
        let grindSize = grind(size);
        while (grindSize >= targetSize || parseInt(targetSize - grindSize) === 1) {
            size = grind(size);
            grindSize = grind(size);
            times++;
        }
        if (times > 0) {
            console.log(`${operation} x${times}`);
            size = wash(size);
            times = 0;
        }
        operation = 'Etch';
        let etchSize = etch(size);
        while (etchSize >= targetSize || parseInt(targetSize - etchSize) === 1) {
            size = etch(size);
            etchSize = etch(size);
            times++;
        }
        if (times > 0) {
            console.log(`${operation} x${times}`);
            size = wash(size);
            times = 0;
        }
        if (targetSize - size === 1) {
            size = xRay(size);
            console.log('X-ray x1')
        }
        console.log(`Finished crystal ${targetSize} microns`);
    }
    function wash(size) {
        console.log('Transporting and washing');
        return Math.floor(size);
    }

    function xRay(size) {
        return size + 1;
    }

    function etch(size) {
        return size - 2;
    }

    function grind(size) {
        return size - 20;
    }

    function lap(size) {
        return size - size * 0.2;
    }

    function cut(size) {
        return size / 4;
    }
}
