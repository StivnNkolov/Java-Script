function printNthElement(inputArray, step) {
    let result = [];

    let inputArrayLen = inputArray.length;

    for (let i = 0; i < inputArrayLen; i += step) {
        result.push(inputArray[i]);
    }

    return result;
}

console.log(printNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));

console.log(printNthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
));


console.log(printNthElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));