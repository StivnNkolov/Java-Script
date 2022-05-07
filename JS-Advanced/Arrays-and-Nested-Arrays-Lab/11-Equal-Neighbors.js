// function equalNeighbors(inputMatrix) {
//     function findDeltas(elementRow, elementCol, matrix) {
//         // let deltasValues = [];
//         let counter = 0;
//         let deltasArray = [[-1, 0], [0, -1], [0, + 1], [+1, 0]];

//         for (let row = 0; row < 4; row++) {
//             let rowToUse = elementRow + deltasArray[row][0];
//             let colToUse = elementCol + deltasArray[row][1];
//             let rowChecker = rowToUse >= 0 && rowToUse < matrix.length;
//             let colChecker = colToUse >= 0 && colToUse < matrix[0].length;
//             if (rowChecker && colChecker) {
//                 let currentValue = matrix[rowToUse][colToUse];
//                 if (matrix[elementRow][elementCol] === currentValue) {
//                     counter += 1
//                 }
//                 // deltasValues.push(currentValue);let deltas = 



//         }
//         return counter;
//     }


//     let equalsCount = 0;

//     let matrixLen = inputMatrix.length;
//     for (let row1 = 0; row1 < matrixLen; row1++) {
//         for (let col = 0; col < inputMatrix[0].length; col++) {
//             // let element = inputMatrix[row1][col];


//             let matchesCounter = findDeltas(row1, col, inputMatrix);

//             if (matchesCounter > 0) {
//                 equalsCount += matchesCounter;
//                 inputMatrix[row1][col] = "*";
//             }
//             // if (deltasV.find(function (str) {
//             //     return str === element;
//             // })) {
//             //     equalsCount += 1;
//             //     inputMatrix[row1][col] = "*";
//             // }
//         }
//     }
//     return parseInt(equalsCount);
// }

// console.log(equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]
// ));


// console.log(equalNeighbors([[2, 2, 5, 7, 4],
// [2, 0, 5, 3, 4],
// [0, 5, 5, 4, 2]]))

// console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// ));


// function solve(inputMatrix) {
//     let pairsCount = 0;

//     function findPairs(currRow, currCol, matrix) {
//         let deltasArray = [[-1, 0], [0, -1], [0, + 1], [+1, 0]];

//         let counter = 0;

//         for (let i = 0; i < 4; i++) {
//             let funcRow = currRow + deltasArray[i][0];
//             let funcCol = currCol + deltasArray[i][1];
//             let rowChecker = funcRow >= 0 && funcRow < matrix.length;
//             let colChecker = funcCol >= 0 && funcCol < matrix[0].length;

//             if (rowChecker && colChecker) {
//                 let currElement = matrix[funcRow][funcCol];
//                 if (currElement === matrix[currRow][currCol]) {
//                     counter += 1;
//                 }else {
//                     continue;
//                 }
//             }
//         };
//         return counter;

//     }

//     for (let row = 0; row < inputMatrix.length; row++) {
//         for (let col = 0; col < inputMatrix[row].length; col++) {
//             let funcPairs = findPairs(row, col, inputMatrix);
//             if (funcPairs > 0) {
//                 pairsCount += funcPairs;
//                 inputMatrix[row][col] = '*';
//             }
//         }
//     }
//     return pairsCount;

// }


function solve(inputMatrix) {
    let pairsCount = 0;
    let matrixLength = inputMatrix.length;
    // console.log(matrixLength)

    function findPairs(currRow, currCol, matrix) {
        let lookArounds = [[-1, 0], [0, +1], [+1, 0], [0, -1]]

        let elementToLookFor = matrix[currRow][currCol];
        let counter = 0;

        for (let i = 0; i < lookArounds.length; i++) {
            let [lookaroundRow, lookaroundCol] = lookArounds[i];
            let checkRow = currRow + lookaroundRow;
            let checkCol = currCol + lookaroundCol;
            if (checkRow < 0 || checkRow > matrix.length - 1) {
                continue;
            };
            if (checkCol < 0 || checkCol > matrix[0].length - 1) {
                continue;
            };
            let elementToCheck = matrix[checkRow][checkCol];


            if (elementToLookFor == elementToCheck) {
                counter += 1;
            }
        };

        return counter;

    }

    for (let row = 0; row < matrixLength; row++) {

        let rowLength = inputMatrix[row].length;
        // console.log(rowLength)

        for (let col = 0; col < rowLength; col++) {
            let currElement = inputMatrix[row][col]
            // console.log(currElement)

            let match = findPairs(row, col, inputMatrix);
            if (match > 0) {
                inputMatrix[row][col] = '*';
                pairsCount += match;
            } else {
                continue;
            }
        };
    };
    console.log(pairsCount);

}

// solve(
//     [
//         ['2', '3', '4', '7', '0'],
//         ['4', '0', '5', '3', '4'],
//         ['2', '3', '5', '4', '2'],
//         ['9', '8', '7', '5', '4']
//     ]
// );


solve(
    [
        ['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']
    ]
);

// [[2, 2, 5, 7, 4]
// [4 ,0, 5, 3 ,4]
// [2, 5, 5, 4, 2]]

solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]);

// solve(
//     [
//         [n, n, n],
//         [n, n, n],
//         [n, n, 1]
//     ]
// )
// solve(
//     [
//         [5, 5],
//         [5, 5]
//     ]
// )