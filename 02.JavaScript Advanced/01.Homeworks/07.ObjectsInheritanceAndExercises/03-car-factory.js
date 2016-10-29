function carFactory(input) {
    let car = {
        model: input.model,
        engine: {
            power: Number(input.power),
            volume: 0
        },
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheels: []
    };
    let myCar = Object.create(car);
    if (myCar.engine.power <= 90) {
        myCar.engine.power = 90;
        myCar.engine.volume = 1800;
    } else if (myCar.engine.power <= 120) {
        myCar.engine.power = 120;
        myCar.engine.volume = 2400;
    } else {
        myCar.engine.power = 200;
        myCar.engine.volume = 3500;
    }
    if (input.wheelsize % 2 == 0) {
        input.wheelsize -= 1;
    }
    myCar.wheels.push(input.wheelsize);
    myCar.wheels.push(input.wheelsize);
    myCar.wheels.push(input.wheelsize);
    myCar.wheels.push(input.wheelsize);
    return myCar;
}