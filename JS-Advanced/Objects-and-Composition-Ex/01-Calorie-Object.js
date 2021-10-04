function calories(inputData) {
    const foodObj = {}

    for (let i = 0; i < inputData.length; i+= 2) {
        let currentName = inputData[i];
        let neededValue = inputData[i + 1];
        foodObj[currentName] = Number(neededValue);

    }
    console.log(foodObj);
}
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])