function solve(inputArray) {

    function reducer(a, b) {
        return a + b;
    }

    let workingArrayLength = inputArray.length;

    let goodIndexes = [];

    for (let i = 0; i < workingArrayLength; i++) {

        let leftSum = 0;
        let righSum = 0;

        let leftArray = inputArray.slice(0, i);
        let rightArray = inputArray.slice(i + 1, workingArrayLength);

        if (leftArray.length > 0) {
            leftSum = leftArray.reduce(reducer);
        }

        if (rightArray.length > 0) {
            righSum = rightArray.reduce(reducer);
        }

        if (leftSum === righSum) {
            goodIndexes.push(i);
        }
    }

    if (goodIndexes.length > 0) {
        console.log(goodIndexes[0]);
    } else {
        console.log("no");
    }
}


solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);