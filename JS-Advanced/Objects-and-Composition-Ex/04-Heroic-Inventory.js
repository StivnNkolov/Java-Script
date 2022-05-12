// function inventory(inputArray) {
//     const heroInfo = [];

//     for (let element of inputArray) {
//         let [name, level, rest] = element.split(" / ");
//         let items;
//         if (rest) {
//             items = rest.split(", ");
//         } else {
//             items = [];
//         }
//         let source = { name: name, level: Number(level), items: items };
//         heroInfo.push(source);
//     }
//     let json = JSON.stringify(heroInfo);
//     return json

// }

// inventory(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// )

// console.log(inventory(['Jake / 1000 / Gauss, HolidayGrenade']))

function solve(inputArray) {
    let resultData = inputArray
        .map(mapper)
        .reduce(reducer, [])

    console.log(JSON.stringify(resultData));

    function mapper(value) {
        return value.split(' / ');
    }

    function reducer(objectToFill, currentValue) {
        let heroObject = {};
        let heroName = currentValue[0];
        heroObject.name = heroName;

        let heroLevel = Number(currentValue[1]);
        heroObject.level = heroLevel;

        heroObject.items = currentValue[2] != undefined ? currentValue[2].split(', ') : [];

        objectToFill.push(heroObject);
        return objectToFill;
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

// solve([
//     'Jake / 1000'
// ]);