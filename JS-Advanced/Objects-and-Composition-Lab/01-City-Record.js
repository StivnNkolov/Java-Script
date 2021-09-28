// function cityRecord(cityName, cPopulation, cTreasury) {


//     const city = {
//         name: cityName,
//         population: cPopulation,
//         treasury: cTreasury,
//     };

//     return city;

// }

function cityRecord(name, population, treasury) {
    

    const city = {
        name,
        population,
        treasury,
    }
    return city;
};

console.log(cityRecord('Tortuga',
    7000,
    15000
));
console.log("----");
console.log(cityRecord('Santo Domingo',
    12000,
    23500
));
