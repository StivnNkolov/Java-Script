// function negativePositiveNums(inputArray) {
//     let resultArray = [];
//     let inputArrayLength = inputArray.length;

//     for (i = 0; i < inputArrayLength; i++) {

//         let workingValue = inputArray[i]

//         if (workingValue < 0) {
//             resultArray.unshift(workingValue);
//         } else {
//             resultArray.push(workingValue);
//         }
//     }
//     console.log(resultArray.join('\n'));
// }

// negativePositiveNums([7, -2, 8, 9]);
// negativePositiveNums([3, -2, 0, -1]);

function solve(inputArray) {

    let resultArray = [];

    for (const element of inputArray) {
        if (element < 0) {
            resultArray.unshift(element);
        }else {
            resultArray.push(element);
        };
    };
    console.log(resultArray);
}

function solve(inputArray) {
    let result = inputArray
        .reduce((pv, cv) => {
            if (cv < 0) {
                pv.unshift(cv)
            } else {
                pv.push(cv)
            }
            return pv;
        }, [])
        .join('\n');

    console.log(result);
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
