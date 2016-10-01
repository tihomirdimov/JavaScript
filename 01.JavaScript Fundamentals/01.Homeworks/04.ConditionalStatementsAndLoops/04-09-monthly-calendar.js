function calendar([day, month, year]) {
    let html = `<table>\n`;
    let currDay = Number(day);
    let currMonth = Number(month) - 1;
    let currYear = Number(year);
    let firstOfMonth = new Date(currYear, currMonth);
    let lastOfMonth = new Date(currYear, currMonth + 1, 0);
    let calendarStartDay = new Date(currYear, currMonth, 1 - firstOfMonth.getDay());
    let calendarLastDay = new Date(currYear, currMonth + 1, 6 - lastOfMonth.getDay());
    html += " <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
    if (firstOfMonth.getDay() > 0) {
        html += ` <tr>`;
    }
    for (let i = calendarStartDay.getDay(); i < firstOfMonth.getDay(); i++) {
        html += `<td class="prev-month">` + (calendarStartDay.getDate() + i) + `</td>`;
    }
    let tempDay = 1;
    while (tempDay <= lastOfMonth.getDate()) {
        //first day of the week opens new table row
        if (new Date(currYear, currMonth, tempDay).getDay() == 0) {
            html += " <tr>";
        }
        if (tempDay == currDay) {
            html += `<td class="today">` + tempDay + `</td>`;
        }
        else {
            html += `<td>` + tempDay + `</td>`;
        }
        if ((new Date(currYear, currMonth, tempDay).getDay() + 1) % 7 == 0) {
            html += `</tr>\n`;
        }
        tempDay++;
    }
    if (lastOfMonth < calendarLastDay) {
        for (let i = 1; i <= calendarLastDay.getDate(); i++) {
            html += `<td class="next-month">` + i + `</td>`;
        }
        html += `</tr>\n`
    }
    html += `</table>`
    return html;
}
