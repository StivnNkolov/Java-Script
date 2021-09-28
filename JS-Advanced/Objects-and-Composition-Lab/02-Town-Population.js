// function townPopulation(inputData) {
//     let dataLen = inputData.length;

//     const townPop = {};

//     for (let currentTown of inputData) {
//         let currentTownData = currentTown.split(" <-> ") 
//         let townName = currentTownData[0];
//         let townPopulation = Number(currentTownData[1]);

        
//         if (townPop[townName] != undefined) {
//             townPop[townName] += townPopulation;

//         }else {
//             townPop[townName] = townPopulation;
//         }
        
//     }
//     for (let town in townPop) {
//         console.log(`${town} : ${townPop[town]}`);
//     }
// }




// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)