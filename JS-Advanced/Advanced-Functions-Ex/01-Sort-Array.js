function solve(inputArray, sortingString) {
    let sortingObject = {
        asc(a, b) {
            return a - b;
        },
        desc(a, b) {
            return b - a
        }
    }

    return inputArray.sort(sortingObject[sortingString])

}

solve([14, 7, 17, 6, 8], 'asc');

solve([14, 7, 17, 6, 8], 'desc');
