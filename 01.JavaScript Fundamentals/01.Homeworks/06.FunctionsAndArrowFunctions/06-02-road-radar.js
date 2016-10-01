function roadRadar(input) {
    let speed = Number(input[0]);
    let zone = input[1];
    getInfraction(speed,zone);
    function getInfraction(speed, zone) {
        let limit = getLimit(zone);
        let infraction = speed - limit;
        if (infraction > 0 && infraction <= 20) {
            console.log("speeding");
        }
        else if (infraction > 20 && infraction <= 40) {
            console.log("excessive speeding");
        }
        else if (infraction > 40) {
            console.log("reckless driving");
        }
        function getLimit(zone) {
            switch (zone) {
                case "motorway":
                    return 130;
                case "interstate":
                    return 90;
                case "city":
                    return 50;
                case "residential":
                    return 20;
            }
        }
    }
}