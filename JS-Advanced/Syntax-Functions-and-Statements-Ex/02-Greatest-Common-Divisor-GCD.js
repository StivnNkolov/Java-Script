// function GCD(firstNum, secondNum) {

//     for (i = secondNum; i >= 1; i--) {
//         if (firstNum % i === 0 && secondNum % i === 0) {
//             console.log(i);
//             break;
//         }

//     }
// }
// GCD(5, 1);


// function solve(num1, num2) {
//     const smallerNumber = Math.min(num1, num2);

//     for (let i = smallerNumber; i >= 1; i--) {
//         if (num1 % i == 0 && num2 % i == 0) {
//             return i;
//         };
//     };

// }
// console.log(solve(15, 5));
// console.log(solve(2154, 458));

function solve(num1, num2) {
    if (num1 == 0) {
        return num2;

    } else if (num2 == 0) {
        return num1;
    }
    if (num1 == num2) {
        return num1;
    };


    while (num2 > 0) {
        let temp = num2;

        let c = num1 % num2;
        num1 = temp;
        num2 = c;
    }
    return num1;
}

console.log(solve(15, 0));
