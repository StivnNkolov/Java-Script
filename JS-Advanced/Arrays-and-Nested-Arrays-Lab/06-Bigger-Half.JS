function biggerHalf(inputArray) {
    // console.log(inputArray);

    

    inputArray.sort(function(a, b) {
        return a - b;
    });

    let neededLength = Math.floor(inputArray.length / 2);
    let resultArray = inputArray.slice(neededLength, inputArray.length);

    return resultArray;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));