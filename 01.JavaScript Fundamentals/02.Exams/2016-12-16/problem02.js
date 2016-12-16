function wall(input) {
    let wall = input.map(Number);
    let sections = wall.length;
    let days = 0;
    let concrete = [];
    let currentDayConcrete = 0;
    while (checkIfBuilt() == false) {
        for (let i = 0; i < sections; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                currentDayConcrete += 195;
            }
            if (i == Number(sections - 1)) {
                days++;
                concrete.push(currentDayConcrete);
                currentDayConcrete = 0;
            }
        }
    }
    console.log(concrete.join(', '));
    let cost = 0;
    for (let i = 0; i < concrete.length; i++) {
        cost += concrete[i];
    }
    console.log(cost * 1900 + ' pesos');
    function checkIfBuilt() {
        let target = wall.length * 30;
        let currentHeight = 0;
        for (let i = 0; i < wall.length; i++) {
            currentHeight += wall[i];
        }
        if (currentHeight < target) {
            return false;
        }
        else {
            true;
        }
    }
}

wall([21, 25, 28]);