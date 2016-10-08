function cityMarkets (arr) {
    let salesByTown = []

    for (let i = 0; i < arr.length; i++) {
        let lineArgs = arr[i].split('->').filter(x => x).map(x => x.trim())
        let city = lineArgs[0]
        let product = lineArgs[1]
        let salesArgs = lineArgs[2].split(':').filter(x => x).map(x => x.trim())
        let sales = Number(salesArgs[0])
        let pricePerUnit = Number(salesArgs[1])
        let currentIncome = sales * pricePerUnit

        if (!salesByTown[city]) {
            salesByTown[city] = {
                products: []
            }
        }

        salesByTown[city].products.push({
            name: product,
            profit: currentIncome
        })
    }

    for (let town in salesByTown) {
        console.log(`Town - ${town}`)
        let currentTownProducts = salesByTown[town].products
        for (let product of currentTownProducts) {
            console.log(`$$$${product.name} : ${product.profit}`)
        }
    }
}
