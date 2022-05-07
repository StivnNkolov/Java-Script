// function biggestElement(inputArray) {
//     let middleArray = [];

//     for (i = 0; i < inputArray.length; i++) {
//         let middleMaxNumber = Math.max(...inputArray[i]);
//         middleArray.push(middleMaxNumber);
//     }

//     let maxNumber = Math.max(...middleArray);
//     return maxNumber;
// }

// console.log(biggestElement([[20, 50, 10],
// [8, 33, 145]]
// ));

// console.log(biggestElement([[3, 5, 7, 12],
// [-1, 4, 33, 2],
// [8, 3, 0, 4]]
// ));

function solve(inputMatrix) {
    let a = inputMatrix.flat();
    let maxValue = Math.max(...a);
    return maxValue;

}

console.log(solve([[20, 50, 10],
[8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));