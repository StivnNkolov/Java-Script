// function lastKNumbers(firstNum, secondNum) {
//     let arrayResult = [1];
//     let workingIndex = 0;

//     for (i = 0; i <= firstNum - 2; i++) {
//         if (arrayResult.length > (secondNum)) {
//             workingIndex = arrayResult.length - secondNum;

//         }
//         let middleResult = 0;
//         let currentArray = arrayResult.slice(workingIndex, arrayResult.length);
//         for (i2 = 0; i2 <= currentArray.length - 1; i2++) {
//             middleResult += Number(currentArray[i2]);
//         }
//         arrayResult.push(middleResult);
//     }
//     return arrayResult;
// }

// console.log(lastKNumbers(6, 3));
// // console.log(lastKNumbers(8, 2));
// console.log(lastKNumbers(0, 0));

function solve(num1, num2) {
    let sequenceOfNumbers = [1];

    function reducer(pv, cv) {
        return pv + cv;
    }

    for (let i = 1; i < num1; i++) {
        let currentValue;
        if (sequenceOfNumbers.length < num2) {
            currentValue = sequenceOfNumbers
                .reduce(reducer, 0);
        } else {
            currentValue = sequenceOfNumbers
                .slice(i - num2, i + 1)
                .reduce(reducer, 0);
        }
        sequenceOfNumbers.push(currentValue);
    }
    return sequenceOfNumbers;
}

console.log(solve(8, 2));