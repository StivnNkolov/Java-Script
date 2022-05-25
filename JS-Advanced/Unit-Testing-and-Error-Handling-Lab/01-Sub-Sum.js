function solve(inputArray, startIndex, endIndex) {
    if (!Array.isArray(inputArray)) {
        return NaN;
    }
    startIndex = startIndex < 0 ? startIndex = 0 : startIndex;
    endIndex = endIndex > inputArray.length - 1 ? inputArray.length - 1 : endIndex;

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        let currentElement = Number(inputArray[i])
        if (Number.isNaN(currentElement)) {
            return NaN;
        }
        sum += currentElement;
    }

    return sum;

}

console.log(solve(
    [10, 20, 30, 40, 50, 60], 3, 300
));
console.log(solve(
    [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1
));
console.log(solve(
    [10, 'twenty', 30, 40], 0, 2
));
console.log(solve(
    [], 1, 2
));
console.log(solve(
    'text', 0, 2
));
