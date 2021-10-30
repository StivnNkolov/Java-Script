function solve(inputArray) {
    let initialSum = inputArray.reduce(function (a, b) {
        return a + b;
    })

    for (let i = 0; i < inputArray.length; i++) {
        let currNumber = inputArray[i];

        if (currNumber % 2 == 0) {
            inputArray[i] = currNumber + i;
        } else {
            inputArray[i] = currNumber - i;
        }

    }

    let finalSum = inputArray.reduce(function (a, b) {
        return a + b;
    })

    console.log(inputArray);
    console.log(initialSum);
    console.log(finalSum);

}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
