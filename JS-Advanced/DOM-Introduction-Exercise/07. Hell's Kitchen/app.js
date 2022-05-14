// // Work more on this one. Its cool
// function solve() {
//     document.querySelector('#btnSend').addEventListener('click', onClick);

//     function onClick() {
//         let textAreaElement = document.querySelector('textarea');
//         let textAreaValue = JSON.parse(textAreaElement.value);


//         let restaurants = {};
//         for (let i = 0; i < textAreaValue.length; i++) {
//             let [restaurantName, restaurantData] = textAreaValue[i].split(' - ');
//             restaurantData = restaurantData.split(', ')
//             if (restaurants[restaurantName] == undefined) {
//                 restaurants[restaurantName] = {
//                     workers: {},
//                     avgSalary: function avgs() {

//                         let salaries = Object.values(this.workers);
//                         let allSalaries = salaries.reduce((pv, cv) => pv += cv, 0)
//                         return allSalaries / salaries.length;
//                     }

//                 };
//             }
//             for (let element of restaurantData) {
//                 [workerName, workerSalary] = element.split(' ');
//                 workerSalary = Number(workerSalary);
//                 restaurants[restaurantName].workers[workerName] = workerSalary;
//             }
//         }

//         let bestRestaurantName = Object.keys(restaurants).sort((a, b) => {
//             a = restaurants[a].avgSalary();
//             b = restaurants[b].avgSalary();
//             return b - a;
//         })[0];

//         let bestRestaurant = restaurants[bestRestaurantName];
//         let sortedBestRestaurant = Object.entries(bestRestaurant.workers)
//             .sort((a, b) => {
//                 let firstValue = a[1];
//                 let secondValue = b[1];
//                 return secondValue - firstValue;
//             });


//         let bestAvgSalary = bestRestaurant.avgSalary();
//         let bestSalary = sortedBestRestaurant[0][1];

//         let bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

//         let bestRestaurantDataOutput = sortedBestRestaurant.map(v => `Name: ${v[0]} With Salary: ${v[1]}`).join(" ");

//         document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
//         document.querySelector('#workers p').textContent = bestRestaurantDataOutput;

//     }
// }

//  This is crazy solution. ALWAYS READ THE TASK INFO CAREFULLY BEFORE DOING SOMETHING!!!!!!!!
function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let inputElement = document.querySelector('#inputs textarea');
        let bestRestaurantElement = document.querySelector('#bestRestaurant p');
        let workersElement = document.querySelector('#workers p');

        let inputArray = JSON.parse(inputElement.value);

        let restaurantsArray = [];

        for (let restaurant of inputArray) {
            let [restaurantName, workersString] = restaurant.split(' - ');

            let workersObj = workersString
                .split(', ')
                .map(v => v.split(' '))
                .reduce((pv, cv) => {
                    pv[cv[0]] = Number(cv[1]);
                    return pv;
                }, {});

            let same = findIfRestaurantWithThatNameExist(restaurantsArray, restaurantName);

            if (same >= 0) {
                let sameRestaurant = restaurantsArray[same];
                let workersForTheRestaurant = sameRestaurant.workers;
                workersObj = createWorkersObject(workersForTheRestaurant, workersObj)
                let sortedWorkersObject = sortWorkersBySalary(workersObj);
                let avgSalaryForTheRestaurant = calcAvg(Object.values(sortedWorkersObject)).toFixed(2);
                let currentRestaurantObject = createRestaurantObject(restaurantName, sortedWorkersObject, avgSalaryForTheRestaurant);
                restaurantsArray[same] = currentRestaurantObject;
                continue

            }
            let sortedWorkersObject = sortWorkersBySalary(workersObj);
            let avgSalaryForTheRestaurant = calcAvg(Object.values(sortedWorkersObject)).toFixed(2);
            let currentRestaurantObject = createRestaurantObject(restaurantName, sortedWorkersObject, avgSalaryForTheRestaurant);
            restaurantsArray.push(currentRestaurantObject);

        }
        // console.log(restaurantsArray);

        let bestRestaurant = restaurantsArray.sort((a, b) => {
            return b.avgSalary - a.avgSalary;
        })[0];
        let bestSalaryInRestaurant = Object.values(bestRestaurant.workers)[0].toFixed(2);
        let bestWorkers = Object.entries(bestRestaurant.workers)
            .map((v, i, arr) => {
                return `Name: ${v[0]} With Salary: ${v[1]}`
            })
            .join(' ');

        bestRestaurantElement.textContent = `Name: ${bestRestaurant.restaurant} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${bestSalaryInRestaurant}`
        workersElement.textContent = bestWorkers;
    }

    function calcAvg(valuesArrayAsString) {
        let sum = valuesArrayAsString
            .map(v => Number(v))
            .reduce((a, b) => { return a + b }, 0)

        let avg = (sum / valuesArrayAsString.length).toFixed(2)
        return Number(avg)
    }

    function createRestaurantObject(name, workers, averageSalary) {
        let restaurantObject = {
            restaurant: name,
            workers: workers,
            avgSalary: averageSalary
        }
        return restaurantObject;
    }

    function findIfRestaurantWithThatNameExist(arrayOfRestaurants, name) {
        let sameRestaurant = arrayOfRestaurants.filter((v, i, arr) => {
            let currRestaurantName = v.restaurant;
            if (currRestaurantName == name) {
                return v;
            }
        })

        return arrayOfRestaurants.indexOf(sameRestaurant[0]);
    }
    function createWorkersObject(existingOnes, newWorkersObj) {
        for (let worker of Object.keys(newWorkersObj)) {
            existingOnes[worker] = newWorkersObj[worker];
        }
        return existingOnes;
    }

    function sortWorkersBySalary(initialObject) {
        let initialObjectValues = Object.values(initialObject);
        let initialObjectEntries = Object.entries(initialObject);
        let sortedObject = {};
        initialObjectValues.sort((a, b) => {
            return Number(b) - Number(a);
        })
        for (let value of initialObjectValues) {
            neededKey = initialObjectEntries.filter((v, i, arr) => {
                if (v[1] == value) {
                    return v
                }
            })[0][0];
            sortedObject[neededKey] = value;
        }
        return sortedObject;
    }


}