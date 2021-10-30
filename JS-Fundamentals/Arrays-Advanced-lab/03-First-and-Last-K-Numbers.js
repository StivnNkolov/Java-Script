function solve(inputArray) {


    const kNumbers = inputArray.shift();

    const workingArrayLen = inputArray.length;

    let firstKNumbers = inputArray.slice(0, kNumbers);
    let lastKNumbers = inputArray.slice((workingArrayLen - kNumbers), workingArrayLen);

    console.log(firstKNumbers.join(" "));
    console.log(lastKNumbers.join(" "));



}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);