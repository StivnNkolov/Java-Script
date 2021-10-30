function solve(inputArray) {
    let arrayAsNumbers = inputArray.map(Number);

    let firstElement = arrayAsNumbers[0];
    let lastElement = arrayAsNumbers[arrayAsNumbers.length - 1];

    let result = firstElement + lastElement;

    console.log(result);

}


solve(['20', '30', '40']);
solve(['5', '10']);
