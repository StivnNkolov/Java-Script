function solve(inputArray) {

    let evenSum = 0;
    let oddSum = 0;

    for (let el of inputArray) {
        if (el % 2 == 0) {
            evenSum += el;
        } else {
            oddSum += el;
        }
    }

    console.log(evenSum - oddSum);


}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
