// function processOldPositions(inputArray) {
//     let resultArray = [];

//     let inputArrayLength = inputArray.length;

//     for (i = 0; i < inputArrayLength; i++) {
//         if (i % 2 !== 0) {
//             let workNumber = inputArray[i] * 2;
//             resultArray.unshift(workNumber);
//         }
//     }
//     return resultArray;
// }

// console.log(processOldPositions([10, 15, 20, 25]));
// console.log(processOldPositions([3, 0, 10, 4, 7, 3]));


function solve(inputArray) {
    let result = inputArray
        .filter((v, i, arr) => i % 2 != 0)
        .map((v, i, arr) => v * 2)
        .reverse()
        .join(' ');
        return result;
}

function solve(inputArray) {
    let result = inputArray
        .reduce((pv, cv, ci, arr) => {
            if (ci % 2 != 0) {
                pv.push(cv * 2)
            }
            return pv;
        }, [])
        .reverse()
        .join(' ');

    return result;
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));
