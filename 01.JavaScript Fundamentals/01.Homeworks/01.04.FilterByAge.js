function filterByAge(input) {
    let minAge = Number(input[0])
    let personA = {name: input[1], age: Number(input[2])};
    let personB = {name: input[3], age: Number(input[4])};
    if (personA.age >= minAge) {
        console.log(personA);
    }
    if (personB.age >= minAge) {
        console.log(personB);
    }
}
