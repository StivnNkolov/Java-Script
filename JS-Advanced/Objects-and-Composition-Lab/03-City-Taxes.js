// function cityTaxes(name, population, treasury) {
//     return {
//         name,
//         population,
//         treasury,
//         taxRate: 10,

//         collectTaxes() {
//             this.treasury += population * this.taxRate;
//         },
//         applyGrowth(percentage) {
//             let increase = this.population * (percentage / 100);
//             this.population += increase;
//         },

//         applyRecession(percentage) {
//             let dec = this.treasury * (percentage / 100);
//             this.treasury -= dec;
//         }


//     }


// }


// // const city =
// //     cityTaxes('Tortuga',
// //         7000,
// //         15000);
// // console.log(city);


// console.log("---");


// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);


function cityTaxes(name, population, treasury) {
    let returnObject = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() { Math.floor(this.treasury += this.population * this.taxRate) },
        applyGrowth(percentage) { Math.floor(this.population += this.population * (percentage / 100)) },
        applyRecession(percentage) { Math.floor(this.treasury -= this.treasury * (percentage / 100)) }
    }

    return returnObject;
}

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000);
// console.log(city);

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);