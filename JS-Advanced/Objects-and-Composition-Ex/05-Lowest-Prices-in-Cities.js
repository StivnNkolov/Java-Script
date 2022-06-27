// function findLowestPrices(inputArray) {
//     let products = {};

//     for (let element of inputArray) {
//         const [city, productName, price] = element.split(" | ");

//         if (products[productName] == undefined) {
//             products[productName] = {};
//         }
//         products[productName][city] = Number(price);

//     }
//     // console.log(products);

//     for (let [name, towns] of Object.entries(products)) {
//         // console.log(towns);
//         const sortedData = Object.entries(towns).sort((a, b) => a[1] - b[1])
//         const [town, price] = sortedData[0]
//         console.log(`${name} -> ${price} (${town})`);
//     }
// }


// findLowestPrices(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);


// // findLowestPrices()

function solve(inputArray) {
    let result = inputArray
        .map(mapper)
        .reduce(reducer, {})


    for (let product in result) {
        console.log(`${product} -> ${result[product].productPrice} (${result[product].cityName})`)
    }

    function mapper(value) {
        return value.split(' | ');
    }

    function reducer(pv, cv) {
        [cityName, productName, productPrice] = cv;
        if (pv[productName] == undefined) {
            pv[productName] = { cityName, productPrice: Number(productPrice) };
        }
        if (Number(productPrice) < pv[productName].productPrice) {
            pv[productName] = { cityName, productPrice: Number(productPrice) };
        }
        return pv;

    }
}

function solve(inputArray) {
    let productsObj = {

    };
    for (let el of inputArray) {
        let [townName, productName, productPrice] = el.split(' | ');
        productPrice = Number(productPrice);

        if (productsObj[productName] == undefined) {
            productsObj[productName] = {
                price: Number.MAX_SAFE_INTEGER,
                town: townName,
            }
        }

        if (productPrice < productsObj[productName].price) {
            productsObj[productName].price = productPrice;
            productsObj[productName].town = townName;
        }
    }
    let result = Object.keys(productsObj)
        .map(v => {
            return `${v} -> ${productsObj[v].price} (${productsObj[v].town})`
        })
        .join('\n')


    console.log(result);
}

solve([
    'Sample Town | Sample Product | 1000',
    'New York | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Burger | 10'
]);