function extractFromArray(inputArray) {

    let inputArrayLen = inputArray.length;
    let biggestNumber = inputArray[0];

    let resultArray = [inputArray[0]];

    for (let i = 1; i < inputArrayLen; i++) {
        let currentNumber = inputArray[i];

        if (currentNumber >= biggestNumber) {
            resultArray.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }
    return resultArray;
}

console.log(extractFromArray([-11,
    1,
-22
]
));
console.log(extractFromArray([1,
    2,
    3,
    4]
));
console.log(extractFromArray([20,
    3,
    2,
    15,
    6,
    1]
));
