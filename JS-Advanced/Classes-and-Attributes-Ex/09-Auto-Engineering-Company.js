function solve(inputArray) {
    let carsObject = {

    }

    for (let element of inputArray) {
        let [carName, carModel, carCount] = element.split(' | ');
        carCount = Number(carCount);

        if (carsObject[carName] == undefined) {
            carsObject[carName] = {
                models: {}
            }
        }
        if (carsObject[carName].models[carModel] == undefined) {
            carsObject[carName].models[carModel] = 0
        }

        carsObject[carName].models[carModel] += carCount;
    }

    for (let car in carsObject) {
        console.log(car);
        for (let model in carsObject[car].models) {
            console.log(`###${model} -> ${carsObject[car].models[model]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
