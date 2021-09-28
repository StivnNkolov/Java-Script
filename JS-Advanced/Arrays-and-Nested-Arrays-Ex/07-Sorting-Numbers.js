function sortingNumbers(inputArray) {
    let sortedNumsAscending = inputArray.sort(function (a, b) {
        return a - b;
    });

    let newArray = [];
    while (inputArray.length > 0) {
        let smallest = sortedNumsAscending.shift();
        let biggest = sortedNumsAscending.pop();

        newArray.push(smallest);
        newArray.push(biggest);
        лет  = 2;

    }
    return newArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));