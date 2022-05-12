// function smt(inputArr) {
//     let cases = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//         "*": (a, b) => a * b,
//         "/": (a, b) => a / b
//     }
//     let notEnoughOperands = false;

//     let numbers = [];

//     while (inputArr.length > 0) {
//         let currSmt = inputArr.shift();

//         if (typeof currSmt == "number") {
//             numbers.push(currSmt);
//         } else {
//             let secondNumber = numbers.pop();
//             let firstNumber = numbers.pop();
//             if (secondNumber == undefined || firstNumber == undefined) {
//                 notEnoughOperands = true;
//                 break
//             }
//             let result = cases[currSmt](firstNumber, secondNumber);
//             numbers.push(result);
//         }

//     }
//     if (notEnoughOperands) {
//         console.log("Error: not enough operands!");
//     } else {
//         if (numbers.length > 1) {
//             console.log("Error: too many operands!");
//         } else {
//             console.log(numbers[0]);
//         }
//     }
// }

// smt([3,
//     4,
//     '+']
// );

// smt([5,
//     3,
//     4,
//     '*',
//     '-']
// );


// smt([7,
//     33,
//     8,
//     '-']
// );

// smt([15,
//     '/']
// );

function solve() {
    
}