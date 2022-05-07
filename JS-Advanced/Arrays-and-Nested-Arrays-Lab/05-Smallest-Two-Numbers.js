// function smallestTwoNumbers(inputArray) {

//     let minValues = [];

//     for (i = 1; i < 3; i++) {

//         let minValue = Math.min(...inputArray);
//         let minValueIndex = inputArray.indexOf(minValue);

//         inputArray.splice(minValueIndex, 1);
//         minValues.push(minValue);
//     }
//     console.log(minValues.join(" "));
// }

// smallestTwoNumbers([9, 0, 0, 2, 3]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function solve(inputArray) {
    let smallestNumbers = inputArray
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');
    
    console.log(smallestNumbers);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);