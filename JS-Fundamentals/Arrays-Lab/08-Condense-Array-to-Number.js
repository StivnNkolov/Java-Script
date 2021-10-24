function solve(inputArray) {

    let workingArray = inputArray;

    while (workingArray.length > 1) {
        let middleArray = [];

        for (let i = 0; i < workingArray.length-1; i++) {
            let currSum = workingArray[i] + workingArray[i + 1];
            middleArray.push(currSum);

        }
        workingArray = middleArray;
    }

    console.log(workingArray[0]);


}


solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
