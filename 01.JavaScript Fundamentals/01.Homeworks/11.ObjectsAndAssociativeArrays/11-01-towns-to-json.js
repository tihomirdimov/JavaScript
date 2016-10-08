function parseTownsToJSON(input) {
    let result = [];
    for (let town of input.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let townObj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        result.push(townObj);
    }
    return JSON.stringify(result);
}

