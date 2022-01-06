// Work more on this one. Its cool
function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let textAreaElement = document.querySelector('textarea');
        let textAreaValue = JSON.parse(textAreaElement.value);

        
        let restaurants = {};
        for (let i = 0; i < textAreaValue.length; i++) {
            let [restaurantName, restaurantData] = textAreaValue[i].split(' - ');
            restaurantData = restaurantData.split(', ')
            if (restaurants[restaurantName] == undefined) {
                restaurants[restaurantName] = {
                    workers: {},
                    avgSalary: function avgs() {

                        let salaries = Object.values(this.workers);
                        let allSalaries = salaries.reduce((pv, cv) => pv += cv, 0)
                        return allSalaries / salaries.length;
                    }

                };
            }
            for (let element of restaurantData) {
                [workerName, workerSalary] = element.split(' ');
                workerSalary = Number(workerSalary);
                restaurants[restaurantName].workers[workerName] = workerSalary;
            }
        }

        let bestRestaurantName = Object.keys(restaurants).sort((a, b) => {
            a = restaurants[a].avgSalary();
            b = restaurants[b].avgSalary();
            return b - a;
        })[0];

        let bestRestaurant = restaurants[bestRestaurantName];
        let sortedBestRestaurant = Object.entries(bestRestaurant.workers)
            .sort((a, b) => {
                let firstValue = a[1];
                let secondValue = b[1];
                return secondValue - firstValue;
            });


        let bestAvgSalary = bestRestaurant.avgSalary();
        let bestSalary = sortedBestRestaurant[0][1];

        let bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

        let bestRestaurantDataOutput = sortedBestRestaurant.map(v => `Name: ${v[0]} With Salary: ${v[1]}`).join(" ");

        document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
        document.querySelector('#workers p').textContent = bestRestaurantDataOutput;

    }
}