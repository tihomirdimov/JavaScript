function radicalMarketing(input) {
    let subscribers = new Map();
    for (let i = 0; i < input.length; i++) {
        let registerPattern = /^[A-Z]+$/;
        let registerResult = registerPattern.test(input[i]);
        if (registerResult) {
            let match = registerPattern.exec(input[i]);
            let person = match[0];
            if (!subscribers.has(person)) {
                subscribers.set(person, new Set);
            }
        }
        let subscribePattern = /^([A-Z]+)\s*-\s*([A-Z]+)/;
        let subscribeResult = subscribePattern.test(input[i]);
        if (subscribeResult) {
            let matches = subscribePattern.exec(input[i]);
            let firstPerson = matches[1];
            let secondPerson = matches[2];
            if (subscribers.has(firstPerson) && subscribers.has(secondPerson) && firstPerson != secondPerson) {
                if (!subscribers.get(secondPerson).has(firstPerson)) {
                    subscribers.get(secondPerson).add(firstPerson);
                }
            }
        }
    }
    let maxS = 0;
    let maxK;
    let maxV;
    subscribers.forEach(function (value, key, map) {
        if (value.size > maxS) {
            maxS = value.size;
            maxK = key;
            maxV = value;
        }
    });
    console.log(maxK);
    let counter = 1;
    maxV.forEach(function (value1,value2, set) {
        console.log(counter+". "+value1);
        counter++;
    });
}
radicalMarketing(["A", "B", "C", "D", "A-C", "B-A", "C-A", "D-A"]);