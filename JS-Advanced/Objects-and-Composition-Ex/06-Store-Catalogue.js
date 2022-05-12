// function catalogue(inputData) {
//     let sortedData = inputData.sort();
//     let result = {};
//     for (let el of sortedData) {
//         let [name, price] = el.split(" : ");
//         price = Number(price);
//         if (result[name[0]] == undefined) {
//             result[name[0]] = {};
//         }
//         result[name[0]][name] = price;
//     }

//     for (let [letter, values] of Object.entries(result)) {
//         console.log(letter);
//         for (let [name, price] of Object.entries(values)) {
//             console.log(` ${name}: ${price}`);
//         }
//     }
// };


// catalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// );

// // catalogue(['Banana : 2',
// // 'Rubics Cube : 5',
// // 'Raspberry P : 4999',
// // 'Rolex : 100000',
// // 'Rollon : 10',
// // 'Rali Car : 2000000',
// // 'Pesho : 0.000001',
// // 'Barrel : 10']
// // );


function solve(inputArray) {
    let sortedArray = inputArray.sort((a, b) => {
        return a.localeCompare(b);
    })

    let resultObject = sortedArray.reduce((pv, cv) => {
        let startLetter = cv[0];
        let [productName, productPrice] = cv.split(' : ');
        productPrice = Number(productPrice);

        if (pv[startLetter] == undefined) {
            pv[startLetter] = {}
        }
        pv[startLetter][productName] = productPrice;

        return pv;
    }, {})

    for (letter in resultObject) {
        console.log(letter);
        for ([productName, price] of Object.entries(resultObject[letter])) {
            console.log(`  ${productName}: ${price}`)
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// solve([
//     'Banana : 2',
//     "Rubic's Cube : 5",
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'
// ]);
