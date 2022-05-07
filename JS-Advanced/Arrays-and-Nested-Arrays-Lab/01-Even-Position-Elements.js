// function evenPosition(inputArray) {
//     let arrayLength = inputArray.length - 1;
//     let result = [];
//     for (i = 0; i <= arrayLength; i++) {

//         if (i % 2 === 0) {
//             // console.log(inputArray[i]);
//             result.push(inputArray[i]);
//         }
//     }
//     console.log(result.join(' '));
// }

// evenPosition(['20', '30', '40', '50', '60']);
// // evenPosition(['5', '10']);


// function solve(inputArray) {
//     let evenArray = inputArray
//         .filter((value, index, array) => {
//             if (index % 2 == 0) {
//                 return value;
//             }

//         }).join(' ')
//     console.log(evenArray);
// }

function solve(inputArray) {

    let result = [];

    for (let i = 0; i < inputArray.length; i += 2) {
        result.push(inputArray[i]);
    }
    console.log(result.join(" "));
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);
