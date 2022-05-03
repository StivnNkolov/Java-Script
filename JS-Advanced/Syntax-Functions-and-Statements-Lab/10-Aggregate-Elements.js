// function aggregateElements(input) {
//     let sumElements = 0;
//     let inverseValue = 0;

//     for (i = 0; i < input.length; i++) {
//         sumElements += Number(input[i]);
//         inverseValue += 1 / Number(input[i]);
//     }
//     console.log(sumElements);
//     console.log(inverseValue);
//     console.log(input.join(""));
// }


// aggregateElements([1,2,3])
// aggregateElements([2, 4, 8, 16])


function solve(inputArray) {
    const inputArrayLength = inputArray.length;

    let sum = 0;
    let invertSum = 0;
    let concatValue = '';

    for (let i = 0; i < inputArrayLength; i++) {
        const currentNumber = inputArray[i];

        sum += currentNumber;
        invertSum += 1 / currentNumber;
        concatValue += currentNumber;
    }

    console.log(sum);
    console.log(invertSum);
    console.log(concatValue);
}

solve([2, 4, 8, 16])