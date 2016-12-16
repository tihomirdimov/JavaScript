function airport(input) {
    let airplanes = [];
    for (let plane of input) {
        let planeDetails = plane.split(/\s+/);
        let currentPlane = {
            planeID: planeDetails[0],
            town: planeDetails[1],
            passengersCount: Number(planeDetails[2]),
            action: planeDetails[3]
        }
        if (currentPlane.action == 'land') {
            if (checkIfDeparted(currentPlane)) {
                airplanes.push(currentPlane);
            }
        }
        if (currentPlane.action == 'depart') {
            if (checkIfLanded(currentPlane)) {
                airplanes.push(currentPlane);
            }
        }
    }
    let onGround = {};
    for (let airplane of airplanes) {
        if (airplane.action == 'land') {
            onGround[airplane.planeID] = "landed";
        }
        if (airplane.action == 'depart') {
            onGround[airplane.planeID] = "airborne";
        }
    }
    let result = [];
    console.log('Planes left:');
    for (let plane in onGround) {
        if (onGround[plane] == "landed") {
            result.push(plane);
        }
    }
    result.sort(function(a,b){
        return a.localeCompare(b);
    });

    for (let plane of result) {
        console.log('- ' + plane);
    }

    let townsArr = {};
    for (let airplane of airplanes) {
        townsArr[airplane.town] = "";
    }

    let townsResult = [];
    for (let town in townsArr) {
        townsResult.push(town);
    }
    townsResult.sort(function(a,b){
        return a.localeCompare(b);
    });

    let townsToPrint = [];

    for (let town of townsResult) {

        let townPlanes = {};
        let currentTownFlights = airplanes.filter(a => a.town == town);
        let arrivals = 0;
        let departures = 0;
        for (let flight of currentTownFlights) {
            if (flight.action == 'land') {
                arrivals += flight.passengersCount;
            }
            if (flight.action == 'depart') {
                departures += flight.passengersCount;
            }
            townPlanes[flight.planeID] = "";
        }
        let planesPerTown = [];
        for (let town in townPlanes) {
            planesPerTown.push(town);
        }
        planesPerTown.sort(function(a,b){
            return a.localeCompare(b);
        });
        let currentTownObj = {
            Name: town,
            Arrivals: arrivals,
            Departures: departures,
            Planes: planesPerTown
        }
        townsToPrint.push(currentTownObj);
    }


    townsToPrint.sort(function (a, b) {
        return b.Arrivals - a.Arrivals || a.Name.localeCompare(b.Name);
    });
    for (let town of townsToPrint) {
        console.log(town.Name);
        console.log('Arrivals: ' + town.Arrivals);
        console.log('Departures: ' + town.Departures);
        console.log('Planes:');
        for (let plane of town.Planes) {
            console.log('-- ' + plane);
        }
    }

    function checkIfLanded(currentPlane) {
        let flights = airplanes.filter(p => p.planeID == currentPlane.planeID);
        if (flights.length == 0) {
            return false;
        } else {
            let landings = 0;
            let departures = 0;
            for (let i = 0; i < flights.length; i++) {
                if (flights[i].action == 'land') {
                    landings++;
                }
                if (flights[i].action == 'depart') {
                    departures++;
                }
            }
            if (landings > departures) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    function checkIfDeparted(currentPlane) {
        let flights = airplanes.filter(p => p.planeID == currentPlane.planeID);
        if (flights.length == 0) {
            return true;
        } else {
            let landings = 0;
            let departures = 0;
            for (let i = 0; i < flights.length; i++) {
                if (flights[i].action == 'land') {
                    landings++;
                }
                if (flights[i].action == 'depart') {
                    departures++;
                }
            }
            if (landings <= departures) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

airport([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);

// airport([
//     "Airbus Paris 356 land",
//     "Airbus London 321 land",
//     "Airbus Paris 213 depart",
//     "Airbus Ljubljana 250 land"
// ]);
