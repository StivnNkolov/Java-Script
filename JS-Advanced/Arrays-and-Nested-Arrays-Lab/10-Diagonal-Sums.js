function diagonalSums(inputArray) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let sums = Array;

    let arrayLength = inputArray.length;

    for (i = 0; i < arrayLength; i++) {
        mainDiagonalSum += inputArray[i][i];
        secondaryDiagonalSum += inputArray[i][arrayLength - 1 - i];
    }
    console.log(mainDiagonalSum, secondaryDiagonalSum);

}

diagonalSums([[20, 40],
[10, 60]]
)

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)