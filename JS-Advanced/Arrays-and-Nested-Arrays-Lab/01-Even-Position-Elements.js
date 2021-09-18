function evenPosition(inputArray) {
    let arrayLength = inputArray.length - 1;
    let result = [];
    for (i = 0; i <= arrayLength; i++) {

        if (i % 2 === 0) {
            // console.log(inputArray[i]);
            result.push(inputArray[i]);
        }
    }
    console.log(result.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
// evenPosition(['5', '10']);
