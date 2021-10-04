function carFacotry(inputObj) {

    function findWheelsSize() {
        let initialSize = Number(inputObj["wheelsize"]);
        let intValue = parseInt(initialSize);
        if (intValue % 2 === 0) {
            intValue -= 1;
        }
        let res = [intValue, intValue, intValue, intValue];
        return res;

    }

    function findTypeAndColour() {
        let type = inputObj["carriage"];
        let colour = inputObj["color"];
        return { type: type, color: colour };
    };

    function findModel(carObj) {
        let modelType = inputObj["model"];
        return carObj.model = modelType;
    };

    function findEngine(carObj) {
        let currPower = Number(inputObj["power"]);
        let keys = Object.keys(engine);
        let closest = keys.reduce(function (prev, curr) {
            return (Math.abs(curr - currPower) < Math.abs(prev - currPower) ? curr : prev);
        });
        const middleObj = {
            power: Number(closest),
            volume: engine[closest]
        };

        return carObj.engine = middleObj;
    };
    const engine = {
        90: 1800,
        120: 2400,
        200: 3500
    };



    const car = {};
    findModel(car);
    findEngine(car);
    car.carriage = findTypeAndColour();
    car.wheels = findWheelsSize();
    // console.log(car.wheelsize.length);
    return car;




}


// a = carFacotry({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 });



a = carFacotry({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});


console.log(a);

