function equalNeighbors(inputMatrix) {
    function findDeltas(elementRow, elementCol, matrix) {
        // let deltasValues = [];
        let counter = 0;
        let deltasArray = [[-1, 0], [0, -1], [0, + 1], [+1, 0]];

        for (let row = 0; row < 4; row++) {
            let rowToUse = elementRow + deltasArray[row][0];
            let colToUse = elementCol + deltasArray[row][1];
            let rowChecker = rowToUse >= 0 && rowToUse < matrix.length;
            let colChecker = colToUse >= 0 && colToUse < matrix[0].length;
            if (rowChecker && colChecker) {
                let currentValue = matrix[rowToUse][colToUse];
                if (matrix[elementRow][elementCol] === currentValue) {
                    counter += 1
                }
                // deltasValues.push(currentValue);
            } else {
                continue;
            }



        }
        return counter;
    }


    let equalsCount = 0;

    let matrixLen = inputMatrix.length;
    for (let row1 = 0; row1 < matrixLen; row1++) {
        for (let col = 0; col < inputMatrix[0].length; col++) {
            // let element = inputMatrix[row1][col];


            let matchesCounter = findDeltas(row1, col, inputMatrix);

            if (matchesCounter > 0) {
                equalsCount += matchesCounter;
                inputMatrix[row1][col] = "*";
            }
            // if (deltasV.find(function (str) {
            //     return str === element;
            // })) {
            //     equalsCount += 1;
            //     inputMatrix[row1][col] = "*";
            // }
        }
    }
    return parseInt(equalsCount);
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));


console.log(equalNeighbors([[2, 2, 5, 7, 4],
[2, 0, 5, 3, 4],
[0, 5, 5, 4, 2]]))

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));
