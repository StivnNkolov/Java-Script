function findLowestPrices(inputArray) {
    let products = {};

    for (let element of inputArray) {
        const [city, productName, price] = element.split(" | ");

        if (products[productName] == undefined) {
            products[productName] = {};
        }
        products[productName][city] = Number(price);

    }
    // console.log(products);

    for (let [name, towns] of Object.entries(products)) {
        // console.log(towns);
        const sortedData = Object.entries(towns).sort((a, b) => a[1] - b[1])
        const [town, price] = sortedData[0]
        console.log(`${name} -> ${price} (${town})`);
    }
}


findLowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);


// findLowestPrices()