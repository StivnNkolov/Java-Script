function circleArea(input_value) {
    let typeOfTheValue = typeof(input_value);


    if (typeOfTheValue === "number") {
        let area = input_value ** 2 * Math.PI;
        console.log(area.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfTheValue}.`);
    }

}

circleArea(5);
circleArea('name');