function lastMonth(input) {
    [day, month, year] = input.map(Number);
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}