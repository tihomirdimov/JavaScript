function multiplicationTable([input]) {
    let n = Number(input);
    let html = `<table border="1">\n<tr><th>x</th>`;
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += `\n</tr>`;
    for (let i = 1; i <= n; i++) {
        html += `</tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++)
        {
            html += `<td>${i*j}</td>`;
        }
        html += `</tr>\n`;
    }
    html += `</table>`;
    return html;
}