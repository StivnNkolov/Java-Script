function solve(inputArray) {

    let resultArray = [];
    let arrayLength = inputArray.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = inputArray[i];

        for (let i2 = i + 1; i2 < arrayLength; i2++) {
            if (currentNumber <= inputArray[i2]) {
                currentNumber = null;
                break;
            }
        }

        if (currentNumber != null) {
            resultArray.push(currentNumber);
        }
    }
    console.log(resultArray.join(" "));

}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);

