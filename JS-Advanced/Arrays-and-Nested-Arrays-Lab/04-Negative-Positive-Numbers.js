function negativePositiveNums(inputArray) {
    let resultArray = [];
    let inputArrayLength = inputArray.length;

    for (i = 0; i < inputArrayLength; i++) {

        let workingValue = inputArray[i]

        if (workingValue < 0) {
            resultArray.unshift(workingValue);
        } else {
            resultArray.push(workingValue);
        }
    }
    console.log(resultArray.join('\n'));
}

negativePositiveNums([7, -2, 8, 9]);
negativePositiveNums([3, -2, 0, -1]);
