function solve(inputArray, number) {
    const workingArrayLength = inputArray.length;

    for (let i = 0; i < workingArrayLength; i++) {
        let currentElement = inputArray[i];

        for (let i2 = i + 1; i2 < workingArrayLength; i2++) {
            let middleElement = inputArray[i2];

            if (currentElement + middleElement == number) {
                console.log(currentElement, middleElement);
            }
        }
    }
}


solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);
