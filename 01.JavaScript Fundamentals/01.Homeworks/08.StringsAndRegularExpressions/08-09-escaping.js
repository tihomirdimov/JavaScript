function escaping(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = htmlEscape(input[i])
    }
    console.log('<ul>')
    for (let line of input) {
        console.log(`  <li>${line}</li>`)
    }
    console.log('</ul>')
    function htmlEscape (text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}
