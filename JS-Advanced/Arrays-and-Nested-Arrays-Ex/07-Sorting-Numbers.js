// function sortingNumbers(inputArray) {
//     let sortedNumsAscending = inputArray.sort(function (a, b) {
//         return a - b;
//     });

//     let newArray = [];
//     while (inputArray.length > 0) {
//         let smallest = sortedNumsAscending.shift();
//         let biggest = sortedNumsAscending.pop();

//         newArray.push(smallest);
//         newArray.push(biggest);
//         лет = 2;

//     }
//     return newArray;
// }

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


function solve(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b);
    // return sortedArray;

    let resultArray = [];
    let neededLen = Math.ceil(sortedArray.length / 2);


    for (let i = 0; i < neededLen; i++) {
        let smallElement = sortedArray.shift();
        let bigElement = sortedArray.pop();
        if (smallElement != undefined) {
            resultArray.push(smallElement)
        };
        if (bigElement != undefined) {
            resultArray.push(bigElement);
        };
    }
    return resultArray;
}

console.log(solve(
    [
        1,
        65,
        3,
        52,
        48,
        63,
        31,
        -3,
        18,
    ]
));

