// function extractFromArray(inputArray) {

//     let inputArrayLen = inputArray.length;
//     let biggestNumber = inputArray[0];

//     let resultArray = [inputArray[0]];

//     for (let i = 1; i < inputArrayLen; i++) {
//         let currentNumber = inputArray[i];

//         if (currentNumber >= biggestNumber) {
//             resultArray.push(currentNumber);
//             biggestNumber = currentNumber;
//         }
//     }
//     return resultArray;
// }

// console.log(extractFromArray([-11,
//     1,
// -22
// ]
// ));
// console.log(extractFromArray([1,
//     2,
//     3,
//     4]
// ));
// console.log(extractFromArray([20,
//     3,
//     2,
//     15,
//     6,
//     1]
// ));

// function solve(inputArray) {
//     let newArray = []
//     let result = inputArray.reduce((pv, cv, ci, arr) => {
//         if (ci == 0) {
//             newArray.push(cv);
//         } else if (cv >= newArray[newArray.length - 1]) {
//             newArray.push(cv);
//         }
//     }, inputArray[0]);
//     return newArray;
//     // console.log(newArray);
// }

function solve(inputArray) {

    let result = inputArray.reduce((pv, cv, ci, arr) => {
        if (ci == 0) {
            pv.push(cv);
        } else if (cv >= pv[pv.length - 1]) {
            pv.push(cv);
        };

        return pv;
    }, []);
    return result;
}

// solve([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24])

// console.log(solve([
//     1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24
// ]));

// console.log(solve([
//     1,
//     2,
//     3,
//     4
// ]));

console.log(solve([
    20,
    3,
    2,
    15,
    6,
    1
]));




