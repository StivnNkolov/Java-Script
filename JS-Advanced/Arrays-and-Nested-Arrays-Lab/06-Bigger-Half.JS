// function biggerHalf(inputArray) {
//     // console.log(inputArray);

    

//     inputArray.sort(function(a, b) {
//         return a - b;
//     });

//     let neededLength = Math.floor(inputArray.length / 2);
//     let resultArray = inputArray.slice(neededLength, inputArray.length);

//     return resultArray;
// }

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

function solve(inputArray) {
    let startIndexForSlice = Math.floor(inputArray.length / 2);
    let resultArray = inputArray
    .sort((a, b) => a - b)
    .slice(startIndexForSlice, inputArray.length);
    return resultArray;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));