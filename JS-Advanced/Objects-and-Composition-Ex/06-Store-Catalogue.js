function catalogue(inputData) {
    let sortedData = inputData.sort();
    let result = {};
    for (let el of sortedData) {
        let [name, price] = el.split(" : ");
        price = Number(price);
        if (result[name[0]] == undefined) {
            result[name[0]] = {};
        }
        result[name[0]][name] = price;
    }

    for (let [letter, values] of Object.entries(result)) {
        console.log(letter);
        for (let [name, price] of Object.entries(values)) {
            console.log(` ${name}: ${price}`);
        }
    }
};


catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

// catalogue(['Banana : 2',
// 'Rubics Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']
// );
