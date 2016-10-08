function JSONToHTMLTable([json]) {
    let arr = JSON.parse(json);
    let html = `<table>\n<tr>`;
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += "</tr>\n";
    for (let object of arr) {
        html += '  <tr>'
        for (let key of Object.keys(object)) {
            html += `<td>${htmlEscape(object[key] + '')}</td>`
        }
        html += '</tr>\n'
    }
    return html + "</table>";
    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}