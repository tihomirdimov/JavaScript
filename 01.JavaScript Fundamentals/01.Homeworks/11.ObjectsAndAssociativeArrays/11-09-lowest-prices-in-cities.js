function solve (arr) {
    let products = new Map()

    for (let i = 0; i < arr.length; i++) {
        let lineArgs = arr[i].split('|').filter(x => x).map(x => x.trim())
        let town = lineArgs[0]
        let product = lineArgs[1]
        let productPrice = Number(lineArgs[2])

        if (!products.has(product)) {
            products.set(product, new Map())
        }

        if (!products.get(product).has(town)) {
            products.get(product).set(town, productPrice)
        }

        if (products.get(product).get(town)) {
            products.get(product).set(town, productPrice)
        }
    }

    for (let [key, value] of products) {
        let town = getLowestPrice(value)
        console.log(`${key} -> ${town.price} (${town.name})`)
    }

    function getLowestPrice (towns) {
        let minTown = {}
        let minPrice = Number.MAX_VALUE
        for (let [key, value] of towns) {
            if (value < minPrice) {
                minPrice = value
                minTown = {
                    name: key,
                    price: value
                }
            }
        }
        return minTown
    }
}
