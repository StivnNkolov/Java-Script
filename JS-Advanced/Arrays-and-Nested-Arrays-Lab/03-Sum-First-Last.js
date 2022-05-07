// function sumFirstLast(inputArray) {
//     let arrayOfNumbers = inputArray.map(Number);
//     let lastElIndex = inputArray.length - 1;

//     let firstEl = arrayOfNumbers[0];
//     let lastEl = arrayOfNumbers[lastElIndex];

//     let result = firstEl + lastEl;
//     return result;
// }

// console.log(sumFirstLast(['20', '30', '40']));
// console.log(sumFirstLast(['5', '10']));

// function solve(inputArray) {
//     let result = Number(inputArray.shift()) + Number(inputArray.pop());
//     return result;
// }

function solve(inputArray) {
    let firstElement = Number(inputArray[0]);
    let lastElement = Number(inputArray[inputArray.length - 1]);

    let result = firstElement + lastElement;

    return result;
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));