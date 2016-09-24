function calcNextDay(input) {
    let date = new Date(input[0], input[1] - 1, input[2]);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + '-' + nextDate.getDate();
}