function lastKNumbers(firstNum, secondNum) {
    let arrayResult = [1];
    let workingIndex = 0;

    for (i = 0; i <= firstNum - 2; i++) {
        if (arrayResult.length > (secondNum)) {
            workingIndex = arrayResult.length - secondNum;

        }
        let middleResult = 0;
        let currentArray = arrayResult.slice(workingIndex, arrayResult.length);
        for (i2 = 0; i2 <= currentArray.length - 1; i2++) {
            middleResult += Number(currentArray[i2]);
        }
        arrayResult.push(middleResult);
    }
    return arrayResult;
}

console.log(lastKNumbers(6, 3));
// console.log(lastKNumbers(8, 2));
console.log(lastKNumbers(0, 0));
