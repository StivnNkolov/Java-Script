function solve(inputArray) {

    const workingArrayLen = inputArray.length;
    // console.log(halfLen);

    let result = inputArray.sort((a, b) => b - a);

    let resultArray = [];

    while (result.length > 0) {
        resultArray.push(result.shift());
        resultArray.push(result.pop());
    }

    console.log(resultArray.filter(v => v != undefined).join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 0]);