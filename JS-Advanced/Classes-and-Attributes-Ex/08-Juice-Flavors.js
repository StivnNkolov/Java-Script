function sove(inputArray) {
    let bottlesObject = {

    }

    let amountObject = {

    }

    for (let juiceData of inputArray) {
        let [juiceName, juicePrice] = juiceData.split(' => ');
        juicePrice = Number(juicePrice);

        if (amountObject[juiceName] == undefined) {
            amountObject[juiceName] = 0;
        }

        amountObject[juiceName] += juicePrice;

        if (amountObject[juiceName] >= 1000) {
            bottles = calculateBottles(amountObject[juiceName]);
            if (bottlesObject[juiceName] == undefined) {
                bottlesObject[juiceName] = 0;
            }
            bottlesObject[juiceName] += bottles;
            amountObject[juiceName] -= bottles * 1000;
        }
    }

    let logResult = Object
        .keys(bottlesObject)
        .map((v) => {
            return `${v} => ${bottlesObject[v]}`
        })
        .join('\n');




    console.log(logResult);

    function calculateBottles(value) {
        let bottles = value / 1000;
        return Math.trunc(bottles);
    }
}

// sove([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ]);
sove([
    'Kiwi => 1000',
]);
