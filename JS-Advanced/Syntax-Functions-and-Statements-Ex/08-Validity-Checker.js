// function validityChecker(x1, y1, x2, y2) {
//     let firstCase = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
//     if (Number.isInteger(firstCase)) {
//         console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
//     }else {
//         console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
//     }
//     let secondCase = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
//     if (Number.isInteger(secondCase)) {
//         console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
//     }else {
//         console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
//     }
//     let thirdCase = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//     if (Number.isInteger(thirdCase)) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     }else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }  

// validityChecker(3, 0, 0, 4);

// function solve(x1, y1, x2, y2) {
//     let first = Number.isInteger(Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2))) ? 'valid' : 'invalid';
//     let second = Number.isInteger(Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2))) ? 'valid' : 'invalid';
//     let third = Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))) ? 'valid' : 'invalid';

//     console.log(`{${x1}, ${y1}} to {0, 0} is ${first}`);
//     console.log(`{${x2}, ${y2}} to {0, 0} is ${second}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${third}`);
// }

// solve(3, 0, 0, 4);

// // solve(2, 1, 1, 1);


// function solve(x1, y1, x2, y2) {
//     let first = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
//     let second = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
//     let third = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));




//     function validation(number) {
//         if (number % 1 == 0) {
//             return "valid"
//         } else {
//             return "invalid"
//         }
//     }

//     console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${validation(first)}`);
//     console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${validation(second)}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validation(third)}`);
// }

// function checkValidity(x1, y1, x2, y2) {
//     let first = Math.sqrt(Math.pow(-x1, 2) + Math.pow(-y1, 2));
//     let second = Math.sqrt(Math.pow(-x2, 2) + Math.pow(-y2, 2));
//     let both = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//     let firstValidation = 'invalid';
//     let secondValidation = 'invalid';
//     let bothValidation = 'invalid';

//     if (!first.toString().includes('.')) {
//         firstValidation = 'valid';
//     }
//     if (!second.toString().includes('.')) {
//         secondValidation = 'valid';
//     }
//     if (!both.toString().includes('.')) {
//         bothValidation = 'valid';
//     }

//     console.log(`{${x1}, ${y1}} to {0, 0} is ${firstValidation}`);
//     console.log(`{${x2}, ${y2}} to {0, 0} is ${secondValidation}`);
//     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${bothValidation}`);
// }

function validityChecker(x1, y1, x2, y2) {
    let firstCase = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    if (Number.isInteger(firstCase)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    let secondCase = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
    if (Number.isInteger(secondCase)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let thirdCase = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (Number.isInteger(thirdCase)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
} 