// https://github.com/ Author: Yanislav Asenov /to be fixed from 85/100 to 100/100
function secretData(arr) {
    let usernamePattern = /(\*[A-Z][a-zA-Z]*?)( |\t|$)/g
    let phonePattern = /(\+[0-9-]{10})( |\t|$)/
    let idPattern = /(![0-9a-zA-Z]+)( |\t|$)/
    let secretBasesPattern = /(_[0-9a-zA-Z]+)( |\t|$)/

    for (let i = 0; i < arr.length; i++) {
        let usernameMatch = usernamePattern.exec(arr[i])
        while (usernameMatch) {
            arr[i] = arr[i].replace(usernameMatch[1], '|'.repeat(usernameMatch[1].length))
            usernameMatch = usernamePattern.exec(arr[i])
        }

        let phoneMatch = phonePattern.exec(arr[i])
        while (phoneMatch) {
            arr[i] = arr[i].replace(phoneMatch[1], '|'.repeat(phoneMatch[1].length))
            phoneMatch = phonePattern.exec(arr[i])
        }

        let idMatch = idPattern.exec(arr[i])
        while (idMatch) {
            arr[i] = arr[i].replace(idMatch[1], '|'.repeat(idMatch[1].length))
            idMatch = idPattern.exec(arr[i])
        }

        let secretBasesMatch = secretBasesPattern.exec(arr[i])
        while (secretBasesMatch) {
            arr[i] = arr[i].replace(secretBasesMatch[1], '|'.repeat(secretBasesMatch[1].length))
            secretBasesMatch = secretBasesPattern.exec(arr[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
